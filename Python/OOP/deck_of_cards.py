# we need a Card class
# cards are created with a given suit and a value

# now we need a Deck class
# decks are created having a list of card objects
# decks are created with the standard 52 cards inside of the list of card objects
# when the deck is created, we need cards with values 1-13 in the suits Hearts, Spades, Diamonds, Clubs
# hint: you can use the Card class function inside of the Deck class!

# decks should have a deal function that returns the top card from the list of cards

# decks should have a shuffle function- good luck!

import random

suit = {0:"Club",1:"Spade",2:"Heart",3:"Diamond"}
values = {0:"2",1:"3",2:"4",3:"5",4:"6",5:"7",6:"8",7:"9",8:"10",9:"Jack",10:"Queen",11:"King",12:"Ace"}
class Card(object):
    def __init__(self,suit,value):
        self.suit = suit
        self.value = value
class Deck(object):
    def __init__(self):
        self.deckList = []
        for x in range(0,4):
            for y in range(0,13):
                newCard = Card(suit[x],values[y])
                self.deckList.append(newCard)
    def shuffle(self):
        random.shuffle(self.deckList)
        return self
    def deal(self):
        print self.deckList[0].value,self.deckList[0].suit
        self.deckList.pop(0)
        return self


my_deck = Deck()
my_deck.shuffle().deal()
print "The next three cards..."
my_deck.deal()
my_deck.deal()
my_deck.deal()
