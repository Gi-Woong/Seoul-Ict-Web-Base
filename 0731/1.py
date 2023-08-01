from time import time

# 연산시간
print("1. 연산시간 차이")
process_time = time()
RESULT_NUM = 0
for i in range(10000000):
    NUM1 = 100300248908349100300248908349100300248908349100300248908349100300248908349100300248908349
    NUM2 = 189379807857888100300248908349100300248908349100300248908349100300248908349100300248908349
    RESULT_NUM = NUM1 > NUM2
process_time = time() - process_time
print("1.1. 숫자끼리 비교")
print("result:", RESULT_NUM)  # True
print("process_time:", process_time)

process_time = time()
RESULT_STR = bool()
for i in range(10000000):
    STR1 = "abcdef4908klmen234lok" * 1000
    STR2 = "bkdj4ije3829klslkjkj2" * 1000
    RESULT_STR = STR1 > STR2
process_time = time() - process_time
print("1.2. 문자끼리 비교")
print("result:", RESULT_STR)
print("process_time:", process_time)


# 비직관성
print("2. 비직관성")
STR1 = "apple"
STR2 = "banana"
RESULT_STR = STR1 > STR2
print("result:", RESULT_STR)
