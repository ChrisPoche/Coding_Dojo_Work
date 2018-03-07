count = 'x   '
table = [1,2,3,4,5,6,7,8,9,10,11,12]
row = ""
row += count
for fr_elem in range(0,len(table)):
    if table[fr_elem] >= 10:
        if (table[fr_elem]*table[-1]) < 100:
            row += str(table[fr_elem]) + "  "
        else:
            row += str(table[fr_elem]) + "   " 
    else:
        if (table[fr_elem]*table[-1]) < 100:
            row += str(table[fr_elem]) + "   "
        else:
            row += str(table[fr_elem]) + "   "
print row
for colMult in range(1,13):
    if colMult < 10:
        row = str(colMult) + " "
    else:
        row = str(colMult) + ""
    for mult in range(0,1):
        if colMult > 9:
                row += " " + str(colMult*table[mult])
        else:
                row += "  " + str(colMult*table[mult]) 
    for mult in range(1,9):
        if (table[mult-1]*table[-1]) < 100:
            if (colMult*(mult+1)) < 10:
                row += "   " + str(colMult*table[mult])
            elif ((colMult+1)*mult) < 100:
                row += "  " + str(colMult*table[mult])
            else:
                row += " " + str(colMult*table[mult]) 
        else:
            if ((colMult+1)*mult) < 100:
                row += "   " + str(colMult*table[mult])
            else:
                row += "  " + str(colMult*table[mult]) 
    for mult in range(9,len(table)):
        if (mult+1)*colMult < 100:
            row += "   " + str(colMult*table[mult])
        else:
            row += "  " + str(colMult*table[mult]) 
    print row