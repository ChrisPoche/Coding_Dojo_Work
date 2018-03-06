# Find and Replace
words = "It's thanksgiving day. It's my birthday too!"
print 'day first occurs at index ' + str(words.find('day'))
print words.replace('day','month')

# Min and Max
x = [2,54,-2,7,12,98]
print "min",min(x)
print "max",max(x)

# First and Last
x = ['hello',2,54,-2,7,12,98,'world']
first = x[0]
last = x[-1]
print "first val",first
print "last val",last
newList = []
newList.append(first)
newList.append(last)
print newList

# New List
originList = [19,2,54,-2,7,12,98,32,10,-3,6]
originList.sort()
if len(originList)%2 == 1:
    halfVal = ((len(originList)/2)+1)
    firstHalf = []
    count = 0
    for count in range(0,halfVal):
        firstHalf.append(originList[0])
        if count < halfVal-1:
            originList.pop(0)
        else:
            break
    originList[0] = firstHalf
    print originList
