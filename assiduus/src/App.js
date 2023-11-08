import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menupage from './components/Menupage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import WaveChart from './components/WaveChart';
import './App.css'

const App = () => {
  return (
    <div  className='main' >
      <Navbar />
      {/* <div  style={{ display: 'flex' , border:'2px solid green'}}> */}
        <Sidebar />
        {/* <div style={{ marginLeft: '250px', padding: '20px', border:'2px solid green' }}> */}
          <Routes>
            <Route path="/menupage" element={<Menupage />} />
            {/* Add more routes for other menu items */}
          </Routes>
        {/* </div> */}
      {/* </div> */}

      <WaveChart/>
    </div>
  );
};

export default App;
