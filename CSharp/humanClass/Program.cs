using System;

namespace humanClass
{
    class Program
    {
        static void Main(string[] args)
        {
            Human Bob = new Human("Bob");
            Human Steve = new Human("Steve",5,3,3,110);
            Steve.Attack(Bob);
            Bob.Attack(Steve);
            Steve.Attack(Bob);
        }
    }

    public class Human
    {
        public string name;
        public int strength;
        public int intelligence;
        public int dexterity;
        public int health;
        
        public Human(string nameVal){
            name = nameVal;
            strength = 3;
            intelligence = 3;
            dexterity = 3;
            health = 100;
        }
        public Human(string nameVal, int strengthVal = 3, int intelVal = 3, int dexVal = 3, int healthVal = 100){
            name = nameVal;
            strength = strengthVal;
            intelligence = intelVal;
            dexterity = dexVal;
            health = healthVal;
        }

        public void Attack(Human victim){
            Console.WriteLine($"{this.name} attacked {victim.name}");
            Console.WriteLine($"{victim.name}'s health is {victim.health}");
            victim.health -= this.strength *5;
            Console.WriteLine($"{this.name} dealt {this.strength*5} damage");
            Console.WriteLine($"{victim.name}'s health is now {victim.health}");
        }
    }
}
