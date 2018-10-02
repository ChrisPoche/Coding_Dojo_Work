function fizzBuzz(n){
    if(isNaN(n) || n<1){
        return "Parameter must be a positive number";
    }
    var fbString = "";
    for(var i=1;i<=n; i++){
        if(i == n){
            fbString += "and ";
        }
        if(i%5 == 0){
            fbString += "Fizz";
        }
        if(i%3 == 0){
            fbString += "Buzz";
        }
        else if(i%3 != 0 && i%5 != 0){
            fbString += i;
        }
        fbString += ", ";
    }
    return fbString;
}
fizzBuzz(15);