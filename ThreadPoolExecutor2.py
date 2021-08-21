from os import system
from concurrent.futures import ThreadPoolExecutor
executor = ThreadPoolExecutor(max_workers=int(100000))

for i in range(10):
    executor.submit(system,'python test.py')
