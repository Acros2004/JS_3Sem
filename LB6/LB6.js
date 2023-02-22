const cube = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    background: 'yellow'
}

const circle = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    borderRadius : '50%',
    background: 'white'
}

const triangle = {
    width: 0,
    height: 0,
    borderColor: 'transparent transparent #fff transparent',
    borderWidth: '0 30px 30px 30px',
    middleLine: true, 
}

const secondCube = {
    width: '100px',
    height: '100px',
    border: '10px solid black',
    background: 'yellow'
}

const secondCircle = {
    width: '200px',
    height: '200px', 
    border: '10px solid black',
    borderRadius : '50%',
    background: 'green'
}

const secondTriangle = {
    width: 0,
    height: 0,
    borderColor: 'transparent transparent #fff transparent',
    borderWidth: '0 30px 30px 30px',
    threeMiddleLines: true, 
}

let text = "";

for (let prop in secondTriangle){
    text = text + prop + ": " + secondTriangle[prop] + "\n";
}

for (let prop in secondCube){
    if (prop == "background")
        alert(`У куба цвет определает свойство background со значением ${secondCube[prop]}`);
}

alert("Свойства второго треугольника:\n" + text);
for (let prop in secondCircle){
    if (prop in circle){
        if (secondCircle[prop] != circle[prop]){
            alert(`Свойство ${prop} в первом круге имеет значение ${circle[prop]}, а во втором ${secondCircle[prop]}`);
        }
    }
    else{
        alert(`Свойство ${prop} нету в первом круге`);
    }
}




