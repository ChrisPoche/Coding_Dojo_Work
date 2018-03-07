list_one = ['celery','carrots','bread','cream']
list_two = ['celery','carrots','bread','cream']

if len(list_one) != len(list_two):
    same = False
else:
    for x in range(0,len(list_one)):
        if list_one[x] == list_two[x]:
            same = True
        elif list_one[x] != list_two[x]:
            same = False
if same == False:
    print "The lists are not the same"
else:
    print "The lists are the same"        