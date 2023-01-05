const express = require('express');
const app = express();

//login form

var form = document.getElementById("myform");

form.addEventListener('Login', function(event) {
    event.preventDefault();
    var formData = new FormData(form);

    var username = formData.get('Username');
    var password = formData.get('Password');

    fetch('src/restaurant/server.js', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        console.log("good!")
    })
    
})
