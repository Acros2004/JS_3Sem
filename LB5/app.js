//1)
let products={
    shoes:{
        boots:{
            id:1,
            size:42,
            color:"brown",
            cost:150
            
        },
        sneakers:{
            id:2,
            size:45,
            color:"red",
            cost:111
        },
        sandals:{
            id:3,
            size:48,
            color:"dark",
            cost:202
        }

    }
}
//2)
function makeIterator(array){
  var nextIndex = 0;

  return {
     next: function(){
         return nextIndex < array.length ?
             {value: array[nextIndex++], done: false} :
             {done: true};
     }
  }
}
let costs=[products.shoes.boots.cost,products.shoes.sneakers.cost,products.shoes.sandals.cost]
let sizes=[products.shoes.boots.size,products.shoes.sneakers.size,products.shoes.sandals.size]
let colors=[products.shoes.boots.color,products.shoes.sneakers.color,products.shoes.sandals.color]
let choice=parseInt(prompt("1-фильтр обуви по цене\n2-фильтр обуви по размеру\n3-фильтр обуви по цвету\n4-выход"))
switch(choice){
  case 1:{let choice1=parseInt(prompt("Начальный диапазон"))
         let choice2=parseInt(prompt("Конечный диапазон"))
       
         var it = makeIterator(costs);
         for(let i=0;i<costs.length;i++){
            let vr=it.next().value
           if(vr>=choice1&&vr<=choice2){
            if(vr==products.shoes.boots.cost){
                alert(`Номер товара:${products.shoes.boots.id}`)
            }
            else if(vr==products.shoes.sneakers.cost){
                alert(`Номер товара:${products.shoes.sneakers.id}`)
            }
            else{
                alert(`Номер товара:${products.shoes.sandals.id}`)
            }
          
            }
        }
        break
    }
    case 2:{let choice1=parseInt(prompt("Начальный диапазон"))
        let choice2=parseInt(prompt("Конечный диапазон"))
      
        var it = makeIterator(sizes);
        for(let i=0;i<sizes.length;i++){
           let vr=it.next().value
          if(vr>=choice1&&vr<=choice2){
           if(vr==products.shoes.boots.size){
               alert(`Номер товара:${products.shoes.boots.id}`)
           }
           else if(vr==products.shoes.sneakers.size){
               alert(`Номер товара:${products.shoes.sneakers.id}`)
           }
           else{
               alert(`Номер товара:${products.shoes.sandals.id}`)
           }
        }
       }
       break
    }
    case 3:{
    let choice1=prompt("Какой цвет обуви вам нужен?")
    var it = makeIterator(colors)   
    for(let i=0;i<colors.length;i++){
        let vr=it.next().value
        if(vr==choice1&&vr==products.shoes.boots.color){
            alert(`Номер товара:${products.shoes.boots.id}`)
        }
        else if(vr==choice1&&vr==products.shoes.sneakers.color){
            alert(`Номер товара:${products.shoes.sneakers.id}`)
        }
        else if(vr==choice1&&vr==products.shoes.sandals.color){
            alert(`Номер товара:${products.shoes.sandals.id}`)
        }
    }
    break
    }
}
//3)
function Product(id,color,size,cost,descount,total_cost){
    this.id=id
    this.color=color
    this.size=size
    this.cost=cost
    this.descount=descount
    this.total_cost=total_cost
}
let tc
let prod =new Product(1,"black",43,100,30,tc)
Object.defineProperty(prod, "id",{
    writable: false,
    configurable:false
  });
  Object.defineProperty(prod, "color",{
    writable: false
  });
  Object.defineProperty(prod, "size",{
    writable: false
  });
  Object.defineProperty(prod, "cost",{
    writable: false
  });

//4)
Object.defineProperty(prod, "NewCost", {
  
    get: function fi() {
      return this.total_cost;
    },
  
    set: function(value) {
        this.total_cost=this.cost-value
      }
  });
prod.NewCost=prod.descount
tc=prod.NewCost
alert(prod.total_cost)



