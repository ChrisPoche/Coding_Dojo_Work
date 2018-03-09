class MathDojo(object):
    def __init__(self):
        self.v = 0
        print self.v
    def add(self, *p):
        for i in range(0,len(p)):
            if type(p[i]) == list:
                for j in p[i]:    
                    print "{}+{}".format(self.v,j)
                    self.v += j
                    print self.v
            else:
                print "{}+{}".format(self.v,p[i])
                self.v += p[i]
                print self.v
        return self
    def subtract(self, *p):
        for i in range(0,len(p)):
            if type(p[i]) == list:
                for j in p[i]:    
                    print "{}-{}".format(self.v,j)
                    self.v -= j
                    print self.v
            else:
                print "{}-{}".format(self.v,p[i])
                self.v -= p[i]
                print self.v
        return self
    def result(self):
        print "Result is: {}".format(self.v)
        return self

md = MathDojo()
#md.add(2).add(2,5).subtract(3,2).result
md.add([1],3,4).add([3,5,7,8],[2,4.3,1.25]).subtract(2,[2,3],[1.1,2.3]).result