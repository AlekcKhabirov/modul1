'use strict';

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
const myName ='Алик';
document.body.innerHTML=`<h1 class="title">Привет ${myName}</h1>
<p>Сейчас ${new Date().getFullYear()} год</p>`;