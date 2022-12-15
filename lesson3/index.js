'use strict'

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
console.log(isNum);

const myName ='Алик';
`document.body.innerHTML='<h2 class="title">Привет ${myName}</h2>
<p>Сейчас ${new Date().getFullYear()} год</p>'`;
