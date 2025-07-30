import React, { useState } from 'react';

export default function InventoryForm({ onAddItem }) {
  const [deviceName, setDeviceName] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ deviceName, serialNumber, owner });
    setDeviceName(''); setSerialNumber(''); setOwner('');
  };

  return (
    <form onSubmit={handleSubmit} className="inventory-form">
      <input value={deviceName} onChange={e => setDeviceName(e.target.value)} placeholder="Device Name" required />
      <input value={serialNumber} onChange={e => setSerialNumber(e.target.value)} placeholder="Serial Number" required />
      <input value={owner} onChange={e => setOwner(e.target.value)} placeholder="Assigned To" required />
      <button type="submit">Add Item</button>
    </form>
  );
}
