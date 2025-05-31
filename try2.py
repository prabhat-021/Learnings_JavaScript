import asyncio
import aiohttp
import time

URL = "https://www.bridgegroupsolutions.com/index.html"  # Replace with your target URL
TOTAL_REQUESTS = 100000
CONCURRENCY = 1000  # Number of concurrent requests

sem = asyncio.Semaphore(CONCURRENCY)

async def fetch(session, i):
    async with sem:
        try:
            async with session.get(URL) as response:
                status = response.status
                print(f"Request {i}: Status {status}")
        except Exception as e:
            print(f"Request {i}: Failed - {e}")

async def main():
    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, i) for i in range(TOTAL_REQUESTS)]
        start_time = time.time()
        await asyncio.gather(*tasks)
        print(f"Completed {TOTAL_REQUESTS} requests in {time.time() - start_time:.2f} seconds")

if __name__ == "__main__":
    asyncio.run(main())
