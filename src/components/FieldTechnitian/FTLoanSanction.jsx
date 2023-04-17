import React, {useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const accessories = [
  { name: "Presticide", price: 50 },
  { name: "Hand Gloves", price: 20 },
  { name: "Black Polythene", price: 10 },
  { name: "Aktara", price: 100 },
  { name: "Cruiser", price: 75 },
  { name: "White Polythene", price: 15 },
  { name: "Urea", price: 80 },
  { name: "SOP", price: 120 },
  { name: "Sucker Plucker", price: 40 },
  { name: "Tobacco Seed", price: 60 }
];

const FTLoanSaction = () => {
  const [items, setItems] = useState([{ accessory: "", unit: 1 }]);

  const addItem = () => {
    setItems([...items, { accessory: "", unit: 1 }]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleAccessoryChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].accessory = value;
    setItems(updatedItems);
  };

  const handleUnitChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].unit = value;
    setItems(updatedItems);
  };

  const total = items.reduce((acc, item) => {
    const { accessory, unit } = item;
    const price = accessories.find((a) => a.name === accessory)?.price || 0;
    return acc + price * unit;
  }, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const formSubmit = (totalLoan)=>{
    console.log(totalLoan)
    const data = { items, total };
    console.log(data.items);
    setItems([{ accessory: "", unit: 1 }]);
    
  }

  return (
    <div className="form-container fadeInUp">
      <h1>Loan Sanction</h1>
      <form onSubmit={handleSubmit}>
        {items.map((item, index) => (
          <div key={index}>
            <select
              value={item.accessory}
              onChange={(e) => handleAccessoryChange(index, e.target.value)}
            >
              <option value="">Select Accessory</option>
              {accessories.map((accessory) => (
                <option key={accessory.name} value={accessory.name}>
                  {accessory.name} ({accessory.price} Tk.)
                </option>
              ))}
            </select>
            <input className="input_number"
              type="number"
              min="1"
              step="1"
              value={item.unit}
              onChange={(e) => handleUnitChange(index, parseInt(e.target.value))}
            />
            <button onClick={() => removeItem(index)}>Remove</button>
          </div>
        ))}


        <button onClick={addItem}><FaPlus /></button>
        <p>Total: {total} Tk.</p>
        <button type="submit" onClick={()=>formSubmit(total)}>Submit</button>
      </form>
    </div>
  );
};

export default FTLoanSaction;
