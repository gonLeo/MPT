const pool = require('./pool');

const ordersInfo = async () => {
    const { rows } = await pool.query(queryOrdersInfo());
    return rows;
};

const customersInfo = async () => {
    const { rows } = await pool.query(queryCustomersInfo());
    return rows;
};

function queryOrdersInfo() {
    const query = `
        SELECT o.order_id, b.title AS book_title, a.name AS author, b.price, od.quantity
        FROM orders o
        JOIN order_details od ON o.order_id = od.order_id
        JOIN books b ON od.book_id = b.book_id
        JOIN authors a ON b.author_id = a.author_id;
    `;

    return query;
}

function queryCustomersInfo() {
    const queryCustomersInfo = `
        SELECT name, email, address
        FROM customers;
    `;
  
  return queryCustomersInfo;
  
}

module.exports = {
    ordersInfo,
    customersInfo
};
