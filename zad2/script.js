
const number = document.querySelector('div.number');
const plus1 = document.querySelector('button.plus1');
const color = document.querySelector('button.color');
let counter = 0;

plus1.addEventListener('click',function (){
    number.innerHTML= ++counter;
})
color.addEventListener('click', () =>{
    if(number.style.color==='black') number.style.color="red";
    else number.style.color='black';
    });

