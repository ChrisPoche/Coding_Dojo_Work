using System;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            RandomArray();
            CoinFlip();
            string[] names = new string[] {"Todd","Tiffany","Charlie","Geneva","Sydney"};
            Names(names);
        }

        public static int[] RandomArray(){
            int[] arr = new int[10];
            Random rand = new Random();
            for(short i=0;i<arr.Length;i++){
                arr[i] = rand.Next(5,25);
            }
            return arr;
        }

        public static string CoinFlip(){
            Console.WriteLine("Tossing a Coin!");
            Random toss = new Random();
            double tossProb = toss.NextDouble();
            if(tossProb >= .5){
                string result = "Heads";
                Console.WriteLine(result);
                return result;
            }
            else{
                string result = "Tails";
                Console.WriteLine(result);
                return result;
            }
        }

        public static string[] Names(string[] arr){
            string[] shortArr = new string[arr.Length];
            for(short i=0; i < arr.Length; i++){
                if(arr[i].Length > 5){
                    shortArr[i] = arr[i];
                }
            }
            return shortArr;
        }
    }
}
