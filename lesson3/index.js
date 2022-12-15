'use strict'

{
    const item = prompt('Введите товар');
    let counts = +prompt('Введите количество товара');
    const category = prompt('Введите категорию товара');
    let price = +prompt('Введите цену товара'); 

    console.log('item: ',typeof item);
    console.log('counts: ', typeof counts);
    console.log('category:', typeof category);
    console.log('price: ', typeof price);

    console.log(`"В магазине" , ${counts}, "единиц товара" , ${item}, "на сумму", ${counts*price}, "P."`);
    }

{
    const item = 'broad';
    const counts = 10;
    const categoriesItem ="products";
    const zchena = 27;
    console.log(item);
    console.log(`на сумму - ${counts*zchena}`);
}
{
    const item = 'milk';
    const counts = 5;
    const categoriesItem = 'products';
    const zchena = 58;
    
    console.log(item);
    console.log(`на сумму - ${counts*zchena}`);
}
const isNum = () =>{
    let num =5E6;
    console.log(`itsNumberInteger(${num})`,Number.isInteger(num));}
console.log(isNum());

const myName ='Алик';
`document.body.innerHTML='<h2 class="title">Привет ${myName}</h2><p>Сейчас ${new Date().getFullYear()} год</p>'`;
