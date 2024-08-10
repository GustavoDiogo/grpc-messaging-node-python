import * as grpc from '@grpc/grpc-js';
import { MessageBrokerService } from './proto/messaging_grpc_pb';
import { messageBroker } from './services/messageBroker';

function main() {
  const server = new grpc.Server();
  server.addService(MessageBrokerService, messageBroker); 
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err != null) {
      return console.error(err);
    }
    console.log(`gRPC listening on ${port}`);
  });
}

main();
