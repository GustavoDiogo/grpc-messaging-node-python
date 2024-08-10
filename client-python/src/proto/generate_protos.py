import os
import subprocess

def generate_protos():
    proto_file = 'proto/messaging.proto'
    output_dir = 'client-python/src/protos'
    
    # Criar o diretório de saída se não existir
    os.makedirs(output_dir, exist_ok=True)
    
    # Comando para gerar os arquivos .py
    command = [
        'python3', '-m', 'grpc_tools.protoc',
        '-Iproto',  # Diretório onde o proto está localizado
        f'--python_out={output_dir}',  # Diretório de saída para arquivos Python
        f'--grpc_python_out={output_dir}',  # Diretório de saída para arquivos gRPC Python
        proto_file  # Arquivo proto
    ]
    
    # Executar o comando
    subprocess.run(command, check=True)
    print(f"Arquivos gerados com sucesso em {output_dir}")

if __name__ == "__main__":
    generate_protos()
