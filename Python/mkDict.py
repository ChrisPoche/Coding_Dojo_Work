#Create a function that takes in two lists and creates a single dictionary. The first list containing key, the second the value

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def make_dict(list1,list2):
    thereFav = zip(list1,list2) #zip() only works if we know that the lists are corresponding to represent keys and values in the to be created dictionary
    new_dict = dict(thereFav)
    print new_dict
    return new_dict

make_dict(name,favorite_animal)