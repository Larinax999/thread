from concurrent.futures import ThreadPoolExecutor

executor = ThreadPoolExecutor(max_workers=100000)

def test():
    print("hello")

executor.submit(test)
