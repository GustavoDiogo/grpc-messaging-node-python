import { persistence } from '../utils/persistence';
import { ServerWritableStream } from '@grpc/grpc-js';
import fs from 'fs';
import path from 'path';
import { ChannelType,  CreateChannelRequest,  Message, SubscribeChannelRequest  } from '../proto/messaging_pb';
import { ChannelData } from '../models/channel';

const basePath = path.join(__dirname, '../../data');

if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
}

const channels: Map<string, ChannelData> = new Map();

const loadChannels = () => {
  const savedChannels = persistence.loadChannels();
  savedChannels.forEach(channel => {
    channels.set(channel.name, channel);
  });
};

loadChannels();

export const channelController = {
  createChannel(request: CreateChannelRequest.AsObject): boolean {
    if (channels.has(request.name)) {
      return false;
    }
    channels.set(request.name, {
      name: request.name,
      type: request.type,
      messages: [],
      subscribers: [],
    });
    persistence.saveChannel(request.name, {
      name: request.name,
      type: request.type,
      messages: [],
      subscribers: [],
    });
    return true;
  },

  removeChannel(name: string): boolean {
    if (!channels.has(name)) {
      return false;
    }
    channels.delete(name);
    persistence.deleteChannel(name);

    return true;
  },

  listChannels() {
    return channels;
  },

  publishMessage(channelName: string, message: Buffer): boolean {
    const channel = channels.get(channelName);
    if (!channel) {
      return false;
    }
    channel.messages.push(message);
    persistence.saveMessage(channelName, message);

    this.notifySubscribers(channel);
    return true;
  },

  subscribe(call: ServerWritableStream<SubscribeChannelRequest, Message>) {
    const body = call.request.toObject();
    
    const channelName = body.channelName;
    const channel = channels.get(channelName);
    
    if (!channel) {
      console.log('There is not channel to be subscribed with the name:', channelName);
      call.end();
      return;
    }
    channel.subscribers.push(call);
    console.log('Client subscribed to channel', channelName);

    call.on('cancelled', () => {
      channel.subscribers = channel.subscribers.filter(sub => sub !== call);
    });

    this.sendPendingMessages(channel, call);
  },

  notifySubscribers(channel: ChannelData): void {
    if (channel.type === ChannelType.SIMPLE) {
      if (channel.subscribers.length > 0 && channel.messages.length > 0) {
        const subscriber = channel.subscribers[0];
        const message = channel.messages.shift();
        const messageResponse = new Message();
        messageResponse.setContent(message || Buffer.from(''));
        messageResponse.setChannelName(channel.name);

        subscriber.write(messageResponse);
        persistence.deleteMessage(channel.name, message!);
      }
    } else if (channel.type === ChannelType.MULTIPLE) {
      if (channel.subscribers.length > 0 && channel.messages.length > 0) {
        const message = channel.messages.shift();
        channel.subscribers.forEach(subscriber => { 
          const messageResponse = new Message();
          messageResponse.setContent(message || Buffer.from(''));
          messageResponse.setChannelName(channel.name);

          subscriber.write(messageResponse);
        });
        persistence.deleteMessage(channel.name, message!);
      }
    }
  },

  sendPendingMessages(channel: ChannelData, call: ServerWritableStream<any, any>): void {
    while (channel.messages.length > 0) {
      const message = channel.messages.shift();
      const messageResponse = new Message();
      messageResponse.setContent(message || Buffer.from(''));

      console.log('Sending pending message:', messageResponse.getContent().toString());

      call.write(messageResponse);
      persistence.deleteMessage(channel.name, message!);
    }
  },

  receiveMessage(
    channelName: string,
  ) {
    const channel = channels.get(channelName);
    
    const messageResponse = new Message();
    if (!channel) {
      console.log('There is no channel to receive messages with the name:', channelName);
      messageResponse.setChannelName('');
      messageResponse.setContent(Buffer.from(''));
    } else {
      const message = channel.messages.shift();

      messageResponse.setChannelName(channelName);
      messageResponse.setContent(message || Buffer.from(''));
      console.log('Sending pending message:', messageResponse.getContent().toString());
      persistence.deleteMessage(channel.name, message!);
    }

    return messageResponse;

  },
};
