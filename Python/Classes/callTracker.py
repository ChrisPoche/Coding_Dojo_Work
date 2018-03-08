import random
import string
import time
import datetime
class Call(object):
    def __init__(self,callerName,number,reason):
        self.id = ''.join([random.choice(string.ascii_letters+string.digits) for x in range(7)])
        self.callerName = callerName
        self.number = number
        self.time = datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M')
        self.reason = reason
        self.callData = []
        self.callData.extend((self.id,self.callerName,self.number,self.time,self.reason))
    def display(self):
        """print "Call ID: {}".format(self.id)
        print "Name: {}".format(self.callerName)
        print "Phone #: {}".format(self.number)
        print "Call Time: {}".format(self.time)
        print "Reason for Call: {}".format(self.reason)"""
        return self.callData
callList = []

class CallCenter(object):
    def __init__(self,callData):
        self.callData = callData
        self.callList = callList
        self.queueSize = len(self.callList)
    def add(self):
        self.callList.append(self.callData)
        print "New Caller Added..."
        print ""

        return self
    def remove(self):
        self.callList.pop(0)
        self.queueSize = len(self.callList) 
        if len(callList) == 0:
            print "The lines are open"
        else:
            print "Finished With Caller #1"
        return self
    def info(self):
        for x in range(0,len(callList)):
            print "Name: {}".format(self.callList[x][1])
            print "Phone #: {}".format(self.callList[x][2])
            if x == 0:
                print "On Call"
            else:
                print "# in Queue {}".format(x)
            print ""
        return self

namesList = ['John','Lisa','Bill','Amanda','Jennifer','Trisha','Rita','April','Tyler','Jim','Steve','Graham','Lauren','Nancy']
reasonfor = ['trouble shooting','complaint','question','repairs','pickup','delivery details']
class ProfileGen(object):
    def __init__(self):
        self.name = ""
        self.num = 0
        self.reas = ""
        prof = []
    def callGen(self,namesList,reasonfor):
        self.name = namesList[int(random.uniform(0,len(namesList)))]
        self.num = ''.join([random.choice(string.digits) for n in range(10)])
        self.reason = reasonfor[int(random.uniform(0,6))]
        #print "Customer Details: {} {} {}".format(self.name,self.num,self.reason)
        prof = [self.name,self.num,self.reason]
        return prof

prof = ""
test = ProfileGen()
#Caller 1
prof = test.callGen(namesList,reasonfor)
newCall = Call(prof[0],prof[1],prof[2])
instance = newCall.display()
Center = CallCenter(instance)
Center.add()
#Caller 2
prof = test.callGen(namesList,reasonfor)
newCall = Call(prof[0],prof[1],prof[2])
instance = newCall.display()
Center = CallCenter(instance)
Center.add()
#Caller 3
prof = test.callGen(namesList,reasonfor)
newCall = Call(prof[0],prof[1],prof[2])
instance = newCall.display()
Center = CallCenter(instance)
Center.add().info()
Center.remove().info()
#Caller 4
prof = test.callGen(namesList,reasonfor)
newCall = Call(prof[0],prof[1],prof[2])
instance = newCall.display()
Center = CallCenter(instance)
Center.add().info()
Center.remove().info()
Center.remove().info()
Center.remove().info()