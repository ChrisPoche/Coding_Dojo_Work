#Create a function that takes a list of numbers and draws out each of the values in asterisks
def draw_stars(l):
    for idx in l:
        row = ""    
        for y in range(0,idx):
            row += "*"
        print row

x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x)


#Pt.2 modify above function to accept str, returning the fist letter repeated the length of the str
def draw_stars2(l):
    for idx in l:
        row = "" 
        if type(idx) == int:   
            for y in range(0,idx):
                row += "*"
            print row
        elif type(idx) == str:
            for y in range(0,len(idx)):
                row += idx[0].lower()
            print row

y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars2(y)
