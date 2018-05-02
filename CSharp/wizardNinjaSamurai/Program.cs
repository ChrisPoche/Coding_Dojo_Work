using System;

namespace humanClass
{
    class Program
    {
        static void Main(string[] args)
        {
            Wizard Merlin = new Wizard("Merlin");
            Human Jim = new Human("Jim");
            Ninja Phil = new Ninja("Phil");
            Samurai George = new Samurai("George");
            Samurai Steve = new Samurai("Steve");
            Phil.Steal(Merlin);
            Jim.Attack(Phil);
            Jim.Attack(Merlin);
            Merlin.Fireball(George);
            George.Meditate();
            George.HowMany();
            Samurai Leslie = new Samurai("Leslie");
            George.HowMany();
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

        public void Attack(object victim){
            
            Wizard wizVic = victim as Wizard;
            Ninja ninVic = victim as Ninja;
            Samurai samVic = victim as Samurai;
            Human humVic = victim as Human;
            if(wizVic == null && samVic == null && ninVic == null){
                Console.WriteLine($"{humVic.name}'s health is {humVic.health}");
                Console.WriteLine($"{this.name} attacked {humVic.name}");
                humVic.health -= this.strength *5;
                Console.WriteLine($"{this.name} dealt {this.strength*5} damage");
                Console.WriteLine($"{humVic.name}'s health is now {humVic.health}");
            }
            else if(wizVic == null && samVic == null && humVic == null){
                Console.WriteLine($"{ninVic.name}'s health is {ninVic.health}");
                Console.WriteLine($"{this.name} attacked {ninVic.name}");
                ninVic.health -= this.strength *5;
                Console.WriteLine($"{this.name} dealt {this.strength*5} damage");
                Console.WriteLine($"{ninVic.name}'s health is now {ninVic.health}");
            }
            else if(wizVic == null && humVic == null && ninVic == null){
                Console.WriteLine($"{samVic.name}'s health is {samVic.health}");
                Console.WriteLine($"{this.name} attacked {samVic.name}");
                samVic.health -= this.strength *5;
                Console.WriteLine($"{this.name} dealt {this.strength*5} damage");
                Console.WriteLine($"{samVic.name}'s health is now {samVic.health}");
            }
            else if(humVic == null && samVic == null && ninVic == null){
                Console.WriteLine($"{wizVic.name}'s health is {wizVic.health}");
                Console.WriteLine($"{this.name} attacked {wizVic.name}");
                wizVic.health -= this.strength *5;
                Console.WriteLine($"{this.name} dealt {this.strength*5} damage");
                Console.WriteLine($"{wizVic.name}'s health is now {wizVic.health}");
            }
        }
    }
    public class Wizard : Human{
            public new int intelligence = 25;
            public new int health = 50;
        public Wizard(string nameVal) : base(nameVal){
            Console.WriteLine($"This is {this.name}, they're a wizard, strength: {this.strength}, intelligence: {this.intelligence}, dexterity: {this.dexterity}, health: {this.health}");
        }

        public void Heal(){
            this.health += 10 * this.intelligence;
            Console.WriteLine($"{this.name}'s health is now {this.health}");
        }
        
        public void Fireball(object victim){
            
            Wizard wizVic = victim as Wizard;
            Ninja ninVic = victim as Ninja;
            Samurai samVic = victim as Samurai;
            Human humVic = victim as Human;
            if(wizVic == null && samVic == null && ninVic == null){
                Console.WriteLine($"{humVic.name}'s health is {humVic.health}");
                Console.WriteLine($"{this.name} attacked {humVic.name}");
                Random rand = new Random();
                int fireball = rand.Next(20,50);
                humVic.health -= fireball;
                Console.WriteLine($"{this.name} dealt {fireball} damage");
                Console.WriteLine($"{humVic.name}'s health is now {humVic.health}");
            }
            else if(wizVic == null && samVic == null && humVic == null){
                Console.WriteLine($"{ninVic.name}'s health is {ninVic.health}");
                Console.WriteLine($"{this.name} attacked {ninVic.name}");
                Random rand = new Random();
                int fireball = rand.Next(20,50);
                humVic.health -= fireball;
                Console.WriteLine($"{this.name} dealt {fireball} damage");
                Console.WriteLine($"{ninVic.name}'s health is now {ninVic.health}");
            }
            else if(wizVic == null && humVic == null && ninVic == null){
                Console.WriteLine($"{samVic.name}'s health is {samVic.health}");
                Console.WriteLine($"{this.name} attacked {samVic.name}");
                Random rand = new Random();
                int fireball = rand.Next(20,50);
                humVic.health -= fireball;
                Console.WriteLine($"{this.name} dealt {fireball} damage");
                Console.WriteLine($"{samVic.name}'s health is now {samVic.health}");
            }
            else if(humVic == null && samVic == null && ninVic == null){
                Console.WriteLine($"{wizVic.name}'s health is {wizVic.health}");
                Console.WriteLine($"{this.name} attacked {wizVic.name}");
                Random rand = new Random();
                int fireball = rand.Next(20,50);
                humVic.health -= fireball;
                Console.WriteLine($"{this.name} dealt {fireball} damage");
                Console.WriteLine($"{wizVic.name}'s health is now {wizVic.health}");
            }
        }
    }

    public class Ninja : Human{
        public new int dexterity = 175;
        
        public Ninja(string nameVal) : base(nameVal){
            Console.WriteLine($"This is {this.name}, they're a ninja, strength: {this.strength}, intelligence: {this.intelligence}, dexterity: {this.dexterity}, health: {this.health}");
        }

        public void Steal(object victim){
            this.Attack(victim);
            this.health += 10;
            Console.WriteLine($"{this.name} stole 10 health, their health is now {this.health}");
        }

        public void getAway(){
            this.health -= 15;
            Console.WriteLine($"{this.name} got away but their health is now {this.health}");

        }
    }

    public class Samurai : Human{
        public new int health = 200;
        public static int count = 0;
        

        public Samurai(string nameVal) : base (nameVal){
            newSamurai();
            Console.WriteLine($"This is {this.name}, they're a samurai, strength: {this.strength}, intelligence: {this.intelligence}, dexterity: {this.dexterity}, health: {this.health}");
        }
        public void newSamurai(){
            count++;
        }        

        public void Meditate(){
            this.health = 200;
            Console.WriteLine($"{this.name} is fully healed their health back to {this.health}");
        }

        public void HowMany(){
            Console.WriteLine($"There are {count} samurai");
        }
    }
}
