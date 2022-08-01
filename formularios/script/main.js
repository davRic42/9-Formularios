'use strict';
const btn = document.getElementById('buton2');

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    const form= document.getElementById('formOne')
    console.log(form);
    console.log(form[0].value);
    console.log(form[1].value);
    console.log(form[2].value);
    console.log(form[3].value);
    console.log(form[4].value);
});
//2do parametro funcion  tipo fecla anonima