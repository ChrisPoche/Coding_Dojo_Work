class Animal(object):
    def __init__(self,name):
        self.name = name
        self.health = 0
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self     
    def displayHealth(self):
        print "Health: {}".format(self.health)
        if isinstance(self, Dragon) == True:
            print "I am a Dragon"
        return self
class Dog(Animal):
    def __init__(self,name):
        super(Dog, self).__init__(name)
        self.health = 150
        print "Hi, I'm {}".format(self.name)
    def pet(self):
        self.health += 5
        return self
class Dragon(Animal):
    def __init__(self,name):
        super(Dragon,self).__init__(name)
        self.health = 170
        print "Hi, I'm {}".format(self.name)
    def fly(self):
        self.health -= 10
        return self
class Bear(Animal):
    def __init__(self,name):
        super(Bear,self).__init__(name)
        self.health = 160
        print "Hi, I'm {}".format(self.name)
    def hibernate(self):
        self.health += 20
        return self
    def maul(self):
        self.health -= 10
        return self

Drag = Dragon("Smaug")
Drag.fly().walk().displayHealth()
Doge = Dog("Bob Barker")
Doge.walk().pet().displayHealth()
Grizz = Bear("Ted")
Grizz.walk().maul().hibernate().displayHealth()