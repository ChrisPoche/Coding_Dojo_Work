module.exports = function(){
    return{
        add: function(num1,num2){
            console.log('The sum is:', num1+num2);
        },
        multiply: function(num1,num2){
            console.log('The answer is:', num1*num2);
        },
        square: function(num){
            console.log('The square is:', num*num);
        },
        random: function(num1,num2){
            var rand = Math.floor(num2*Math.random())+num1;
            console.log(`From ${num1} to ${num2} I choose: ${rand}`);
        },
    }
};