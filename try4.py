import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

URL = "https://www.bridgegroupsolutions.com/index.html"  # Replace with your URL
TOTAL_REQUESTS = 1000000
MAX_WORKERS = 500  # Number of parallel threads (adjust as needed)

def send_request(i):
    try:
        response = requests.get(URL)
        return f"Request {i}: Status {response.status_code}"
    except Exception as e:
        return f"Request {i}: Failed - {e}"

def main():
    start_time = time.time()
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = [executor.submit(send_request, i) for i in range(1, TOTAL_REQUESTS + 1)]
        for future in as_completed(futures):
            print(future.result())
    print(f"Completed {TOTAL_REQUESTS} requests in {time.time() - start_time:.2f} seconds")

if __name__ == "__main__":
    main()
