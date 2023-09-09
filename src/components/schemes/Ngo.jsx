import React, { useState } from 'react';
import items from '../../ngodata'; 
import './Ngo.css'; 

function Ngo() {
  const [filter, setFilter] = useState(''); 
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = items.filter(item =>
    filter === '' || item.state === filter
  );

  const handleItemClick = item => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>Filter Items by State</h1>
      <select onChange={e => setFilter(e.target.value)} value={filter}>
        <option value="">All</option>
        <option value="State A">State A</option>
        <option value="State B">State B</option>
        {/* Add more options for different states */}
      </select>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id} onClick={() => handleItemClick(item)}>
            {item.name} - {item.state}
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div>
          <h2>{selectedItem.name}</h2>
          <p>State: {selectedItem.state}</p>
          <p>{selectedItem.content}</p>
        </div>
      )}
    </div>
  );
}

export default Ngo;
