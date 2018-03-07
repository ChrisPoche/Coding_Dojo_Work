class Bike(object):
    def __init__(self,price,max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
        self.journey = ""
    def displayInfo(self):
        print self.journey
        print "The bike's price is {}. It can go up to {} and has {} miles on it" .format(self.price,self.max_speed,self.miles)
        return self
    def ride(self):
        self.journey += "Riding... "
        self.miles += 10
        return self
    def reverse(self):
        self.journey += "Reversing... "
        if self.miles < 5:
            self.miles = 0
            return self
        else:
            self.miles -= 5
            return self

Bike1 = Bike("$200","25 mph")
Bike1.ride().ride().ride().reverse().displayInfo()
Bike2 = Bike("$225","22 mph")
Bike2.ride().ride().reverse().reverse().displayInfo()
Bike3 = Bike("$160","21 mph")
Bike3.reverse().reverse().reverse().displayInfo()
