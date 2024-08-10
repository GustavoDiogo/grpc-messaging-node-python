// package: messaging
// file: messaging.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateChannelRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateChannelRequest;
    getType(): ChannelType;
    setType(value: ChannelType): CreateChannelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateChannelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateChannelRequest): CreateChannelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateChannelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateChannelRequest;
    static deserializeBinaryFromReader(message: CreateChannelRequest, reader: jspb.BinaryReader): CreateChannelRequest;
}

export namespace CreateChannelRequest {
    export type AsObject = {
        name: string,
        type: ChannelType,
    }
}

export class CreateChannelResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): CreateChannelResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateChannelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateChannelResponse): CreateChannelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateChannelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateChannelResponse;
    static deserializeBinaryFromReader(message: CreateChannelResponse, reader: jspb.BinaryReader): CreateChannelResponse;
}

export namespace CreateChannelResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class RemoveChannelRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RemoveChannelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveChannelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveChannelRequest): RemoveChannelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveChannelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveChannelRequest;
    static deserializeBinaryFromReader(message: RemoveChannelRequest, reader: jspb.BinaryReader): RemoveChannelRequest;
}

export namespace RemoveChannelRequest {
    export type AsObject = {
        name: string,
    }
}

export class RemoveChannelResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): RemoveChannelResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveChannelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveChannelResponse): RemoveChannelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveChannelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveChannelResponse;
    static deserializeBinaryFromReader(message: RemoveChannelResponse, reader: jspb.BinaryReader): RemoveChannelResponse;
}

export namespace RemoveChannelResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class ListChannelsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListChannelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListChannelsRequest): ListChannelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListChannelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListChannelsRequest;
    static deserializeBinaryFromReader(message: ListChannelsRequest, reader: jspb.BinaryReader): ListChannelsRequest;
}

export namespace ListChannelsRequest {
    export type AsObject = {
    }
}

export class ListChannelsResponse extends jspb.Message { 
    clearChannelsList(): void;
    getChannelsList(): Array<Channel>;
    setChannelsList(value: Array<Channel>): ListChannelsResponse;
    addChannels(value?: Channel, index?: number): Channel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListChannelsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListChannelsResponse): ListChannelsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListChannelsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListChannelsResponse;
    static deserializeBinaryFromReader(message: ListChannelsResponse, reader: jspb.BinaryReader): ListChannelsResponse;
}

export namespace ListChannelsResponse {
    export type AsObject = {
        channelsList: Array<Channel.AsObject>,
    }
}

export class PublishMessageRequest extends jspb.Message { 
    getChannelName(): string;
    setChannelName(value: string): PublishMessageRequest;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): PublishMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PublishMessageRequest): PublishMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishMessageRequest;
    static deserializeBinaryFromReader(message: PublishMessageRequest, reader: jspb.BinaryReader): PublishMessageRequest;
}

export namespace PublishMessageRequest {
    export type AsObject = {
        channelName: string,
        content: Uint8Array | string,
    }
}

export class PublishMessageResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): PublishMessageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PublishMessageResponse): PublishMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishMessageResponse;
    static deserializeBinaryFromReader(message: PublishMessageResponse, reader: jspb.BinaryReader): PublishMessageResponse;
}

export namespace PublishMessageResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class SubscribeChannelRequest extends jspb.Message { 
    getChannelName(): string;
    setChannelName(value: string): SubscribeChannelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeChannelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeChannelRequest): SubscribeChannelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeChannelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeChannelRequest;
    static deserializeBinaryFromReader(message: SubscribeChannelRequest, reader: jspb.BinaryReader): SubscribeChannelRequest;
}

export namespace SubscribeChannelRequest {
    export type AsObject = {
        channelName: string,
    }
}

export class ReceiveMessageRequest extends jspb.Message { 
    getChannelName(): string;
    setChannelName(value: string): ReceiveMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiveMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiveMessageRequest): ReceiveMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiveMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiveMessageRequest;
    static deserializeBinaryFromReader(message: ReceiveMessageRequest, reader: jspb.BinaryReader): ReceiveMessageRequest;
}

export namespace ReceiveMessageRequest {
    export type AsObject = {
        channelName: string,
    }
}

export class Channel extends jspb.Message { 
    getName(): string;
    setName(value: string): Channel;
    getType(): ChannelType;
    setType(value: ChannelType): Channel;
    getPendingMessages(): number;
    setPendingMessages(value: number): Channel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Channel.AsObject;
    static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Channel;
    static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
    export type AsObject = {
        name: string,
        type: ChannelType,
        pendingMessages: number,
    }
}

export class Message extends jspb.Message { 
    getChannelName(): string;
    setChannelName(value: string): Message;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        channelName: string,
        content: Uint8Array | string,
    }
}

export enum ChannelType {
    SIMPLE = 0,
    MULTIPLE = 1,
}
