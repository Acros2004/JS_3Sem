//задание 1
function checkParameters(...args) {
    if (args.length <= 3) {
        return args.join(',');
    } else if (args.length > 3 && args.length <= 5) {
        return args.map(arg => typeof arg);
    } else if (args.length > 5 && args.length <= 7) {
        return args.length;
    } else {
        return "слишком много";
    }
}

alert(checkParameters(7, 7, 7)); 
alert(checkParameters(...["Seven", "Seven", "Seven"])); 
alert(checkParameters(7, "Seven", true, false)); 
alert(checkParameters(1, 2, 3, 4, 5, 6)); 
alert(checkParameters(1, 2, 3, 4, 5, 6, 7, 8)); 

//задание 2
// 1)
//window.a; 
//alert(a);    
//ReferenceError: a is not defined

// 2)
//alert(a);
//window.a = 2; 
//ReferenceError: a is not defined

// 3)
//alert(a); 
//window.a = 2;
//let a;   
//Cannot access 'a' before initialization

// 4)
//alert(a);
//window.a = 2;
//var a;  
//undefined

// 5)
//alert(a);
//let a = 2; 
//Cannot access 'a' before initialization

//6)
//let a = 2;
//window.a = 3;
//alert(a);
//2

// 7)
//var a = 2; 
//window.a = 3;
//alert(a); 
//3

//задание 3

/*
let s = 5;
function sum() {
    alert(s);
}
sum();
*/
//5

//задание 4 Вариант 1
 
function makeCounter() {
    let currentCount = 1;

    return function() {  
        return currentCount++; 
    };
}

let counter1 = makeCounter();

//alert( counter1() ); // 1
//alert( counter1() ); // 2
//alert( counter1() ); // 3

let counter2 = makeCounter();
//alert( counter2() ); // 1

//Вариант 2 
let currentCount = 1;

function makeCounter2() {
    return function() {
        return currentCount++;
    };
}

let counter3 = makeCounter2();
let counter4 = makeCounter2();

//alert( counter_03() ); // 1
//alert( counter_03() ); // 2

//alert( counter_04() ); // 3
//alert( counter_04() ); // 4

//задание 5
alert(`${checkParameters.name}\n${makeCounter.name}\n${makeCounter2.name}\n`);

//задание 6
function Calculate(edge1) {
    return (edge2) => {
        return (edge3) => {
            return (+edge1 * +edge2 * +edge3);
        }
    }
}

alert(`Вызов calculate (1)(2)(3): ${Calculate(1)(2)(3)}`);

function CalculateWithOneEdge(edgeOne) {
    return (edge2, edge3) => {
        return  (+edgeOne * +edge2 * +edge3);
    }
}
let CalculateWithOneEdgeLet = CalculateWithOneEdge(7);
alert(`Вызов calculatewithoneedge (1,2): ${CalculateWithOneEdgeLet(1, 2)}`);
alert(`Вызов calculatewithoneedge (2,3): ${CalculateWithOneEdgeLet(2, 3)}`);

//задание 7
function* LetsMove() {
    let x = y = 0;
    let check = false;
    let move;

    for (let i = 0; i < 10; i++) {
        move = prompt("Куда идти?");
        switch (move.trim().toUpperCase()) {
            case "LEFT":
                check = true;
                x--;
                break;
            case "RIGHT":
                check = true;
                x++;
                break;
            case "UP":
                check = true;
                y++;
                break;
            case "DOWN":
                check = true;
                y--;
                break;
            default:
                i--;
                check = false
                break;
        }
        if(check) yield [x, y];
        alert(`${x},${y}`);
    }
}

let generator = LetsMove(); 
let moveUser = "";
for (let i = 0; i < 10; i++) {
    moveUser += generator.next().value;
    moveUser += '\n';
}

alert(moveUser);
