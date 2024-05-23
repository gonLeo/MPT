--GET BOOKS OF AN AUTHOR
SELECT b.book_id, b.title, b.price
FROM books b
JOIN authors a ON b.author_id = a.author_id
WHERE a.name = 'Dr. Seuss';

-- TOTAL SALES
SELECT SUM(od.quantity) AS total_books_sold
FROM order_details od;

--TOTAL REVENUE
SELECT SUM(od.quantity * b.price) AS total_revenue
FROM order_details od
JOIN books b ON od.book_id = b.book_id;

-- TOP 5 BEST SELLER
SELECT b.title, SUM(od.quantity) AS total_quantity_sold
FROM order_details od
JOIN books b ON od.book_id = b.book_id
GROUP BY b.book_id, b.title
ORDER BY total_quantity_sold DESC
LIMIT 5;

-- TOP 5 CUSTOMERS
SELECT c.name, c.email, SUM(od.quantity * b.price) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_details od ON o.order_id = od.order_id
JOIN books b ON od.book_id = b.book_id
GROUP BY c.customer_id, c.name, c.email
ORDER BY total_spent DESC
LIMIT 5;
