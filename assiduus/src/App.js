import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menupage from './components/Menupage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '250px', padding: '20px' }}>
          <Routes>
            <Route path="/menupage" element={<Menupage />} />
            {/* Add more routes for other menu items */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
