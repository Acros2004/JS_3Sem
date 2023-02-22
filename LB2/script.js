//function declaration
function getSquare(radius) {
return Math.PI * Math.pow(radius, 2)
}
//function expression
const diametr = function (radius) {
 return 2 * radius;
};
//arrow function
let getLength = radius => 2 * Math.PI * radius;
//функция с тремя параметрами(первый по умолчанию)
function getStringWithThreeParameters(secondParm, thirdParm,firstParm = "ЭтоПоУмолчанию") {
return firstParm + secondParm + thirdParm;
}
//функция определяющая кол-во студентов
function getCountOfStudents() {
    let counter = 0
    while (true) {
        let student = (prompt("Введите фамилию присутсвующего студента (для прекращения введите 0): "));
        if (student == "0") {
            return counter;
        }
        counter++
    }
}
//функция расчёта времени для подбора пароля
function getTime() {
let seconds = 0; 
let minutes = 0;
let hours = 0;
let days = 0;
let months = 0;
let years = 0;

let attempts = 26 * 26 * 26 * 26 * 26 * 10 * 10 * 10;
seconds = attempts * 3;

while(seconds >= 60) {
    seconds -= 60;
    minutes++;

    if(minutes == 60) {
        minutes -= 60;
        hours++;
    }
    if(hours == 24){
        hours -=24;
        days++;
    }
    if(days == 30){
        days -= 30;
        months++;
    }
    if(months == 12){
        months -= 12;
        years++;
    }
}

alert(`Это займёт ${years} лет ${months} месяцев ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`);
}
//функция для преобразования даты
 function getData(parm) {
    if(parm.match(/(\-?\d+)([.,](\d+))?/)){
        if(parm.match(/^\d+$/)){
            let number = parseInt(parm).toString(16);
            return number.toUpperCase();
        }
        else{
            let number = parseFloat(parm);
            let floornum = Math.floor(number);
            let ceilnum = Math.ceil(number);
            let roundnum = Math.round(number);
            let str = `Ваше число дробное\nОкругление в меньшую сторону: ${floornum}\nОкругление в большую сторону: ${ceilnum}\nОкругление до ближайшего челого: ${roundnum}`;
            return str;
        }
    }
    else{
        let str = `Преобразованный текст\n${parm.toUpperCase()}\n${parm.toLowerCase()}`;
        return str;
    }
 }

function getCorrect(correct,incorrect,amont,amont2) {
    
    if(amont > amont2 || amont < amont2) {
        return "Неправиильное количество букв";
    }
    for(let i = 0; i < amont ; i++ ) {
        if(correct[i] != incorrect[i]){
            let str = `В вашем слове ошибка в позиции ${++i}, должна быть буква [${correct[--i]}] вместо [${incorrect[i]}]`;
            return str;
        }
    }
    return "Всё правильно!"
}

function getSquareTriangles(cathet1,cathet2) {
    return (cathet1*cathet2)/2;
}
function getPerimetr(cathet1,cathet2,perimeter) {
    return cathet1+cathet2+perimeter;
}
function getHeight(cathet1,cathet2,hypothesis) {
    return (cathet1*cathet2)/hypothesis
}
function getSin(cathet,hypothesis) {
    return cathet/hypothesis;
}
function getCos(cathet,hypothesis) {
    return cathet/hypothesis;
}
function getTg(cathet1,cathet2) {
    return cathet2/cathet1;
}
function getCtg(cathet1,cathet2) {
    return cathet1/cathet2;
}
function getCalculator(){
    let cathet1 = parseInt(prompt("Введите первый катет треугольника: "));
    let cathet2 = parseInt(prompt("Введите второй катет треугольника: "));
    let hypothesis = Math.sqrt(cathet1 ** 2 + cathet2 ** 2);
    alert(hypothesis);
    let flag = true;
    while(flag) {
        let choice = prompt("1)Найти площадь\n2)Найти периметр\n3)Найти высоту\n4)Найти sin\n5)Найти cos\n6)Найти tg\n7)Найти ctg\n0)Выход\nВыберите действие: ")
        switch(parseInt(choice)){
            case 1:
                alert(`Площадь треугольника составила: ${getSquareTriangles(cathet1,cathet2)}`);
                break;
            case 2:
                alert(`Периметр прямоугольника составляет ${getPerimetr(cathet1,cathet2,hypothesis)}`);
                break;
            case 3:
                alert(`Высота в прямоугольном треугольнике составляет ${getHeight(cathet1,cathet2,hypothesis)}`)
                break;
            case 4:
                alert(`sin угла между первым катетом [${cathet1}] и гипотенузой составляет ${getSin(cathet2,hypothesis)}, а для второго [${cathet2}] равен ${getSin(cathet1,hypothesis)}`);
                break;
            case 5:
                alert(`cos угла между первым катетом [${cathet1}] и гипотенузой составляет ${getCos(cathet1,hypothesis)}, а для второго [${cathet2}] равен ${getCos(cathet2,hypothesis)}`);
                break;
            case 6:
                alert(`tg угла между первым катетом [${cathet1}] и гипотенузой составляет ${getTg(cathet1,cathet2)}, а для второго [${cathet2}] равен ${getTg(cathet2,cathet1)}`);
                break;
            case 7:
                alert(`ctg угла между первым катетом [${cathet1}] и гипотенузой составляет ${getCtg(cathet1,cathet2)}, а для второго [${cathet2}] равен ${getCtg(cathet2,cathet1)}`);
                break;
            case 0:
                flag = false;
                break;
        }
        
    }
}

let radius = prompt("Введите радиус окружности: ");
alert(`Площадь вашей окружности составляет: ${getSquare(radius)}`);
alert(`Диаметр вашей окружности составляет: ${diametr(radius)}`);
alert(`Длина вашей окружности составляет: ${getLength(radius)}`);

let secondParm = "Parm2";
let thirdParm = prompt("Введите третий параметр(ЭтоПоУмолчанию,Parm2,ваш параметр): ");
alert(`Вызов функции с тремя параметрами\n${getStringWithThreeParameters(secondParm,thirdParm)}`);
alert(`Количество студентов составило: ${getCountOfStudents()}`);

getTime();

let parm = prompt("Введите число или текст: ");
alert(getData(parm));

let correct = 'Словарь';
let incorrect = prompt("Введите слово \"Словарь\"").trim();
alert(getCorrect(correct,incorrect,correct.length,incorrect.length));

getCalculator();