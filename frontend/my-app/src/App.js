import React, {useState} from 'react';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Header from './pages/Header';
import Footer from './pages/Footer';
import SelectedComponent from './pages/SelectedComponent';


function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div>
      <Header onSelect={setSelectedComponent} />
      {!selectedComponent ? (
        <SelectedComponent onSelect={setSelectedComponent} />
      ) : selectedComponent === 'orders' ? (
        <Orders />
      ) : (
        <Customers />
      )}
      <Footer />
    </div>
  );
}

export default App;
