var purse = {
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
}
function coinChange(n) {
    if (typeof n == "object") {
        var optimize = n;
        n = 0;
        for (var denomination in optimize) {
            if (denomination == "dollars") {
                n += (100 * optimize[denomination]);
            }
            if (denomination == "quarters" && optimize[denomination] > 0) {
                n += (25 * optimize[denomination]);
            }
            if (denomination == "dimes") {
                n += (10 * optimize[denomination]);
            }
            if (denomination == "nickels") {
                n += (5 * optimize[denomination]);
            }
            if (denomination == "pennies") {
                n += (1 * optimize[denomination]);
            }
        }
    }
    if (n >= 100) {
        purse.dollars++;
        n -= 100;
    }
    else if (n >= 25) {
        purse.quarters++;
        n -= 25;
    }
    else if (n >= 10) {
        purse.dimes++;
        n -= 10;
    }
    else if (n >= 5) {
        purse.nickels++;
        n -= 5;
    }
    else if (n >= 1) {
        purse.pennies++;
        n -= 1;
    }
    else {
        console.log(purse);
        return purse;
    }
    coinChange(n);
}
// coinChange({
//     dollars: 1,
//     quarters: 0,
//     dimes: 2,
//     nickels: 2,
//     pennies: 0
// });
coinChange(153);