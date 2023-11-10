import React from 'react';
 // Import a separate CSS file for styling
import '../App.css'
const getRandomNumber = () => {
  return Math.floor(Math.random(5) * 78.677576) + 786.6454; // Generates random numbers between 0 and 100
};

const Datagrid = () => {
  const accountRows = ["Sales", "Advertising", "Inventory", "Entertainment", "Products"];
  const thisMonthData = accountRows.map(() => getRandomNumber());
  const ydData = accountRows.map(() => getRandomNumber());

  return (
    <>
      <div className='forthdiv1'><b>Account Watchlist</b></div><hr />
      <table className="data-table">
        <thead>
          <tr>
            <th>Account</th>
            <th>This Month</th>
            <th>YD</th>
          </tr>
        </thead>
        <tbody>
          {accountRows.map((row, index) => (
            <tr key={index}>
              <td className="row-header">{row}</td>
              <td className="data-cell">{thisMonthData[index]}</td>
              <td className="data-cell">{ydData[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Datagrid;
