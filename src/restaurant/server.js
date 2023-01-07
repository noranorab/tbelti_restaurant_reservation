
const express = require('express');
//const restaurantRoutes = require('C:/Users/hp/Desktop/INE1_ASEDS/WebDev/tbelti_restaurant_reservation/src/restaurant/routes');
//const controller = require('C:/Users/hp/Desktop/INE1_ASEDS/WebDev/tbelti_restaurant_reservation/src/restaurant/controller.js');
//const queries = require('C:/Users/hp/Desktop/INE1_ASEDS/WebDev/tbelti_restaurant_reservation/src/restaurant/queries.js');
const pool = require('C:/Users/hp/Desktop/INE1_ASEDS/WebDev/tbelti_restaurant_reservation/src/restaurant/database.js');
const port = 3000;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { DatabaseError } = require('pg');




const users = []
const staticPath = path.join(__dirname, "../../public");
let idCustomer = 0;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(staticPath));

app.use(express.json());


app.post("/welcome_page", (req, res) => {
    //const formData = req.body;
    const query = "select * from customers where username = $1";
    const value1 = [req.body.username];
        pool.query(query, value1, (error, results) => {
            if (error) throw error;
            const user = results.rows[0];  
            idCustomer = user.customer_id_pkey;    
            if (user && user.username == req.body.username){
                if (user.password == req.body.password){
                    console.log("login successful");
                    res.redirect('/tableReservation');
                }
            }else{
                res.redirect('/welcome_page');
            }
        });
              
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/tableReservation", (req, res) => {
    const days = req.body.days;
    const hours = req.body.hours;
    const phone_number = req.body.phone_number;
    const nbrPersonnes = req.body.number;
    const fullName = req.body.full_name;
    let addition = 0;
    const query = "insert into reservation (day, nbr_personnes, addition, id_customer_fkey, hour) values($1, $2, $3, $4, $5)";
    pool.query(query, [days, nbrPersonnes, addition, idCustomer, hours], (error, results) => {
        if (error) throw error;
        res.redirect('/tableReservation/menu');
    })       
})

app.post('/tableReservation/menu/burger', (req, res) => {
  const value = req.body.value;
  //res.json({ value });
  app.get('/tableReservation/menu/receipe', (req, res) => {
    res.render('receipe.ejs');
    //res.render("receipe.ejs");
    })
});




app.get('/welcome_page', (req, res) => {
    res.render("welcome_page.ejs");
});


app.get('/tableReservation', (req, res) => {
    res.render("tableReservation.ejs");
});

app.get('/tableReservation/menu', (req, res) => {
    res.render("menu.ejs");
});

app.get('/tableReservation/menu/burger', (req, res) => {
    res.render("burger_builder.ejs");
})
/*
app.get('/tableReservation/menu/receipe', (req, res) => {
    res.render('receipe.ejs');
    //res.render("receipe.ejs");
})
*/
//app.use('/welcome_page', restaurantRoutes);

app.listen(port, () => {
    console.log("Server is listening to port" + port);
});






