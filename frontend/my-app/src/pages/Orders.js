import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableComponent from './TableComponent';
import Erro from './Erro';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:8080/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {        
        setError('Error fetching orders data');
        setOrders([]);
      });
  }, []);

  const columns = React.useMemo(() => [
    {
      Header: 'Book Title',
      accessor: 'book_title',
    },
    {
      Header: 'Author',
      accessor: 'author',
    },
    {
      Header: 'Price',
      accessor: 'price',      
    },
    {
      Header: 'Quantity',
      accessor: 'quantity',
    }
  ], []);
  const h2Style = {
    margin: '20px',
  };

  return (
    <div>
      <h2 style={h2Style}>Orders Details</h2>     
      {error ? (
        <Erro errorMessage={error} onClose={() => setError(null)} />
      ) : (
        <TableComponent columns={columns} data={orders} />
      )}
    </div>
  );
}

export default Orders;
