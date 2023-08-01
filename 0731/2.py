data_list = ["apple", "orange", "banana", "apple", "grape", "orange"]

result = []
for data in data_list:
    if not data in result:
        result.append(data)
print(result)
