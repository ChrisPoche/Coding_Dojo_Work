using System;
using System.Collections.Generic;

namespace boxingPrac
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> boxing = new List<object>();
            boxing.Add(7);
            boxing.Add(28);
            boxing.Add(-1);
            boxing.Add(true);
            boxing.Add("chair");
            int sum = 0;
            for(var i=0; i<boxing.Count;i++){
                if(boxing[i] is int){
                    int add = (int)boxing[i];
                    sum += add;
                }
                else{
                    Console.WriteLine(boxing[i]);
                }
            }
            Console.WriteLine($"The sum of list values is {sum}");
        }
    }
}
