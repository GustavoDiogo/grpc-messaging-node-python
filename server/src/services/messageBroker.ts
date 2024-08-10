import { channelController } from '../controllers/channelController';
import { IMessageBrokerServer } from '../proto/messaging_grpc_pb';
import { Channel, CreateChannelResponse, ListChannelsResponse, PublishMessageResponse, RemoveChannelResponse } from '../proto/messaging_pb';

export const messageBroker: IMessageBrokerServer = {
  createChannel(call, callback) {
    const body = call.request.toObject();

    console.log('Client requested to create channel:', body.name);
    const success = channelController.createChannel(body);

    const createChannelResponse = new CreateChannelResponse();
    createChannelResponse.setSuccess(success);

    if (success) {
      console.log('Channel created:', body.name);
    } else {
      console.log('Channel already exists:', body.name);
    }

    callback(null, createChannelResponse);
  },

  removeChannel(call, callback): void {
    const body = call.request.toObject();

    console.log('Client requested to remove channel:', body.name);
    const success = channelController.removeChannel(body.name);

    const removeChannelResponse = new RemoveChannelResponse();
    removeChannelResponse.setSuccess(success);

    if (success) {
      console.log('Channel removed:', body.name);

    } else {
      console.log('Channel does not exist:', body.name);
    }

    callback(null, removeChannelResponse);
  },

  listChannels(call, callback): void {
    const channels = channelController.listChannels();

    const listChannelsResponse = new ListChannelsResponse();

    channels.forEach((channel) => {
      const formattedChannel = new Channel();
      const { name, type } = channel;

      formattedChannel.setName(name);
      formattedChannel.setType(type);
      formattedChannel.setPendingMessages(channel.messages.length);
      listChannelsResponse.addChannels(formattedChannel);
    });

    callback(null, listChannelsResponse);
  },

  publishMessage(call, callback): void {
    const body = call.request.toObject();
    const message = atob(body.content.toString());

    console.log('Client requested to publish message to channel:', body.channelName);
    const success = channelController.publishMessage(body.channelName, Buffer.from(message));
    
    const publishMessageResponse = new PublishMessageResponse();
    publishMessageResponse.setSuccess(success);
    
    if (success) {
      console.log('Message published to channel:', body.channelName);
      console.log('Message:', message);
    } else {
      console.log('Channel does not exist:', body.channelName);
    }

    callback(null, publishMessageResponse);
  },

  subscribeChannel(call) {
    channelController.subscribe(call);
  },

  receiveMessage(call, callback) {
    const body = call.request.toObject();
    const { channelName } = body;

    console.log('Client requested to receive message from channel:', channelName);

    const message = channelController.receiveMessage(channelName);

    callback(null, message);
  },
};
