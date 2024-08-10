import subprocess

def run_client_python():
    print("Starting Python client...")
    try:
        subprocess.run(["python3", "client-python/src/client.py"], check=True)
    except FileNotFoundError:
        print("python3 not found. Trying python...")
        subprocess.run(["python", "client-python/src/client.py"], check=True)

if __name__ == "__main__":
    run_client_python()
