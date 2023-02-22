function pow(x, n) {
    let result = 1;

    for (var i = 0; i < n; i++){
        result *= x;
    }

    return result;
}

x = prompt("x?", '');
n = prompt("n?", '');

if (n < 0) {
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else{
    alert(pow(x, n));
}

// задание 2

let userName = "Каребо Никита Сергеевич";
let towerName = "Мир";
let yearBirth = 2004;
const myBirthday = '05.01.2004';
const COLOR_RED = "#F00";
let answerUser = "да";
let infinit = Infinity;
let number = 532;
let perimeter = "120 мм";
alert("Введённые данные неверны");

//задание 3

let a = 5;
alert(`a ${typeof(a)}`);//number
let name = "Name";
alert(`name ${typeof(name)}`);//string
let i = 0;
alert(`i ${typeof(i)}`);//number
let double = 0.23;
alert(`double ${typeof(double)}`);//number
let result = 1/0;
alert(`result ${typeof(result)}`);//number
let answer = true;
alert(`answer ${typeof(answer)}`);//boolean
let no = null;
alert(`no ${typeof(no)}`);//null

//задание 4

function getSquare(a, b) {
   return a * b;
}

let first = 45;
let second = 21;
let squareA = getSquare(first, second);
alert(`Площадь прямоугольника А составляет ${squareA} мм`); 

//задание 5 

function getCount(bigSquare, smallSquare) {
    return parseInt(bigSquare / smallSquare);
}

let sideB = 5;
let squareB = getSquare(sideB ,sideB);
let count = getCount(squareA ,squareB);
alert(`Поместится в прямоугольник A всего ${count} квадратов В`);

//задание 6

let i1 = 2;
let a1 = ++i1;
let b1 = i1++;
if( a1 > b1 ) {
    alert("a больше");
} else if ( a1 < b1 ) {
    alert("b больше");
} else {
    alert("они равны");
}

//задание 7

"Привет" > "привет" ? alert("Привет больше") :"Привет" < "привет" ? alert("привет больше") : alert("они равны"); // привет
"Привет" > "Пока" ? alert("Привет больше") : "Привет" < "Пока" ? alert("Пока больше") : alert("они равны"); // Привет
45 > "53" ? alert("45 больше") : 45 < "53" ? alert("53 больше") : alert("они равны"); // 53
true > 3 ? alert("true больше") :true < 3 ? alert("3 больше") : alert("они равны"); // 3
3 > "5мм" ? alert("3 больше") : 3 < "5мм" ? alert("5мм больше") : alert("они равны или undefined"); // они равны
null > undefined ? alert("null больше") : null < undefined ? alert("undefined больше") : alert("они равны"); // они равны

//задание 8 

let answerYears = prompt("Введите число", '');

if( !answerYears.match(/^\d+$/) ) {
    alert("Данные неверны");
} else {
    alert("Данные верны");
}

//задание 9

let answerSecretRight = 18;
let answerSecretUser = prompt("Сколько мне лет?", "");
if( answerSecretRight == answerSecretUser ) {
    alert("Ответ верный");
} else {
    alert("Ответ неверный");
}

//задание 10

let login = "nik123";
let password = "23646";
let loginUser = prompt("Введите логин:", "");
let passwordsUser = prompt("Введите пароль", "");
if(login == loginUser && password == passwordsUser) {
    alert("Вы вошли");
} else {
    alert("Неверный логин или пароль");
}

//задание 11 

let markRus = prompt("Оценка за русский язык?", "");
let markBel = prompt("Оценка за белорусский язык?", "");
let markMath = prompt("Оценка за математикy?", "");
if(markRus >= 4 && markBel >= 4 && markMath >= 4) {
    alert("Вы успешно сдали сессию");
} else if(markRus < 4 && markBel < 4 && markMath <4) {
    alert("вы неуспешно сдали сессию");
} else {
    alert("У вас есть пересдачи");
}

//задание 12

let a2 = parseInt(prompt("Введите число a:", ""));
let b2 = parseInt(prompt("Введите число b", ""));
let sum = a2 + b2;
alert(`Сумма чисел равна ${sum}`);

//задание 13

let expression = true + true; // 2
let expression1 = 0 + "5"; // "05"
let expression2 = 5 + "мм"; // "5мм"
let expression3 = 8 / Infinity; // 0
let expression4 = 9 * "\n9"; // 81
let expression5 = null - 1; // -1
let expression6 = "5" - 2; // 3
let expression7 = "5px" - 3; // NaN
let expression8 = true - 3; // -2
let expression9 = 7 || 0; // 7

//задание 14

for(let i = 1; i <= 10; i++) {
    if(!(i % 2)) {
        alert(i+2)
    } else {
        alert(i + "мм");
    }
}

//задание 15

let numberUser = 1;
while(numberUser < 100) {
    numberUser = prompt("Введите число меньшее 100", "");
}

//задание 16

let dayOfWeek = parseInt(prompt("Введите номер дня", ""));
switch(dayOfWeek) {
    case 1: alert("Понедельник");
            break;
    case 2: alert("Вторник");
            break;
    case 3: alert("Среда");
            break;
    case 4: alert("Четверг");
            break;
    case 5: alert("Пятница");
            break;
    case 6: alert("Суббота");
            break;
    case 7: alert("Воскресенье");
            break;
    default: alert("Неправильно введен номер");
            break;
}