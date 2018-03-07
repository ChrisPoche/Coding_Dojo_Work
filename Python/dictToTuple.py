my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}
def d2t(my_dict):
    newList = []
    for data in my_dict.items():
        newList.append(data)
    print newList

d2t(my_dict)