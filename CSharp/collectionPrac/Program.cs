using System;
using System.Collections.Generic;


namespace collectionPrac
{
    class Program
    {
        static void Main(string[] args)
        {
            // Three Basic Arrays: int, string, bool
            int[] singleDig = new int[10] {0,1,2,3,4,5,6,7,8,9};
            string[] names = new string[] {"Tim", "Martin", "Nikki", "Sara"};
            bool[] truFal = new bool[10] {true,false,true,false,true,false,true,false,true,false};

            // Multiplication Table
            int[,] multTable = new int[10,10];
            for(int i=1;i<=10;i++){
                for(int j=1;j<=10;j++){
                    multTable[i-1,j-1] = i*j;
                }
            }

            // List of flavors
            List<string> flavors = new List<string>();
            flavors.Add("Vanilla");
            flavors.Add("Chocolate");
            flavors.Add("Strawberry");
            flavors.Add("Mint");
            flavors.Add("Cookie Dough");
            Console.WriteLine("Number of flavors: " + flavors.Count);
            Console.WriteLine("Flavor to be removed: " + flavors[2]);
            flavors.RemoveAt(2);
            Console.WriteLine("Number of flavors: " + flavors.Count);

            // User Dictionary
            Dictionary<string,string> user = new Dictionary<string,string>();
            Random flavor = new Random();
            foreach(var name in names){
                int num = flavor.Next(flavors.Count);
                user.Add(name,flavors[num]);
            } 
            foreach(var entry in user){
                Console.WriteLine(entry.Key + "-" + entry.Value);
            }
        }
    }
}
