"""#print 1-255
for x in range (1,256):
    print x

#print odds 1-255
for x in range (1,256):
    if x%2 == 1:
        print x

#print in and sum 0-255
sum = 0
for x in range (0,256):
    print x
    sum += x
    print sum

#print array val
list = [1,2,3,4,5]
for x in range(0,len(list)):
    print list[x]

#print max of array
list = [1,2,3,4,5]
print max(list) 


#print avg
list = [1,2,3,4,5]
sum = 0
for x in range (0,len(list)):
    sum += x
    print sum
print sum/len(list)


#return odds in arr
list = []
for x in range(1,256):
    if x%2 ==1:
        list.append(x)
print list


#print square arr
list = [1,2,3,4,5]
for x in range (0,len(list)):
    list[x] *= list[x]
print list


#return arr count > Y
y = 4
list = [1,2,3,4,5]
count = 0
for x in range(0,len(list)):
    if list[x] > y:
        count += 1
print count

#zero out neg
list = [1,-2,3,-4,5]
for x in range(0,len(list)):
    if list[x] < 0:
        list[x] = 0
print list

#print min max avg
sum = 0
list = [1,2,3,4,5]
for x in range(0,len(list)):
    sum += list[x]
avg = sum/len(list)
print avg
print max(list)
print min(list)

#shift val left
list = [1,2,3,4,5]
for x in range(0,len(list)-1):
    list[x] = list[x+1]
list.pop()
list.append(0)
print list

#swap str for neg val
list = [1,-2,3,-4,5]
for x in range(0,len(list)):
    if list[x] < 0:
        list[x] = "Dojo"
print list