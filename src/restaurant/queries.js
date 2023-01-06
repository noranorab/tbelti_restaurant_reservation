//const getCustomers = "select * from customers";
const getCustomerByName = "select * from customers where username = $1";
const getCustomersById = "select * from customers where customer_id_pkey = $1";
const addCustomers = "insert into customers values($1, $2, $3, $4, $5)";
const deleteCustomer = "delete from customers where customer_id_pkey = $1";
const updateCustomer = "update customers set username = $1 where customer_id_pkey = $2";
const getAllReservation = "insert into reservation values($1, $2, $3, 0, $4, $5)";


module.exports = {
    //getCustomers,
    getCustomersById,
    addCustomers,
    deleteCustomer,
    updateCustomer,
    getCustomerByName,
    getAllReservation,
    
}