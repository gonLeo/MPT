-- Insert records into authors table
INSERT INTO authors (name) VALUES
('Dr. Seuss'),
('J.K. Rowling'),
('Roald Dahl'),
('Maurice Sendak'),
('A.A. Milne'),
('Beatrix Potter'),
('C.S. Lewis'),
('E.B. White'),
('Shel Silverstein'),
('L. Frank Baum');

-- Insert records into books table
INSERT INTO books (title, author_id, price) VALUES
('The Cat in the Hat', 1, 10.99),
('Harry Potter and the Sorcerer''s Stone', 2, 12.99),
('Charlie and the Chocolate Factory', 3, 8.99),
('Where the Wild Things Are', 4, 9.99),
('Winnie-the-Pooh', 5, 11.99),
('The Tale of Peter Rabbit', 6, 7.99),
('The Lion, the Witch and the Wardrobe', 7, 10.49),
('Charlotte''s Web', 8, 9.49),
('The Giving Tree', 9, 10.99),
('The Wonderful Wizard of Oz', 10, 8.49);

-- Insert records into customers table
INSERT INTO customers (name, email, address) VALUES
('Alice Johnson', 'alice.johnson@example.com', '123 Maple St.'),
('Bob Smith', 'bob.smith@example.com', '456 Oak St.'),
('Charlie Brown', 'charlie.brown@example.com', '789 Pine St.'),
('David Wilson', 'david.wilson@example.com', '101 Birch St.'),
('Eva Green', 'eva.green@example.com', '202 Cedar St.'),
('Fiona White', 'fiona.white@example.com', '303 Spruce St.'),
('George Black', 'george.black@example.com', '404 Elm St.'),
('Hannah Blue', 'hannah.blue@example.com', '505 Fir St.'),
('Ian Gray', 'ian.gray@example.com', '606 Willow St.'),
('Jane Red', 'jane.red@example.com', '707 Aspen St.');

-- Insert records into orders table
INSERT INTO orders (customer_id, order_date) VALUES
(1, '2024-05-01'),
(2, '2024-05-02'),
(3, '2024-05-03'),
(4, '2024-05-04'),
(5, '2024-05-05'),
(6, '2024-05-06'),
(7, '2024-05-07'),
(8, '2024-05-08'),
(9, '2024-05-09'),
(10, '2024-05-10');

-- Insert records into order_details table
INSERT INTO order_details (order_id, book_id, quantity) VALUES
(1, 1, 2),
(1, 2, 1),
(2, 3, 3),
(2, 4, 1),
(3, 5, 2),
(3, 6, 1),
(4, 7, 1),
(4, 8, 2),
(5, 9, 1),
(5, 10, 2),
(6, 1, 1),
(6, 2, 2),
(7, 3, 1),
(7, 4, 1),
(8, 5, 3),
(8, 6, 1),
(9, 7, 2),
(9, 8, 1),
(10, 9, 1),
(10, 10, 1);
