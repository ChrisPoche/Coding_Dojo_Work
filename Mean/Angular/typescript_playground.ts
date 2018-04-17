var myString: string;
// Because the variable was given a type: string
myString = "Bee stinger";
// The following changes need to also be in string form. The number placed in quotes will suffice in stringifying it
myString = '9';

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Because it is converted to js, it will log it as 'Hello 9!', but the ts file finds an error since it is set as a string in line 7
 // Again, placing it in quotes will convert it
 console.log(sayHello('9'));

 function fullName(firstName: string, lastName: string, middleName?: string){
    // The optional operator '?' is added to the middleName parameter allowing us to exclude it in the returned value 
    if (middleName) {
        let fullName = `${firstName} ${middleName} ${lastName}`;
        return fullName;
    }
    else {
        return `${firstName} ${lastName}`
    }
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// By adjusting the function, we allow someone without a middle name to return just their given and family names
console.log(fullName("Jimbo", "Jones"));

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // Because we were missing an 's' on the end of belt, it did not recognize the strict var return of ninja.belts
 console.log(graduate(jay));
 

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName?: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // By making the last name optional, I was able to just pass Shane to create the ninja object
 const shane = new Ninja('Shane');

 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
}

const turingninja = new Ninja(turing.firstName,turing.lastName);
 // This created a ninja object for turing that could be passed into the study function
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // study(turing) could not run before because the turing ninja object did not exist
 console.log(study(turingninja));
 
 var increment = x => x + 1;
 // This works great:
 console.log(increment(3));
 var square = x => x * x;
 // Removing the braces allowed it to properly return the value of x * x
 console.log(square(4));
 // By encapsulating the x,y in parentheses it sets it as function parameters allowing them to be passed into the return statment following the fat arrow
 var multiply = (x,y) => x * y;
 // I rearranged it to create the functions outside of the math call
 // And removed the return statement since it's redundant, leaving the array calling each previously built function, passing the (x,y) set up in the parameter statement before the fat arrow
 let sum = (x,y) => x + y;
 let product = (x,y) => x * y;
 let difference = (x,y) => Math.abs(x-y);
 var math = (x, y) => [sum(x,y), product(x,y), difference(x,y)];
 console.log(math(3, 4));

 class Elephant {
    constructor(public age: number){}
    birthday = age => this.age++;
    // By adjusting the function to pass the age parameter it was able properly to make the callback used in line 105
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000) 