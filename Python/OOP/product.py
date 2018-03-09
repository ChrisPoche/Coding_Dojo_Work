class Product(object):
    def __init__(self,price,name,weight,brand):
        self.price = price
        self.name = name
        self.weight = weight
        self.brand = brand
        self.status = "for sale"
    def sell(self):
        self.status = "sold"
        return self    
    def addTax(self,tax):
        self.tax = tax
        self.price *= (1+self.tax)
        return self
    def mkReturn(self,reason):
        self.price /= (1+self.tax)
        self.reason = reason
        if reason == "defective":
            self.status = "defective"
            self.discPrice = 0
        elif reason == "unopened":
           self.status = "for sale"
        elif reason == "opened":
            self.status = "used"
            self.discPrice = self.price*.8
        return self
    def displayInfo(self):
        print "Brand: {}" .format(self.brand)
        print "Item name: {}" .format(self.name)
        print "Weight: {} oz" .format(self.weight)
        print "Status: {}" .format(self.status)
        print "Price: ${}" .format(format(self.price,'.2f'))
        if self.status == "used" or self.status == "defective":
            print "Discount Price: ${}".format(format(self.discPrice,'.2f'))
            print "Product was returned as {}" .format(self.reason)
        return self

tax = .1025
product1 = Product(79.99,"Mercurial",7.8,"Nike")
product2 = Product(55.00,"Samba",10.5,"Adidas")
product3 = Product(90.50,"Crossfit Nano",9.8,"Reebok")


#product2.displayInfo()
#product1.addTax(tax).sell().displayInfo().mkReturn("opened").displayInfo()
#product3.addTax(tax).sell().displayInfo().mkReturn("defective").displayInfo()
product2.addTax(tax).sell().displayInfo().mkReturn("unopened").displayInfo()
