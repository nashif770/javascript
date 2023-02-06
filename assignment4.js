// Problem 1 ------------------------
// Problem 1: Let’s play a mind game

function mindGame(num){
    let a = num*3;
    let b = a+10;
    let c = b/2;
    let d = c-5;
    if(num<0){
        return "Please provide a Positive Number";
    }
    else{
        return d;
    };
};

// problem 2 ------------------------
// Problem 2: Finding even or odd

function evenOdd(name){
    let nameLength = name.length;
    let hasReminder = nameLength % 2;
    if(hasReminder == 0){
        return "Even";
    }
    else{
        return "odd";
    }
};

// problem 3 ------------------------
// Problem 3: Is Less or Greater than seven

function isLGSeven(num){
    let realnum = num - 7;
    if(num < 7){
        return realnum;
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
        if(element>0){
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
    let diamond1st = friend1*21;
    let diamond2nd = friend2*32;
    let diamond3rd = friend3*43;

    let total = diamond1st+diamond2nd+diamond3rd;

    if(total>1000*2){
        let weGet = total-2000;
        return weGet;
    }
    else{
        return total;
    };
    
};


// end of assignment

// p1 test 
let a = mindGame(33);
console.log("p1 mindgame prob " + a);
// p2 test 
let b = evenOdd("chatgpt");
console.log("p2 Name is done " + b);
// p3 test 
let c = isLGSeven(15);
console.log("p3 Difference is prob " + c);
// p4 test 
let arr = [12, -76, -23, 23, -12, 32, -54, -23, 20]
let d = findingBadData(arr);
console.log("p4 Bad Data done " + d);
// p5 test 
let e = gemsToDiamond(100,5,1);
console.log("p5 Diamond done " + e);