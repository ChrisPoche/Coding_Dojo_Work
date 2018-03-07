print "Starting the program..."
import random
headCount = 0
tailsCount = 0
numAtt = 5000 #number of attempts
for x in range(0,numAtt):
    attempt = round(random.uniform(0.0,1.0))
    if x == (numAtt-1):
        if attempt == 1:
            headCount += 1
            print "Last but not least, attempt #"+str(x+1)+": Throwing a coin... It's heads! ... There were " + str(headCount) + " heads and " +str(tailsCount)+ " tails"
        else:
            tailsCount += 1
            print "Last but not least, attempt #"+str(x+1)+": Throwing a coin... It's tails! ... There were " + str(headCount) + " heads and " +str(tailsCount)+ " tails"
    else:
        if attempt == 1:
            headCount += 1
            print "Attempt #"+str(x+1)+": Throwing a coin... It's heads! ... Got " + str(headCount) + " heads so far and " +str(tailsCount)+ " tails so far"
        else:
            tailsCount += 1
            print "Attempt #"+str(x+1)+": Throwing a coin... It's tails! ... Got " + str(headCount) + " heads so far and " +str(tailsCount)+ " tails so far"
    