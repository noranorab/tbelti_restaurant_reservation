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


for (let i = 0; i<wrappers.length; i++){
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
        })
    }
    if (wrappers[i].id == "wrapper3"){
        plus[i].addEventListener('click',function(){
            a3++;
            a3 = (a3 < 10)? "0" + a3 : a3;
            e3.innerText = a3;
        })
    }
    if (wrappers[i].id == "wrapper4"){
        plus[i].addEventListener('click',function(){
            a4++;
            a4 = (a4 < 10)? "0" + a4 : a4;
            e4.innerText = a4;
        })
    }
    if (wrappers[i].id == "wrapper5"){
        plus[i].addEventListener('click',function(){
            a5++;
            a5 = (a5 < 10)? "0" + a5 : a5;
            e5.innerText = a5;
        })
    }
}




/*
for (let i=0; i<plus.length;i++){
    plus[i].addEventListener('click', add(num[i]));
}

function add(e){        
    a++;
    a = (a < 10)? "0" + a : a;
    e.innerText = a;
}

for (let i=0; i<plus.length;i++){
    minus[i].addEventListener('click', function(){
        if (a > 1){
            a--;
            a = (a < 10)? "0" + a : a;
            num.innerText = a;
        }       
    });
}

*/
