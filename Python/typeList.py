#Look through a list, find the type of each element. If one type list that type, if multiple print mixed type, concat str,and sum int
l = [2,3,1,7,4,12]
idx = 0
strLi = "String: "
sum = 0
for idx in range(0,len(l)):
    if type(l[idx]) == str:
       strLi += (l[idx]) + " "
    elif type(l[idx]) == int or type(l[idx]) == float:
        sum += l[idx]
if sum > 0 and len(strLi) > "String: ":
    t = "mixed type"
elif sum > 0:
    t = 'integer type'
else:
    t = 'string type'
print "The list you entered is of " + t
if t == 'mixed type':
    print strLi
    print "sum: " + str(sum)
elif t == 'string type':
    print strLi
else:
    print "sum: " + str(sum)
