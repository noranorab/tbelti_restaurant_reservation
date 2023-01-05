let sub_sub_meal_list = document.getElementsByClassName('sub_sub_meal');

//ajouter boutton add
for (let i = 0; i<sub_sub_meal_list.length; i++){
    var button = document.createElement("BUTTON");
    var text = document.createTextNode("ADD");
    button.appendChild(text);
    button.classList.toggle("add");
    sub_sub_meal_list[i].appendChild(button);
}


let add = document.getElementsByClassName('add');
for (let i=0; i<sub_sub_meal_list.length; i++){
    add[i].addEventListener('click', function(){
        console.log('clicked')
        sub_sub_meal_list[i].style.display = "none";
        addToMenu(sub_sub_meal_list[i]);

    })
}

let containerList = document.getElementsByClassName("container");
function addToMenu(e){
    var new_e = e.textContent.replace("ADD", "");
    var li = document.createElement('li');
    var textNode = document.createTextNode(new_e);
    var menu = document.querySelector('.sous_menu');
    li.classList.toggle('added');
    li.appendChild(textNode);
    menu.appendChild(li);
    

}
