import grpc
import sys
import os

# Adds the 'proto' directory to the import path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "proto")))

from proto import messaging_pb2
from proto import messaging_pb2_grpc


class MessageBrokerClient:
    def __init__(self, address):
        self.channel = grpc.insecure_channel(address)
        self.stub = messaging_pb2_grpc.MessageBrokerStub(self.channel)

    def create_channel(self, name, channel_type):
        request = messaging_pb2.CreateChannelRequest(name=name, type=channel_type)
        try:
            response = self.stub.CreateChannel(request)
            return response
        except grpc.RpcError as e:
            print(f"Error: {e.details()}")
            return None

    def remove_channel(self, name):
        request = messaging_pb2.RemoveChannelRequest(name=name)
        try:
            response = self.stub.RemoveChannel(request)
            return response
        except grpc.RpcError as e:
            print(f"Error: {e.details()}")
            return None

    def list_channels(self):
        request = messaging_pb2.ListChannelsRequest()
        try:
            response = self.stub.ListChannels(request)
            return response
        except grpc.RpcError as e:
            print(f"Error: {e.details()}")
            return None

    def publish_message(self, channel_name, content):
        request = messaging_pb2.PublishMessageRequest(
            channel_name=channel_name, content=content
        )
        try:
            response = self.stub.PublishMessage(request)
            return response
        except grpc.RpcError as e:
            print(f"Error: {e.details()}")
            return None

    def subscribe_channel(self, channel_name):
        request = messaging_pb2.SubscribeChannelRequest(channel_name=channel_name)
        try:
            responses = self.stub.SubscribeChannel(request)
            return responses
        except grpc.RpcError as e:
            print(f"Error: {e.details()}")
            return None

    def receive_message(self, channel_name):
        request = messaging_pb2.ReceiveMessageRequest(channel_name=channel_name)
        try:
            response = self.stub.ReceiveMessage(request)
            return response
        except grpc.RpcError as e:
            print(f"Error: {e.details()}")
            return None


def main():
    client = MessageBrokerClient("localhost:50051")
    messages = []

    while True:

        print("<<Choose an option>>")
        print("1. List Channels")
        print("2. Create Channel")
        print("3. Remove Channel")
        print("4. Publish Message")
        print("5. Received Messages")
        print("6. Save Messages to Disk")
        print("7. Exit")
        choice = input("Enter your choice: ")

        if choice == "1":
            response = client.list_channels()
            if response:
                channels = [channel.name for channel in response.channels]
                print(f"Channel List Response: {channels}")

        elif choice == "2":
            name = input("Enter the channel name: ")
            print("Channel Type (0 for SIMPLE, 1 for MULTIPLE): ")
            channel_type_input = int(input())
            if channel_type_input == 0:
                channel_type = messaging_pb2.ChannelType.SIMPLE
            elif channel_type_input == 1:
                channel_type = messaging_pb2.ChannelType.MULTIPLE
            else:
                print(
                    "Invalid channel type. Please enter 0 for SIMPLE or 1 for MULTIPLE."
                )
                continue
            response = client.create_channel(name, channel_type)
            if response:
                print(f"Channel Creation Response: {response.success}")

        elif choice == "3":
            name = input("Enter the name of the channel to remove: ")
            response = client.remove_channel(name)
            if response:
                print(f"Channel Removal Response: {response.success}")

        elif choice == "4":
            channel_name = input(
                "Enter the name of the channel to publish the message: "
            )
            content = input("Enter the message content: ").encode("utf-8")
            response = client.publish_message(channel_name, content)
            if response and response.success:
                print("Message Published")
            else:
                print("Failed to publish the message")

        elif choice == "5":
            channel_name = input(
                "Enter the name of the channel to subscribe and receive messages: "
            )
            print(
                f"Subscribing to channel '{channel_name}' and waiting for messages..."
            )
            responses = client.subscribe_channel(channel_name)
            if responses:
                messages = []
                for message in responses:
                    messages.append(
                        f"Channel: {message.channel_name}, Message: {message.content.decode('utf-8')}"
                    )
                    print(f"Message received: {message.content.decode('utf-8')}")
            else:
                print("Failed to subscribe to the channel or receive messages")

        elif choice == "6":
            if messages:
                file_name = input("Enter the file name to save the messages: ")
                with open(
                    file_name, "w"
                ) as f:  # Use 'w' to overwrite the file, or 'a' to append
                    for msg in messages:
                        f.write(msg + "\n")
                print(
                    f"Messages saved to file '{file_name}' in the application root directory"
                )
            else:
                print("No messages to save. First receive messages with option 5.")

        elif choice == "7":
            print("Exiting...")
            break

        else:
            print("Invalid choice. Please enter a number between 1 and 7.")


if __name__ == "__main__":
    main()
