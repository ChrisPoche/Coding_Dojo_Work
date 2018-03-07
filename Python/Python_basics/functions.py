#function called even_odd counting from 1-2000, as it iterates, print whether it's even or odd
def even_odd(start,end):
    for x in range(start,end):
        if x % 2 == 0:
            print "Number is " + str(x) + ". This is an even number"
        elif x % 2 == 1:
            print "Number is " + str(x) + ". This is an odd number"

even_odd(1,2001)

#Multiply: iterate through a list, multiplying each element by a set multiplier
a = [3,2,4]
def multiply(l,mult):
    for x in range(0,len(l)):
        l[x] *= mult        
    return l

#b = multiply(a,5)

#Drawing out the innevitable - take above function output and return answer in each index as the corresponding number in only "1"s
def layered_multiples(arr):
    new_array = []
    new_idx = []
    for x in range(0,len(a)):
        for y in range(0,a[x]):
            new_idx.append(1)
        new_array.append(new_idx)
        new_idx = []
    return new_array
x = layered_multiples(multiply(a,2))
print x