let plus = document.getElementsByClassName("plus");
let minus = document.getElementsByClassName("minus");
let num = document.getElementsByClassName('num');
let wrappers = document.getElementsByClassName('wrapper');

let a1 = 1;
let a2 = 1;
let a3 = 1;
let a4 = 1;
let a5 = 1;
let e1 = document.querySelector('#num1');
let e2 = document.querySelector('#num2');
let e3 = document.querySelector('#num3');
let e4 = document.querySelector('#num4');
let e5 = document.querySelector('#num5');

let bread_up = document.querySelector('.bread-top');
let bread_down = document.querySelector('.bread-bottom');
let steak = document.querySelector('.steak');
let tomate = document.querySelector('.tomate');
let salade = document.querySelector('.salad');
let cheese = document.querySelector('.cheese');

let box = document.querySelector('.box');
let inside = document.querySelector('.inside');
let insideContainer = document.querySelector('.inside_container');

steak.style.visibility = 'hidden';
tomate.style.visibility = 'hidden';
salade.style.visibility = 'hidden';
cheese.style.visibility = 'hidden';


let prices = document.getElementsByClassName("prix");
let additionBurger = 2;
let value = 0;
for (let i = 1; i<wrappers.length; i++){

    if (wrappers[i].id == "wrapper1"){
        plus[i].addEventListener('click',function(){
            a1++;
            a1 = (a1 < 10)? "0" + a1 : a1;
            e1.innerText = a1;
        })
    }
    if (wrappers[i].id == "wrapper2"){
        plus[i].addEventListener('click',function(){
            a2++;
            a2 = (a2 < 10)? "0" + a2 : a2;
            e2.innerText = a2;
            steak.style.visibility = "visible";
            var new_steak = document.createElement('div');
            new_steak.classList.add("steak");
            box.appendChild(new_steak);
            box.insertBefore(new_steak, bread_down);
            
            console.log(new_steak);
            console.log('steak added');

            additionBurger += parseInt(prices[i].innerHTML);
            console.log(additionBurger);
            value = additionBurger;
            
            
        })
    }
    if (wrappers[i].id == "wrapper3"){
        plus[i].addEventListener('click',function(){
            a3++;
            a3 = (a3 < 10)? "0" + a3 : a3;
            e3.innerText = a3;
            cheese.style.visibility = "visible";
            var new_cheese = document.createElement('div');
            new_cheese.classList.add("cheese");
            box.appendChild(new_cheese);
            box.insertBefore(new_cheese, bread_down)
            additionBurger += parseInt(prices[i].innerHTML);
            console.log(additionBurger);
            value = additionBurger;
        })
    }
    if (wrappers[i].id == "wrapper4"){
        plus[i].addEventListener('click',function(){
            a4++;
            a4 = (a4 < 10)? "0" + a4 : a4;
            e4.innerText = a4;
            salade.style.visibility = "visible";
            var new_salad = document.createElement('div');
            new_salad.classList.add("salad");
            box.appendChild(new_salad);
            box.insertBefore(new_salad, bread_down);
            additionBurger += parseInt(prices[i].innerHTML);
            console.log(additionBurger);
            value = additionBurger;
        })
    }
    if (wrappers[i].id == "wrapper5"){
        plus[i].addEventListener('click',function(){
            a5++;
            a5 = (a5 < 10)? "0" + a5 : a5;
            e5.innerText = a5;
            tomate.style.visibility = "visible";
            var new_tomato = document.createElement('div');
            new_tomato.classList.add("tomate");
            box.appendChild(new_tomato);
            box.insertBefore(new_tomato, bread_down);
            additionBurger += parseInt(prices[i].innerHTML);
            console.log(additionBurger);
            value = additionBurger;
        })
    }
}
/*
var button = document.getElementById('btn1');
button.addEventListener('click', function(){
    fetch('/tableReservation/menu/burger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value : value })
      });
      window.location = 'http://localhost:3000/tableReservation/menu/receipe';
    
})
*/
/*
document.querySelector("#btn1").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
     document.querySelector(".popup").classList.remove("active");
});
*/
