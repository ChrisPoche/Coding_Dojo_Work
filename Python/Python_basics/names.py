"""#Given a list, call and concatenate the names
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def nameCalling(name):
    for idx in name:
        print idx['first_name']+" "+idx['last_name']
            
nameCalling(students)
"""
#Pt.2 Given following dictionary create a program that concatenates first and last name, and prints number of combined characters
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }
"""
for keys in users.keys():
    print keys
    for x in range(0,len(users[keys])):
        print users[keys][x]['first_name']+" "+users[keys][x]['last_name']

"""
def names(users):
    for keys in users.keys():
        print keys
        for x in range(0,len(users[keys])):
            charCount = users[keys][x]['first_name']+users[keys][x]['last_name']
            print "{} - {} {} - {}".format(x+1,users[keys][x]['first_name'],users[keys][x]['last_name'],len(charCount))

names(users)