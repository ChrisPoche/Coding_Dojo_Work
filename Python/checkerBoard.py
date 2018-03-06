#Create a checker board of asterisks and spaces, alternating them each row
row = ""
nextrow = ""
for x in range(0,5):
    row += "* "
for x in range(0,5):
    nextrow += " *"
for x in range(0,5):
    if x%2 == 0:
        print row
    else:
        print nextrow
