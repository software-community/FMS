const {Router} = require('express');
const { Cashfree } = require('cashfree-pg');
const exampleModel = require('../models/example');
// use the exampleModel or any other model as required
const hashPassword = require('../lib/example');
const {generateOrderId} = require('../lib/generateOrderId');
// use the hashPassword function or any other function as required

const router = Router();

router.get('/payment', async (req, res) => {
    try {
        
        let request = {
            "order_amount": 1.00,
            "order_currency": "INR",
            "order_id": await generateOrderId(),
            "customer_details": {
                "customer_id": "amanraj01",
                "customer_phone": "9999999999",
                "customer_name": "Aman Raj",
                "customer_email": "samplemail@gmail.com"
            },
        }

        Cashfree.PGCreateOrder("2023-08-01",request).then(response => {
            console.log(response.data);
            res.json(response.data);
        }).catch(error => {
            console.error(error.response.data.message);
        });

    } catch (error) {
        console.log('Error: ', error);
    }
})

router.post('/verify', async (req, res) => {
    try {

        let { orderId } = req.body;
        console.log(orderId);
        
        Cashfree.PGOrderFetchPayments("2023-08-01",orderId).then((response) => {
            console.log(response.data);
            res.json(response.data);
        }).catch(error => {
            console.error(error.response.data.message);
        })

    } catch (error) {
        console.log("Error", error);
    }
})

module.exports = router;