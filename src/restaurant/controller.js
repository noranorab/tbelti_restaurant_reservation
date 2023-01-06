const pool = require('C:/Users/hp/Desktop/INE1_ASEDS/WebDev/tbelti_restaurant_reservation/src/restaurant/database.js');
const queries = require('C:/Users/hp/Desktop/INE1_ASEDS/WebDev/tbelti_restaurant_reservation/src/restaurant/queries.js');


let idCustomer = 0;

const getCustomers = (req, res) => {
    const value1 = [req.body.username];
    pool.query(queries.getCustomerByName, value1, (error, results) => {
        if (error) throw error;
            const user = results.rows[0];  
            idCustomer = user.customer_id_pkey;    
            if (user && user.username == req.body.username){
                if (user.password == req.body.password){
                    console.log("login successful");
                    res.redirect("/tableReservation");
                }
            }else{
                redirect('/welcome_page');
            }
        });
              
}

const addReservation = (req, res) => {
    const days = req.body.days;
    const hours = req.body.hours;
    const phone_number = req.body.phone_number;
    const nbrPersonnes = req.body.number;
    const fullName = req.body.full_name;
    let addition = 0;
    let i = 0;
    pool.query(queries.addAllReservation, [i++, days, nbrPersonnes, addition, idCustomer, hours], (error, results) => {
        if (error) throw error;
        res.status(200).send("reservation created successfully");
        console.log("reservation created");
    });

}


/*
const getCustomers = (req, res) => {
    pool.query(queries.getCustomers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
*/
/*
const getCustomerByName = (req, res) => {
    const username = req.params.username;
    pool.query(queries.getCustomerByName, [username], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
*/

const getCustomersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCustomersById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addCustomers = (req, res) => {
    const { customer_id_pkey, username, password, phone_number, full_name } = req.body;
    //check if username exists
    pool.query(queries.addCustomers, [customer_id_pkey, username, password, phone_number, full_name], (error, results) => {
        if (error) throw error;
        res.status(200).send("customer created successfully");
        console.log("customer created");
    });
};

const deleteCustomer = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCustomersById, [id], (error, results) => {
        pool.query(queries.deleteCustomer, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("customer deleted successfully");
        });
    });
        
};

const updateCustomer = (req, res) =>{
    const id = parseInt(req.params.id);
    const {username} = req.body;
    pool.query(queries.getCustomersById, [id], (error, results) => {
        pool.query(queries.updateCustomer, [username, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("customer updated successfully");
        });
    })
}

module.exports = {
    getCustomers,
    getCustomersById,
    addCustomers,
    deleteCustomer,
    updateCustomer,
    addReservation,
};

