import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableComponent from './TableComponent';
import Erro from './Erro';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/customers')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {        
        setError('Error fetching customers data');
      });
  }, []);

  const columns = React.useMemo(() => [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Address',
      accessor: 'address',
    }
  ], []);
  const h2Style = {
    margin: '20px',
  };

  return (
    <div>
      <h2 style={h2Style}>Customers Details</h2>
      {error ? (
        <Erro errorMessage={error} onClose={() => setError(null)} />
      ) : (
        <TableComponent columns={columns} data={customers} />
      )}
    </div>
  );
}

export default Customers;
