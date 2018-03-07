about_me = {"name":"Chris","age":26,"birthstate":"Kentucky","alma mater":"the Ohio State University","favorite language":"italian"}
def readingDict(md):
    for key in md.keys():
        if key == "name":
            print "My name is " + md["name"]
        elif key == "age":
            print "My age is " + str(md["age"])
        elif key == "birthstate":
            print "My birthstate is " + md["birthstate"]
        elif key == "alma mater":
            print "My alma mater is " + md["alma mater"]
        elif key == "favorite language":
            print "My favorite language is " + md["favorite language"]

readingDict(about_me)