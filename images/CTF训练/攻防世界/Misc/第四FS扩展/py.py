file1 = open("file.txt", "r")
cipertext = file1.read()
dic1 = {}
for i in cipertext:
    if i not in dic1:
        dic1[i] = 1
    else:
        dic1[i] += 1
z = zip(dic1.values(), dic1.keys())
plaintext = ""
for i in sorted(z):
    plaintext = i[1] + plaintext
print(plaintext)