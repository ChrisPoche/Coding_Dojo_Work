#Take a list of words, print a new list of those words that contain a specific character
word_list = ['hello','world','my','name','is','Anna']
char = 'a'
new_wl = []
for x in range(0,len(word_list)):
    if word_list[x].find(char) != -1:
        new_wl.append(word_list[x])
print new_wl
