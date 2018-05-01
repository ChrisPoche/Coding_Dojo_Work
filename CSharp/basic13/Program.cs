using System;
using System.Collections.Generic;

namespace basic13
{
    class Program
    {
        static void Main(string[] args)
        {
            PrintAll();
            PrintOdd();
            PrintSum();
            PrintArray(new List<int>() {1,3,5,7,9,13});
            FindMax(new List<int>() {-1,5,2,0,3});
            GetAvg(new List<int>() {2,10,3});
            OddArray();
            GreaterThan(new List<int>() {1,3,5,7}, 3);
            SquareVals(new List<int>() {1,5,10,-2});
            DeleteNegNum(new List<int>() {1,5,10,-2});
            MinMaxAvg(new List<double>() {1,5,9,-2});
            ArrayShift(new List<int>() {1,5,10,7,-2});
            NumToString(new List<object>() {1,5,10,-2});
        }
        public static void PrintAll(){
            for(short i=1; i<=255; i++){
                Console.WriteLine(i);
            }
        }

        public static void PrintOdd(){
            for(short i=1; i<=255; i+=2){
                Console.WriteLine(i);
            }
        }
        public static void PrintSum(){
            int sum = 0;
            for(short i=1; i<=255; i++){
                sum += i;
                Console.WriteLine($"New Number: {i}");
                Console.WriteLine($"Sum: {sum}");
            }
        }
        public static void PrintArray(List<int> X){
            foreach(var x in X){
                Console.WriteLine(x);
            }
        }
        public static void FindMax(List<int> X){
            int max = X[0];
            for(short i=1; i<X.Count; i++){
                if(max<X[i]){
                    max = X[i];
                }
            }
            Console.WriteLine($"The max of the array is {max}");
        }
        public static void GetAvg(List<int> X){
            int sum = 0;
            foreach(var x in X){
                sum += x;
            }
            int avg = sum/X.Count;
            Console.WriteLine($"The average value of the array is {avg}");
        }
        public static void OddArray(){
            List<int> y = new List<int>();
            for(short i=1; i<=255; i+=2){
                y.Add(i);
            }
        }
        public static void GreaterThan(List<int> X, int y){
            int greatThan = 0;
            foreach(var x in X){
                if(x>y){
                    greatThan++;
                }
            }
            Console.WriteLine($"There are {greatThan} numbers greater than y in the array");
        }
        public static void SquareVals(List<int> X){
            for(short i=0;i<X.Count;i++){
                Console.WriteLine($"Arr[{i}]: {X[i]}");
                X[i] *= X[i];
            }
            for(short i=0;i<X.Count;i++){
                Console.WriteLine($"Arr[{i}]: {X[i]}");
            }
        }
        public static void DeleteNegNum(List<int> X){
            for(short i=0; i<X.Count; i++){
                Console.WriteLine($"Before Check Arr[{i}]: {X[i]}");
                if(X[i] < 0){
                    X[i] = 0;
                }
                Console.WriteLine($"After Check Arr[{i}]: {X[i]}");
            }
        }
        public static void MinMaxAvg(List<double> X){
            double min = X[0];
            double max = X[0];
            double sum = X[0];
            for(short i=1; i<X.Count; i++){
                sum += X[i];
                if(X[i] > max){
                    max = X[i];
                }
                else if(X[i] < min){
                    min = X[i];
                }
            }
            double avg = sum/X.Count;
            Console.WriteLine($"Min: {min}, Max: {max}, Avg: {avg}");
        }
        public static void ArrayShift(List<int> X){
            X.RemoveAt(0);
            X.Add(0);
        }
        public static void NumToString(List<object> X){
            for(var i=0; i<X.Count; i++){
                int a = Convert.ToInt32(X[i]);
                if(a < 0){
                    X[i] = "Dojo";
                }
            }
            for(var i=0; i<X.Count; i++){
                Console.WriteLine($"Arr[{i}]: {X[i]}");
            }
        }
    }
}
