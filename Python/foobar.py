#Look at numbers 100-100,000, test if it's prime or a perfect square, if true print Foo and Bar, respectively, if neither print FooBar
#Do so without using python's built in math features
for x in range(100,100001):
    for pr in range(2,x):
        if x % pr == 0:
            prime = False
            break
        else:
            prime = True
    for ps in range(10,x):
        if x % (ps*ps) == 0:
            perfSq = True
            break
        else:
            perfSq = False
    if not prime == False:
        print "Foo"
    elif perfSq == True:
        print "Bar"
    else:
        print "FooBar"
            
        