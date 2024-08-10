import grpc
import sys
import os

# Adiciona o diretório 'proto' ao caminho de importação
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

        print("<<Escolha as opções>>")
        print("1. Listar Canais")
        print("2. Criar Canal")
        print("3. Remover Canal")
        print("4. Publicar Mensagem")
        print("5. Mensagens Recebidas")
        print("6. Salvar Mensagens no Disco")
        print("7. Sair")
        escolha = input("Digite sua escolha: ")

        if escolha == "1":
            response = client.list_channels()
            if response:
                canais = [channel.name for channel in response.channels]
                print(f"Resposta da Listagem de Canais: {canais}")

        elif escolha == "2":
            nome = input("Digite o nome do canal: ")
            print("Tipo de Canal (0 para SIMPLES, 1 para MÚLTIPLO): ")
            tipo_canal_input = int(input())
            if tipo_canal_input == 0:
                tipo_canal = messaging_pb2.ChannelType.SIMPLE
            elif tipo_canal_input == 1:
                tipo_canal = messaging_pb2.ChannelType.MULTIPLE
            else:
                print(
                    "Tipo de canal inválido. Por favor, digite 0 para SIMPLES ou 1 para MÚLTIPLO."
                )
                continue
            response = client.create_channel(nome, tipo_canal)
            if response:
                print(f"Resposta da Criação do Canal: {response.success}")

        elif escolha == "3":
            nome = input("Digite o nome do canal para remover: ")
            response = client.remove_channel(nome)
            if response:
                print(f"Resposta da Remoção do Canal: {response.success}")

        elif escolha == "4":
            nome_canal = input("Digite o nome do canal para publicar a mensagem: ")
            conteudo = input("Digite o conteúdo da mensagem: ").encode("utf-8")
            response = client.publish_message(nome_canal, conteudo)
            if response and response.success:
                print("Mensagem Publicada")
            else:
                print("Falha ao publicar a mensagem")

        elif escolha == "5":
            nome_canal = input(
                "Digite o nome do canal para se inscrever e receber mensagens: "
            )
            print(f"Inscrevendo-se no canal '{nome_canal}' e aguardando mensagens...")
            responses = client.subscribe_channel(nome_canal)
            if responses:
                messages = []
                for message in responses:
                    messages.append(
                        f"Canal: {message.channel_name}, Mensagem: {message.content.decode('utf-8')}"
                    )
                    print(f"Mensagem recebida: {message.content.decode('utf-8')}")
            else:
                print("Falha ao assinar o canal ou receber mensagens")

        elif escolha == "6":
            if messages:
                arquivo = input("Digite o nome do arquivo para salvar as mensagens: ")
                with open(
                    arquivo, "w"
                ) as f:  # Use 'w' para sobrescrever o arquivo, ou 'a' para anexar
                    for msg in messages:
                        f.write(msg + "\n")
                print(
                    f"Mensagens salvas no arquivo '{arquivo}' no diretório de origem da aplicação client.py"
                )
            else:
                print(
                    "Nenhuma mensagem para salvar. Primeiro receba mensagens com a opção 5."
                )

        elif escolha == "7":
            print("Saindo...")
            break

        else:
            print("Escolha inválida. Por favor, digite um número entre 1 e 7.")


if __name__ == "__main__":
    main()
