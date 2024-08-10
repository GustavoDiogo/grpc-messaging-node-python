import { ServerWritableStream } from '@grpc/grpc-js';
import { ChannelType } from '../proto/messaging_pb';

export interface ChannelData {
  name: string;
  type: ChannelType;
  messages: Buffer[];
  subscribers: ServerWritableStream<any, any>[];
}
  