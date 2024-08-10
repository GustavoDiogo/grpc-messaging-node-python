import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = __dirname + '../../../proto/messaging.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

export { protoDescriptor };
export type ProtoGrpcType = typeof protoDescriptor;
export type MessageBrokerHandlers = typeof protoDescriptor.messaging.MessageBroker.service;
