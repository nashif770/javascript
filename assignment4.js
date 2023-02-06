// Problem 1: Let’s play a mind game
// this function guesses a number user is inputting

function mindGame(num){
    let numtype = typeof num;
    let a = num*3;
    let b = a+10;
    let c = b/2;
    let d = c-5;
    if(numtype !=="number"){
        return "Please provide a valid Number";
    }
    else if(num<0){
        return "Please provide a Positive Number";
    }
    else{
        return d;
    };
};

// Problem 2: Finding even or odd
// this function checks if the amount of characters in a string is even or odd

function evenOdd(name){
    let checktype = typeof name;
    if(checktype !== "string" ){
        return "please provide a valid text"
    }
    let nameLength = name.length;
    let hasReminder = nameLength % 2;
    if(hasReminder == 0){
        return "Even";
    }
    else{
        return "odd";
    }
};

// Problem 3: Is Less or Greater than seven
// this function checks the relation between input and the number 7;

function isLGSeven(num){
    let numtype = typeof num;
    let subtraction = num - 7;
    if(numtype !=="number"){
        return "Please provide a valid Number";
    }
    else if(num < 7){
        return subtraction;
    }
    else{
        let double = num*2;
        return double;
     }
};

// Problem 4: Finding Bad data
// this function finds and negatice number and counts those as bad data.

function findingBadData(datas){
    let badData = [];
    for(let i=0; i<datas.length; i++){
        let index = i;
        let element = datas[index];
        let elementtype = typeof element;
        if(elementtype !=="number"){
            return "Please provide a valid Array";
        }
        else if(element<0){
            badData.push(element);

        }
    };

    let countBad = badData.length;
    return countBad;
};


// Problem 5: Convert your gems into diamond
// this function calculates the amount of diamon can be returned.

function gemsToDiamond(friend1, friend2, friend3){
    let friend1type = typeof friend1;
    let friend2type = typeof friend2;
    let friend3type = typeof friend3;

    let diamond1st = friend1*21;
    let diamond2nd = friend2*32;
    let diamond3rd = friend3*43;

    let total = diamond1st+diamond2nd+diamond3rd;
    if (friend1type !== "number" || friend2type !=="number" || friend3type !== "number"){
        return "please provide valid data";
    }
    else if(total>1000*2){
        let weGet = total-2000;
        return weGet;
    }
    else{
        return total;
    };
    
};

// end of assignment