let products = new Array();
let numbers = 0;
class Product{
    constructor(id, price, name, img, background){
        this.id = id;   
        this.price = price;
        this.name = name;
        this.img = img;
        this.background = background;
        products.push(this);
    }

    addElements(){
        let div = document.createElement('div');
        div.style.width = '250px';
        div.style.height = '350px';
        div.className = "info";
        div.id = numbers;
        div.style.textAlign = 'center';
        div.style.background = this.background;

        allProducts.append(div);
        allProducts.style.width = '100%';
        allProducts.style.display = 'flex';
        allProducts.style.flexWrap = 'wrap';
        let img = document.createElement('img');
        img.src = this.img;
        img.style.width = '200px';
        img.style.height = '200px';
        div.prepend(img);

        let p = document.createElement('p');
        p.innerHTML = this.name;
        p.style.fontSize = '20px';
        p.style.fontWeight = 'bold';
        
        div.append(p);
        let p2 = p.cloneNode(true);
        p2.className = "Money";
        p2.innerHTML = this.price + " $";
        p2.style.fontSize = '12px';
        div.append(p2);
        let button = new Button(150, 75, 'blue','Buy now');
        div.append(button.addButton()); 
        numbers++;
        
    }
    changeImg(code,str){
        let newPhoto = document.querySelector(`div[id=\"${code}\"] > img`);
        newPhoto.setAttribute("src",str);
    }
    changeName(code,str){
        let newPhoto = document.querySelector(`div[id=\"${code}\"] > p`);
        newPhoto.textContent = str;
    }
    changeMoney(code,str){
        let newPhoto = document.querySelector(`div[id=\"${code}\"] > p[class="Money"]`);
        newPhoto.textContent = str;
    }

    Delete(){
        let massive = document.getElementsByClassName('info');
            massive[this.id-1].remove();
        let size = Object.getOwnPropertyNames(this);
        for(let i = 0; i < size.length; i++){
            delete this[size[i]];
        }
    }
    
}

class Button{
    constructor(width, height, background, text){
        this.width = width;
        this.height = height;
        this.text = text;
        this.background = background;
    }

    addButton(){
        let button = document.createElement('button');
        button.innerHTML = this.text;
        button.style.width = this.width;
        button.style.height = this.height;
        button.style.background = this.background;
        button.style.color = 'white';
        button.style.border = '5px solid blue';
        button.style.borderRadius = '5px';
        return button;
    }
    
}
function deleteButton(code){
    let newPhoto = document.querySelector(`div[id=\"${code}\"] > button`);
    newPhoto.remove();
}

function changeButtonsize(code,height1,width1){
    let newPhoto = document.querySelector(`div[id=\"${code}\"] > button`);
    newPhoto.style.width = width1;
    newPhoto.style.height = height1;
}
function changeButtoncolor(code,color1){
    let newPhoto = document.querySelector(`div[id=\"${code}\"] > button`);
    newPhoto.style.background = color1;
   
}
function changeButtontext(code,str){
    let newPhoto = document.querySelector(`div[id=\"${code}\"] > button`);
    newPhoto.textContent = str;
}


let cartButton = new Button(150, 75, 'blue','Cart');
document.body.prepend(cartButton.addButton());

let first = new Product(1, 10000,'MacBook Pro 11', "MacBook.jpg", 'white');
first.addElements();
first.changeImg(0,'change.jpg');
first.changeName(0,'Nikita');
first.changeMoney(0,'20000000$');
changeButtontext(0,'fdsfdsf');
changeButtoncolor(0,'red')
changeButtonsize(0,'100px','100px');
let second = new Product(2, 15000,'MacBook Pro 12', "MacBook.jpg", 'white');
second.addElements();
let third = new Product(3, 20000,'MacBook Pro 13', "MacBook.jpg", 'white');
third.addElements();
let fourth = new Product(4, 25000,'MacBook Pro 14', "MacBook.jpg", 'white');
fourth.addElements();
let fiveth = new Product(5, 30000,'MacBook Pro 15', "MacBook.jpg", 'white');
fiveth.addElements();
let sixth = new Product(6, 35000,'MacBook Pro 16', "MacBook.jpg", 'white');
sixth.addElements();
let ff = new Product(6, 35000,'MacBook Pro 16', "MacBook.jpg", 'white');
ff.addElements();
let ff2 = new Product(6, 35000,'MacBook Pro 16', "MacBook.jpg", 'white');
ff2.addElements();
deleteButton(4);

third.Delete();
let test = document.querySelectorAll("div[class=\"info\"]");
test.forEach((item,index,test) => {
    if(+index % 2 == 0){
        item.style.backgroundColor = "gray";
       }
    
});
