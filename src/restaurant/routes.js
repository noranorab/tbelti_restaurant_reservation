const express = require('express');
const router = express.Router();
const controller = require('C:/Users/hp/Desktop/INE1_ASEDS/WebDev/tbelti_restaurant_reservation/src/restaurant/controller.js');

router.get('/welcome_page/:username', controller.getCustomers);
router.get('/:id', controller.getCustomersById);
router.post('/', controller.addCustomers);
router.delete('/:id', controller.deleteCustomer);
router.put('/:id', controller.updateCustomer);
router.post('/tableReservation', controller.addReservation);

module.exports = router;

