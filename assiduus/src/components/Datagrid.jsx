import React from 'react';

const getRandomNumber = () => {
  return Math.floor(Math.random(5) * 78.677576)+786.6454; // Generates random numbers between 0 and 100
};

const Datagrid = () => {
  const accountRows = ["Sales", "Advertising", "Inventory", "Entertainment", "Products"];
  const thisMonthData = accountRows.map(() => getRandomNumber());
  const ydData = accountRows.map(() => getRandomNumber());

  return (
      <>
      <div className='forthdiv1'><b> Account watchlist</b></div><hr/>
    <table className="data-table">
      <thead>
        <tr>
          <th>Account</th>
          <th>This Month</th>
          <th>YD</th>
        </tr><br/>
      </thead>
      <tbody>
        {accountRows.map((row, index) => (
          <tr key={index}>
            <td>{row}</td>
            <td>{thisMonthData[index]}</td>
            <td>{ydData[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default Datagrid;
