const express = require('express');
const cors = require('cors');

const { ordersInfo, customersInfo } = require('./db/querys');

const app = express();
const PORT = 8080;

// Set-up server to accept JSON
app.use(express.json());

// Using CORS to allow requests from any origin
app.use(cors());

//GET ORDERS DETAILS
app.get('/api/orders', async (req, res) => {
    try {
        const order_details = await ordersInfo();
        res.json(order_details);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error trying to get orders details');
    }
});

//GET CUSTOMERS DETAILS
app.get('/api/customers', async (req, res) => {
    try {
        const customers_details = await customersInfo();
        res.json(customers_details);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error trying to get customers details');
    }
});

// running server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});