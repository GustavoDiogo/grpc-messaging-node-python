// package: messaging
// file: messaging.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as messaging_pb from "./messaging_pb";

interface IMessageBrokerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createChannel: IMessageBrokerService_ICreateChannel;
    removeChannel: IMessageBrokerService_IRemoveChannel;
    listChannels: IMessageBrokerService_IListChannels;
    publishMessage: IMessageBrokerService_IPublishMessage;
    subscribeChannel: IMessageBrokerService_ISubscribeChannel;
    receiveMessage: IMessageBrokerService_IReceiveMessage;
}

interface IMessageBrokerService_ICreateChannel extends grpc.MethodDefinition<messaging_pb.CreateChannelRequest, messaging_pb.CreateChannelResponse> {
    path: "/messaging.MessageBroker/CreateChannel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messaging_pb.CreateChannelRequest>;
    requestDeserialize: grpc.deserialize<messaging_pb.CreateChannelRequest>;
    responseSerialize: grpc.serialize<messaging_pb.CreateChannelResponse>;
    responseDeserialize: grpc.deserialize<messaging_pb.CreateChannelResponse>;
}
interface IMessageBrokerService_IRemoveChannel extends grpc.MethodDefinition<messaging_pb.RemoveChannelRequest, messaging_pb.RemoveChannelResponse> {
    path: "/messaging.MessageBroker/RemoveChannel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messaging_pb.RemoveChannelRequest>;
    requestDeserialize: grpc.deserialize<messaging_pb.RemoveChannelRequest>;
    responseSerialize: grpc.serialize<messaging_pb.RemoveChannelResponse>;
    responseDeserialize: grpc.deserialize<messaging_pb.RemoveChannelResponse>;
}
interface IMessageBrokerService_IListChannels extends grpc.MethodDefinition<messaging_pb.ListChannelsRequest, messaging_pb.ListChannelsResponse> {
    path: "/messaging.MessageBroker/ListChannels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messaging_pb.ListChannelsRequest>;
    requestDeserialize: grpc.deserialize<messaging_pb.ListChannelsRequest>;
    responseSerialize: grpc.serialize<messaging_pb.ListChannelsResponse>;
    responseDeserialize: grpc.deserialize<messaging_pb.ListChannelsResponse>;
}
interface IMessageBrokerService_IPublishMessage extends grpc.MethodDefinition<messaging_pb.PublishMessageRequest, messaging_pb.PublishMessageResponse> {
    path: "/messaging.MessageBroker/PublishMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messaging_pb.PublishMessageRequest>;
    requestDeserialize: grpc.deserialize<messaging_pb.PublishMessageRequest>;
    responseSerialize: grpc.serialize<messaging_pb.PublishMessageResponse>;
    responseDeserialize: grpc.deserialize<messaging_pb.PublishMessageResponse>;
}
interface IMessageBrokerService_ISubscribeChannel extends grpc.MethodDefinition<messaging_pb.SubscribeChannelRequest, messaging_pb.Message> {
    path: "/messaging.MessageBroker/SubscribeChannel";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<messaging_pb.SubscribeChannelRequest>;
    requestDeserialize: grpc.deserialize<messaging_pb.SubscribeChannelRequest>;
    responseSerialize: grpc.serialize<messaging_pb.Message>;
    responseDeserialize: grpc.deserialize<messaging_pb.Message>;
}
interface IMessageBrokerService_IReceiveMessage extends grpc.MethodDefinition<messaging_pb.ReceiveMessageRequest, messaging_pb.Message> {
    path: "/messaging.MessageBroker/ReceiveMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messaging_pb.ReceiveMessageRequest>;
    requestDeserialize: grpc.deserialize<messaging_pb.ReceiveMessageRequest>;
    responseSerialize: grpc.serialize<messaging_pb.Message>;
    responseDeserialize: grpc.deserialize<messaging_pb.Message>;
}

export const MessageBrokerService: IMessageBrokerService;

export interface IMessageBrokerServer extends grpc.UntypedServiceImplementation {
    createChannel: grpc.handleUnaryCall<messaging_pb.CreateChannelRequest, messaging_pb.CreateChannelResponse>;
    removeChannel: grpc.handleUnaryCall<messaging_pb.RemoveChannelRequest, messaging_pb.RemoveChannelResponse>;
    listChannels: grpc.handleUnaryCall<messaging_pb.ListChannelsRequest, messaging_pb.ListChannelsResponse>;
    publishMessage: grpc.handleUnaryCall<messaging_pb.PublishMessageRequest, messaging_pb.PublishMessageResponse>;
    subscribeChannel: grpc.handleServerStreamingCall<messaging_pb.SubscribeChannelRequest, messaging_pb.Message>;
    receiveMessage: grpc.handleUnaryCall<messaging_pb.ReceiveMessageRequest, messaging_pb.Message>;
}

