#Mult Pt.1 - print all odds from 1-1,000
for idx in range(1,1000):  #iterate 1-999
    if idx %2 == 1:   #use modulo to check if idx is odd: idx/2 with a remainder of 1
        print idx   #print each odd number, repeat through iterations

#Mult Pt.2 - print all multiples of 5 from 5-1,000,000
for idx in range(5,1000001):  #iterate 5-1,000,000
    if idx %5 == 0:     #use modulo to check if idx is a multiple of 5: idx/5 no remainder
        print idx      #print each time in iteration

#Sum - print sum of the list
a = [1,2,5,10,255,3]    #our list to pull sum
sum = 0     #set sum value that will be added to
for idx in range(0,len(a)): #iterate from 0 to the length of list a
    sum += a[idx]  #add idx of a to the sum, repeating through for loop
print sum   #print the final sum outside of for loop

#Avg - print the average of the list
a = [1,2,5,10,255,3]    #our list to pull sum
sum = 0     #set sum value that will be added to, and eventually divided from by list length
for idx in range(0,len(a)): #iterate from 0 to the length of list a
    sum += a[idx]  #add idx of a to the sum, repeating through for loop
avg = sum/len(a)   #divide sum of list by the list length to find average
print avg #print average of list