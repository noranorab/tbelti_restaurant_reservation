let sub_sub_meal_list = document.getElementsByClassName('sub_sub_meal');
let mealPrice_list = document.getElementsByClassName('prix');

// creata div addition
let addition = 0;
let menu = document.querySelector('.menu');
let div = document.createElement('div');
menu.appendChild(div);
div.innerHTML = "Addition :  " + addition + "dhs";
div.classList.toggle('finalPrice');

//ajouter boutton add
for (let i = 0; i<sub_sub_meal_list.length; i++){
    var button = document.createElement("BUTTON");
    var text = document.createTextNode("ADD");
    button.appendChild(text);
    button.classList.toggle("add");
    sub_sub_meal_list[i].appendChild(button);
}

//build your own burger button
/*
let buildBurger = document.createElement("BUTTON");
let textButton = document.createTextNode("Build your own Burger!");
let menuAndButtons = document.getElementsByClassName('menu_and_buttons')[0];
buildBurger.appendChild(textButton);
menuAndButtons.appendChild(buildBurger);
buildBurger.classList.toggle('burger');
*/


let price = 0;
let add = document.getElementsByClassName('add');
for (let i=0; i<sub_sub_meal_list.length; i++){
    add[i].addEventListener('click', function(){
        console.log('clicked')
        sub_sub_meal_list[i].style.display = "none";
        addToMenu(sub_sub_meal_list[i]);
        price = parseInt(mealPrice_list[i].innerHTML);
        console.log(price);
        addition += price;
        div.innerHTML = "Addition :  " + addition + "dhs";
    })
}

//let containerList = document.getElementsByClassName("container");
function addToMenu(e){
    var new_e = e.textContent.replace("ADD", "");
    var li = document.createElement('li');
    var textNode = document.createTextNode(new_e);
    var menu = document.querySelector('.sous_menu');
    li.classList.toggle('added');
    li.appendChild(textNode);
    menu.appendChild(li);
    
}


var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');

button1.addEventListener('click', function() {
  // Redirect to the new page
  window.location = 'http://localhost:3000/tableReservation/menu/burger';
});
/*
button2.addEventListener('click', function(){
    window.location = 'http://localhost:3000/tableReservation/menu/receipe';
})
*/


