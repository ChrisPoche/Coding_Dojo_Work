#Create a class that allows the user to input price, speed, fuel, and mileage. Place a conditional that any car above $10,000 receive a 15% tax, the default otherwise being 12%
#Create 6 instances

class Car(object):
    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price >= 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
    def display_all(self):
        print "Price: {}".format(self.price)
        print "Speed: {}".format(self.speed)
        print "Fuel: {}".format(self.fuel)
        print "Mileage: {}".format(self.mileage)
        print "Tax: {}".format(self.tax)

Car1 = Car(2000,"35 mph","Full","15 mpg")
Car2 = Car(5000,"5 mph","Not Full","105 mpg")
Car3 = Car(18000,"15 mph","Kind of Full","95 mpg")
Car4 = Car(9000,"45 mph","Empty","25 mpg")
Car5 = Car(20000,"35 mph","Empty","15 mpg")

print "Car1"
Car1.display_all()
print "Car2"
Car2.display_all()
print "Car3"
Car3.display_all()
print "Car4"
Car4.display_all()
print "Car5"
Car5.display_all()
