sI = 45
mI = 100
bI = 455
eI = 0
spI = -23
sS = "Rubber baby buggy bumpers"
mS = "Experience is simply the name we give our mistakes"
bS = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
eS = ""
aL = [1,7,4,21]
mL = [3,5,7,34,3,2,113,65,8,89]
lL = [4,34,22,68,9,13,3,5,7,9,2,12,45,923]
eL = []
spL = ['name','address','phone number','social security number']

x = eS

#Integer - if int is greater than or equal to 100 then print 'That's a big number!', if less than 100 print 'That's a small number'
def bigNum(x):
    if not type(x) == int:
        pass
    elif x >= 100:
        print "That's a big number!"
    else: 
        print "That's a small number."
        
bigNum(x)

#String - if str length is greater than or equal to 50 characters print "Long sentence.", if less than 50 char print "Short sentence."
def longStr(x):
    if not type(x) == str:
        pass
    elif len(x) >= 50:
        print "Long sentence."
    else:
        print "Short sentence."

longStr(x)

#List - if the length greater than or equal to 10 print "Big list!", if less than 10 print "Small list."
def listLen(x):
    if not isinstance(x,list) == True:
        pass
    elif len(x) >= 10:
        print "Big list!"
    else:
        print "Short list."

listLen(x)

print "end of functions"