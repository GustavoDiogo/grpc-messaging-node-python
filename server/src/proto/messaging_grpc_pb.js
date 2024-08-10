// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var messaging_pb = require('./messaging_pb.js');

function serialize_messaging_CreateChannelRequest(arg) {
  if (!(arg instanceof messaging_pb.CreateChannelRequest)) {
    throw new Error('Expected argument of type messaging.CreateChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messaging_CreateChannelRequest(buffer_arg) {
  return messaging_pb.CreateChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messaging_CreateChannelResponse(arg) {
  if (!(arg instanceof messaging_pb.CreateChannelResponse)) {
    throw new Error('Expected argument of type messaging.CreateChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messaging_CreateChannelResponse(buffer_arg) {
  return messaging_pb.CreateChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messaging_ListChannelsRequest(arg) {
  if (!(arg instanceof messaging_pb.ListChannelsRequest)) {
    throw new Error('Expected argument of type messaging.ListChannelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messaging_ListChannelsRequest(buffer_arg) {
  return messaging_pb.ListChannelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messaging_ListChannelsResponse(arg) {
  if (!(arg instanceof messaging_pb.ListChannelsResponse)) {
    throw new Error('Expected argument of type messaging.ListChannelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messaging_ListChannelsResponse(buffer_arg) {
  return messaging_pb.ListChannelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messaging_Message(arg) {
  if (!(arg instanceof messaging_pb.Message)) {
    throw new Error('Expected argument of type messaging.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messaging_Message(buffer_arg) {
  return messaging_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messaging_PublishMessageRequest(arg) {
  if (!(arg instanceof messaging_pb.PublishMessageRequest)) {
    throw new Error('Expected argument of type messaging.PublishMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messaging_PublishMessageRequest(buffer_arg) {
  return messaging_pb.PublishMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messaging_PublishMessageResponse(arg) {
  if (!(arg instanceof messaging_pb.PublishMessageResponse)) {
    throw new Error('Expected argument of type messaging.PublishMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messaging_PublishMessageResponse(buffer_arg) {
  return messaging_pb.PublishMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messaging_ReceiveMessageRequest(arg) {
  if (!(arg instanceof messaging_pb.ReceiveMessageRequest)) {
    throw new Error('Expected argument of type messaging.ReceiveMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messaging_ReceiveMessageRequest(buffer_arg) {
  return messaging_pb.ReceiveMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messaging_RemoveChannelRequest(arg) {
  if (!(arg instanceof messaging_pb.RemoveChannelRequest)) {
    throw new Error('Expected argument of type messaging.RemoveChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messaging_RemoveChannelRequest(buffer_arg) {
  return messaging_pb.RemoveChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messaging_RemoveChannelResponse(arg) {
  if (!(arg instanceof messaging_pb.RemoveChannelResponse)) {
    throw new Error('Expected argument of type messaging.RemoveChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messaging_RemoveChannelResponse(buffer_arg) {
  return messaging_pb.RemoveChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messaging_SubscribeChannelRequest(arg) {
  if (!(arg instanceof messaging_pb.SubscribeChannelRequest)) {
    throw new Error('Expected argument of type messaging.SubscribeChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messaging_SubscribeChannelRequest(buffer_arg) {
  return messaging_pb.SubscribeChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var MessageBrokerService = exports.MessageBrokerService = {
  createChannel: {
    path: '/messaging.MessageBroker/CreateChannel',
    requestStream: false,
    responseStream: false,
    requestType: messaging_pb.CreateChannelRequest,
    responseType: messaging_pb.CreateChannelResponse,
    requestSerialize: serialize_messaging_CreateChannelRequest,
    requestDeserialize: deserialize_messaging_CreateChannelRequest,
    responseSerialize: serialize_messaging_CreateChannelResponse,
    responseDeserialize: deserialize_messaging_CreateChannelResponse,
  },
  removeChannel: {
    path: '/messaging.MessageBroker/RemoveChannel',
    requestStream: false,
    responseStream: false,
    requestType: messaging_pb.RemoveChannelRequest,
    responseType: messaging_pb.RemoveChannelResponse,
    requestSerialize: serialize_messaging_RemoveChannelRequest,
    requestDeserialize: deserialize_messaging_RemoveChannelRequest,
    responseSerialize: serialize_messaging_RemoveChannelResponse,
    responseDeserialize: deserialize_messaging_RemoveChannelResponse,
  },
  listChannels: {
    path: '/messaging.MessageBroker/ListChannels',
    requestStream: false,
    responseStream: false,
    requestType: messaging_pb.ListChannelsRequest,
    responseType: messaging_pb.ListChannelsResponse,
    requestSerialize: serialize_messaging_ListChannelsRequest,
    requestDeserialize: deserialize_messaging_ListChannelsRequest,
    responseSerialize: serialize_messaging_ListChannelsResponse,
    responseDeserialize: deserialize_messaging_ListChannelsResponse,
  },
  publishMessage: {
    path: '/messaging.MessageBroker/PublishMessage',
    requestStream: false,
    responseStream: false,
    requestType: messaging_pb.PublishMessageRequest,
    responseType: messaging_pb.PublishMessageResponse,
    requestSerialize: serialize_messaging_PublishMessageRequest,
    requestDeserialize: deserialize_messaging_PublishMessageRequest,
    responseSerialize: serialize_messaging_PublishMessageResponse,
    responseDeserialize: deserialize_messaging_PublishMessageResponse,
  },
  subscribeChannel: {
    path: '/messaging.MessageBroker/SubscribeChannel',
    requestStream: false,
    responseStream: true,
    requestType: messaging_pb.SubscribeChannelRequest,
    responseType: messaging_pb.Message,
    requestSerialize: serialize_messaging_SubscribeChannelRequest,
    requestDeserialize: deserialize_messaging_SubscribeChannelRequest,
    responseSerialize: serialize_messaging_Message,
    responseDeserialize: deserialize_messaging_Message,
  },
  receiveMessage: {
    path: '/messaging.MessageBroker/ReceiveMessage',
    requestStream: false,
    responseStream: false,
    requestType: messaging_pb.ReceiveMessageRequest,
    responseType: messaging_pb.Message,
    requestSerialize: serialize_messaging_ReceiveMessageRequest,
    requestDeserialize: deserialize_messaging_ReceiveMessageRequest,
    responseSerialize: serialize_messaging_Message,
    responseDeserialize: deserialize_messaging_Message,
  },
};

exports.MessageBrokerClient = grpc.makeGenericClientConstructor(MessageBrokerService);
