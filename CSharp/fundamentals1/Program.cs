using System;

namespace fundamentals1
{
    class Program
    {
        static void Main(string[] args)
        {
            for(short i=1; i < 256; i++){  // Iterate 1-255
                Console.WriteLine(i);
            }
            for(short i=1; i<101; i++){     // 1-100 numbers divisible by 3 or 5, but not both
                if(i%3==0 || i%5==0){
                    if(!(i%3==0 && i%5==0)){
                        Console.WriteLine(i);
                    }
                }
            }
            for(short i=1; i<101; i++){     // 1-100 numbers divisible by 3, print "Fizz", 5, print "Buzz or both (3 & 5), print "FizzBuzz"
                if(i%3==0 || i%5==0){
                    if(i%3==0 && i%5==0){
                        Console.WriteLine("FizzBuzz");
                    }
                    else if(i%3==0){
                        Console.WriteLine("Fizz");
                    }
                    else if(i%5==0){
                        Console.WriteLine("Buzz");
                    }
                }
            }
        }
    }
}
