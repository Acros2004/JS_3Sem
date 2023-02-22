//задание 1
function verification(maxMessage,userMessage){
    if (maxMessage <= userMessage){
        return false;
    }
    return true;
};
function getCorrect(){
let test=verification(maxMessage,userMessage.length);
let words = userMessage.split(' ');
if (test){
    for(let a=0;a<words.length;a++){
        if(words[a].includes('кот'))
        {
            words[a]='*';
        }
        else if(words[a].includes('собак')){
            words[a]=words[a][0].toUpperCase()+words[a].slice(1);    
        }
        else if (words[a]=='пёс'){
            words[a]='Многоуважаемый пес';
        }
    }
    alert(words.join(' '));
}
else{
    alert("длина комментария больше максимальной длины комментария")
}
}
let maxMessage= 40;
let userMessage=prompt("Введите комментарий",'');
getCorrect()
//задание 2
dayOnWeek = {
    1 : "Понедельник",
    2 : "Вторник",
    3 : "Среда",
    4 : "Четверг",
    5 : "Пятница",
    6 : "Суббота",
    7 : "Воскресенье",
    
}
function getDays(){
    let str ="",count = 0;
    for(let i = 1 ; i <= 7;) {
        count++
        str = str + ` ${i} : ${dayOnWeek[i]},`;
        i += 2;
    }
    str = str + `\nКоличество дней: ${count}`;
    return str;
}
function getList(set){
    let str = '';
    if(set.size !=0){
        for(let item of set){
            str = str + item + ", ";
        }
        alert(str);
    }
    else{
        alert("Пусто")
    }
}
//задание 4
function getMySet(){
    let flag = false,count = 0,answer;
    const set = new Set();
    while(!flag){
        getList(set);
        let choice = prompt("1)Добавить элемент\n2)Удалить элемент\n3)Найти элемент\n4)Количество\n0)Выход\nВыберите действие: ")
        switch(parseInt(choice)){
            case 1:
                answer = prompt(`Введите название товара:`);
                set.add(answer);
                break;
            case 2:
                answer = prompt(`Введите название товара:`);
                set.delete(answer);
                break;
            case 3:
                answer = prompt(`Введите название товара:`);
                if(set.has(answer)) alert("Есть!");
                else alert("Не найдено");
                break;
            case 4:
                alert(`Количество элементов составляет: ${set.size}`)
               break;
            case 0:
                flag = true;
                break;
            default:
                alert("Введите коректное значение");
                break;
    }
}
}

let number = parseInt(prompt("Введите номер дня недели"));
alert(`Ваш день это - ${dayOnWeek[number]}`);

alert(`Нечётные дни недели:\n${getDays()}`);

getMySet();

//задание 5
let banana={
    name:"банан",
    amount:10,
    price:100,
}
let garlic={
    name:"чеснок",
    amount:6,
    price:53,
}
let map = new Map([
    [1,banana],
    [2,garlic],
    [3,banana],
]);
id = 4;
let end=false;
while(!end){
    let answerOfUser=prompt("1)добавить\n2)удалить\n3)изменить количество товара\n4)вывод всего товара\n5)количество позиций и сумма\n0)выход","");
    switch(parseInt(answerOfUser)){
        case 4:{
            console.log(`в вашей корзине находятся следующие товары: `)
            map.forEach((value, key, map) => {
                console.log(`id: `+key);
                for (let inf in value){
                console.log(inf+': '+value[inf]);
                }
            });
            
            break;
        }
        case 1:{
            let value=prompt("какой товар необходимо добавить,его количество и цена?");
            let words=value.split(' ');
            information={
                name:words[0],
                amount:words[1],
                price:words[2],
            };
            map.set(id,information);
            id++;
            break;
        }
        case 2:{
            let value=prompt("какой id необходимо удалить");
            map.delete(+value);
            for(let key of map.keys()){
                if (key>(+value))
                {
                    let temp =map.get(key);
                    map.delete(key);
                    key--;
                    map.set(key,temp);
                }
            }
            break;
        }
        case 3:{
            let key=prompt("Укажите id товара, количество которого необходимо изменить","")
            let tmp=map.get(+key);
            let count=prompt("Новое количество:");
            tmp.amount=(+count);
            map.set(+key,tmp);
            break;
        }
        case 5:{
            let tmp=map.size;
            let sum=0;
            map.forEach((value, key, map) => {
                for (let inf in value){
                    if (inf=="price"){
                        sum+=value[inf];
                    }
                }
            });
            console.log(`количество:${tmp},общая сумма покупок:${sum}`);
            break;
        }
        case 0:{
            end=true;
            break;
        }
    }
}


