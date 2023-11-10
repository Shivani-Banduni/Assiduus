import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menupage from './components/Menupage';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import WaveChart from './components/WaveChart';
import './App.css'
import Bargraph from './components/Bargraph';
import { width } from '@mui/system';
import CashFlow from './components/CashFlow';
import DataGrid from './components/Datagrid';

const App = () => {
  return (
    <>
      <Routes>
            <Route path="/menupage" element={<Menupage/>}/>
            <Route path="/" element={<Home/>}/>

          </Routes>
    </>
  );
};

export default App;


