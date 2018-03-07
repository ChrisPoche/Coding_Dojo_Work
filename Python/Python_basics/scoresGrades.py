def Grades(Scores):
    print "Scores and Grades"
    for Score in Scores:
        Grade = ""
        if Score > 89:
            Grade = "A"
        elif Score > 79:
            Grade = "B"
        elif Score > 69:
            Grade = "C"
        elif Score > 59:
            Grade = "D"
        else:
            Grade = "F"
        print "Score: " + str(Score) + "; Your grade is " + Grade 
    

Grades([70,95,92,62,75,83,93])
