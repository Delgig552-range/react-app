import React from 'react';

export default function InventoryTable({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Device Name</th>
          <th>Serial Number</th>
          <th>Assigned To</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={idx}>
            <td>{item.deviceName}</td>
            <td>{item.serialNumber}</td>
            <td>{item.owner}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