export interface IMessageBrokerClient {
    createChannel(request: messaging_pb.CreateChannelRequest, callback: (error: grpc.ServiceError | null, response: messaging_pb.CreateChannelResponse) => void): grpc.ClientUnaryCall;
    createChannel(request: messaging_pb.CreateChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messaging_pb.CreateChannelResponse) => void): grpc.ClientUnaryCall;
    createChannel(request: messaging_pb.CreateChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messaging_pb.CreateChannelResponse) => void): grpc.ClientUnaryCall;
    removeChannel(request: messaging_pb.RemoveChannelRequest, callback: (error: grpc.ServiceError | null, response: messaging_pb.RemoveChannelResponse) => void): grpc.ClientUnaryCall;
    removeChannel(request: messaging_pb.RemoveChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messaging_pb.RemoveChannelResponse) => void): grpc.ClientUnaryCall;
    removeChannel(request: messaging_pb.RemoveChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messaging_pb.RemoveChannelResponse) => void): grpc.ClientUnaryCall;
    listChannels(request: messaging_pb.ListChannelsRequest, callback: (error: grpc.ServiceError | null, response: messaging_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    listChannels(request: messaging_pb.ListChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messaging_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    listChannels(request: messaging_pb.ListChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messaging_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    publishMessage(request: messaging_pb.PublishMessageRequest, callback: (error: grpc.ServiceError | null, response: messaging_pb.PublishMessageResponse) => void): grpc.ClientUnaryCall;
    publishMessage(request: messaging_pb.PublishMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messaging_pb.PublishMessageResponse) => void): grpc.ClientUnaryCall;
    publishMessage(request: messaging_pb.PublishMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messaging_pb.PublishMessageResponse) => void): grpc.ClientUnaryCall;
    subscribeChannel(request: messaging_pb.SubscribeChannelRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messaging_pb.Message>;
    subscribeChannel(request: messaging_pb.SubscribeChannelRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messaging_pb.Message>;
    receiveMessage(request: messaging_pb.ReceiveMessageRequest, callback: (error: grpc.ServiceError | null, response: messaging_pb.Message) => void): grpc.ClientUnaryCall;
    receiveMessage(request: messaging_pb.ReceiveMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messaging_pb.Message) => void): grpc.ClientUnaryCall;
    receiveMessage(request: messaging_pb.ReceiveMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messaging_pb.Message) => void): grpc.ClientUnaryCall;
}

export class MessageBrokerClient extends grpc.Client implements IMessageBrokerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createChannel(request: messaging_pb.CreateChannelRequest, callback: (error: grpc.ServiceError | null, response: messaging_pb.CreateChannelResponse) => void): grpc.ClientUnaryCall;
    public createChannel(request: messaging_pb.CreateChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messaging_pb.CreateChannelResponse) => void): grpc.ClientUnaryCall;
    public createChannel(request: messaging_pb.CreateChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messaging_pb.CreateChannelResponse) => void): grpc.ClientUnaryCall;
    public removeChannel(request: messaging_pb.RemoveChannelRequest, callback: (error: grpc.ServiceError | null, response: messaging_pb.RemoveChannelResponse) => void): grpc.ClientUnaryCall;
    public removeChannel(request: messaging_pb.RemoveChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messaging_pb.RemoveChannelResponse) => void): grpc.ClientUnaryCall;
    public removeChannel(request: messaging_pb.RemoveChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messaging_pb.RemoveChannelResponse) => void): grpc.ClientUnaryCall;
    public listChannels(request: messaging_pb.ListChannelsRequest, callback: (error: grpc.ServiceError | null, response: messaging_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    public listChannels(request: messaging_pb.ListChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messaging_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    public listChannels(request: messaging_pb.ListChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messaging_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    public publishMessage(request: messaging_pb.PublishMessageRequest, callback: (error: grpc.ServiceError | null, response: messaging_pb.PublishMessageResponse) => void): grpc.ClientUnaryCall;
    public publishMessage(request: messaging_pb.PublishMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messaging_pb.PublishMessageResponse) => void): grpc.ClientUnaryCall;
    public publishMessage(request: messaging_pb.PublishMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messaging_pb.PublishMessageResponse) => void): grpc.ClientUnaryCall;
    public subscribeChannel(request: messaging_pb.SubscribeChannelRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messaging_pb.Message>;
    public subscribeChannel(request: messaging_pb.SubscribeChannelRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messaging_pb.Message>;
    public receiveMessage(request: messaging_pb.ReceiveMessageRequest, callback: (error: grpc.ServiceError | null, response: messaging_pb.Message) => void): grpc.ClientUnaryCall;
    public receiveMessage(request: messaging_pb.ReceiveMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messaging_pb.Message) => void): grpc.ClientUnaryCall;
    public receiveMessage(request: messaging_pb.ReceiveMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messaging_pb.Message) => void): grpc.ClientUnaryCall;
}
