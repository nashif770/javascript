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
    let nameLength = name.length;
    let hasReminder = nameLength % 2;
    if(checktype !== "string" ){
        return "please provide a valid text"
    }
    else if(hasReminder == 0){
        return "Even";
    }
    else{
        return "odd";
    }
};

// problem 3 ------------------------
// Problem 3: Is Less or Greater than seven

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

// problem 4 ------------------------
// Problem 4: Finding Bad data

function findingBadData(datas){
    let badData = [];
    for(let i=0; i<datas.length; i++){
        let index = i;
        let element = datas[index];
        let elementtype = typeof element;
        if(elementtype !=="number"){
            return "Please provide a valid Array";
        }
        else if(element>0){
            badData.push(element);

        }
    };

    let countBad = badData.length;
    // console.log("Bad " + badData);
    // console.log("Good " + goodData);
    return countBad;
};


// problem 5------------------------
// Problem 5: Convert your gems into diamond

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

// p1 test 
let a = mindGame();
console.log(a);
// p2 test 
let b = evenOdd("chub");
console.log(b);
// p3 test 
let c = isLGSeven();
console.log(c);
// p4 test 
let arr = [12, -76, "a", 23, -12, 32, -54, -23, 20]
let d = findingBadData(arr);
console.log(d);
// p5 test 
let e = gemsToDiamond();
console.log(e);