import asyncio
import aiohttp
import time

URL = "https://www.bridgegroupsolutions.com/"  # Replace with your allowed/test URL
TOTAL_REQUESTS = 100000
CONCURRENCY = 50

sem = asyncio.Semaphore(CONCURRENCY)

headers = {
    "User-Agent": "Mozilla/5.0 (compatible; MyAsyncTestBot/1.0)"
}

async def fetch(session, i, retries=3):
    async with sem:
        for attempt in range(retries):
            try:
                async with session.get(URL, headers=headers, ssl=False) as response:
                    print(f"Request {i}: Status {response.status}")
                    return
            except Exception as e:
                print(f"Request {i}: Attempt {attempt+1} failed - {e}")
                await asyncio.sleep(1)  # Delay before retry

async def main():
    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, i) for i in range(TOTAL_REQUESTS)]
        start = time.time()
        await asyncio.gather(*tasks)
        print(f"\nCompleted {TOTAL_REQUESTS} requests in {time.time() - start:.2f} seconds")

if __name__ == "__main__":
    asyncio.run(main())
