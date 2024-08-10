# gRPC Messaging System

## Overview

This project is a gRPC-based messaging server built with Node.js and TypeScript. The server allows for the creation, management, and utilization of messaging channels, providing reliable communication between producers and consumers. Messages are persisted on disk, ensuring that no data is lost even in the event of server failures.

## Key Features

- Channel Management: Create, remove, and list channels identified by unique names.
- Message Publishing: Publish messages to specific channels, supporting both text and binary data.
- Subscriptions: Subscribe to channels to receive messages in real-time.
- Persistence: Messages are stored on disk, allowing for recovery after failures.
- Channel Types: Support for both simple (single recipient) and multiple (broadcast to all subscribers) channel types.

## Architecture

- Channel Controller: Manages the lifecycle of channels and handles message distribution.
- Persistence Layer: Ensures that messages are saved to disk and can be recovered in case of failures.
- gRPC Service: Defines the gRPC service interface and implements the core functionality.

## Getting Started

### Installation

You can simply run:

```bash
bash install.sh
```

### Prerequisites

Ensure that you have the following installed:

- Node.js (v22+)
- npm
- nvm
- python3

### Running

- To start the server, run ```npm run start:server``` in the root directory of the repository.
- To run the clients:
  - Node.js: ```npm run start:client:node```
  - Python: ```npm run start:client:python```
- To execute the tests, run ```npm run test``` in the root directory of the repository.
