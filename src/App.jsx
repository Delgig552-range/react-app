import React, { useState } from 'react';
import InventoryForm from './InventoryForm';
import InventoryTable from './InventoryTable';
import './index.css';

export default function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => setItems([...items, item]);

  return (
    <div className="container">
      <header><h1>IT Inventory System</h1></header>
      <InventoryForm onAddItem={addItem} />
      <InventoryTable items={items} />
    </div>
  );
}
