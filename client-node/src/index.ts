import * as grpc from '@grpc/grpc-js';
import { MessageBrokerClient } from './proto/messaging_grpc_pb';
import { Channel, CreateChannelRequest, CreateChannelResponse, ListChannelsRequest, ListChannelsResponse, Message, PublishMessageRequest, PublishMessageResponse, ReceiveMessageRequest, RemoveChannelRequest, RemoveChannelResponse, SubscribeChannelRequest } from './proto/messaging_pb';

const client = new MessageBrokerClient('localhost:50051', grpc.credentials.createInsecure());

const createChannel = async (name: string, type: number) =>  {
  return new Promise((resolve, reject) => {
    const createChannelRequest = new CreateChannelRequest();
    createChannelRequest.setName(name);
    createChannelRequest.setType(type);
  
    client.createChannel(createChannelRequest, (error: any, response: CreateChannelResponse) => {
      if (error) {
        console.error('Error creating channel:', error);
        reject(error);
      } else {
        console.log(`Channel ${name} created:`, response.getSuccess());
        resolve(response.getSuccess());
      }
    });
  });
};

const publishMessage = async (name: string, content: any) => {
  return new Promise((resolve, reject) => {
    const publishMessageRequest = new PublishMessageRequest();
    publishMessageRequest.setChannelName(name);
    publishMessageRequest.setContent(Buffer.from(content));
  
    client.publishMessage(publishMessageRequest, (error: any, response: PublishMessageResponse) => {
      if (error) {
        console.error('Error publishing message:', error);
        reject(error);
      } else {
        console.log(`Message published to channel ${name}:`, response.getSuccess());
        resolve(response.getSuccess());
      }
    });
  });
};

const subscribeChannel = (name: string) => {
  const subscribeChannelRequest = new SubscribeChannelRequest();
  subscribeChannelRequest.setChannelName(name);
  
  const call = client.subscribeChannel(subscribeChannelRequest);
  console.log('Subscribed to channel:', name);
  call.on('data', (response: Message) => {
    console.log('Received message from subscription:', Buffer.from(response.getContent()).toString('utf-8'));
  });

  call.on('end', () => {
    console.log('Subscription ended');
  });
};

const listChannels = async () => {
  return new Promise((resolve, reject) => {
    const listChannelsRequest = new ListChannelsRequest();
  
    client.listChannels(listChannelsRequest, (error: any, response: ListChannelsResponse) => {
      if (error) {
        console.error('Error listing channels:', error);
        reject(error);
      } else {
        const channels = response.getChannelsList().map((channel: Channel) => channel.toObject());
        console.log('Channels:', channels); 
        resolve(channels); 
      }
    });
  });
};

const removeChannel = async (name: string) => {
  return new Promise((resolve, reject) => {
    const removeChannelRequest = new RemoveChannelRequest();
    removeChannelRequest.setName(name);
  
    client.removeChannel(removeChannelRequest, (error: any, response: RemoveChannelResponse) => {
      if (error) {
        console.error('Error removing channel:', error);
        reject(error);
      } else {
        console.log(`Channel ${name} removed:`, response.getSuccess());
        resolve(response.getSuccess());
      }
    });
  });
};

const receiveMessage = async (name: string) => {
  return new Promise((resolve, reject) => {
    const receiveMessageRequest = new ReceiveMessageRequest();  
    receiveMessageRequest.setChannelName(name);

    client.receiveMessage(receiveMessageRequest, (error: any, response: Message) => {
      const message = Buffer.from(response.getContent()).toString('utf-8');

      if (error) {
        console.error('Error receiving message:', error);
        reject(error);
      } else {
        if (response.getChannelName() === '') {
          console.log('There is no channel to receive messages with the name:', name);
        } else {
          console.log(`Received message from channel ${name}:`,  Buffer.from(response.getContent()).toString('utf-8'));
        }
        resolve(message);
      }
    });
  });
};

const main = async () => {
  await createChannel('test-channel', 1);
  await publishMessage('test-channel', 'Hello, World!');
  await listChannels();
  await receiveMessage('test-channel');
  
  await createChannel('test-channel-2', 1);
  await removeChannel('test-channel-2');
  await receiveMessage('test-channel-2');
  await listChannels();

  await publishMessage('test-channel', 'Hello, again!');
};

main();
