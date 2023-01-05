const pool = require('C:/Users/hp/Desktop/INE1_ASEDS/WebDev/tbelti_restaurant_reservation/src/restaurant/database.js');
const queries = require('C:/Users/hp/Desktop/INE1_ASEDS/WebDev/tbelti_restaurant_reservation/src/restaurant/queries.js');

const getCustomers = (req, res) => {
    pool.query(queries.getCustomers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCustomerByName = (req, res) => {
    const username = req.params.username;
    pool.query(queries.getCustomerByName, [username], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

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
    getCustomerByName,
};

