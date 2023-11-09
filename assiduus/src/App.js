import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menupage from './components/Menupage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import WaveChart from './components/WaveChart';
import './App.css'
import Bargraph from './components/Bargraph';
import { width } from '@mui/system';
import CashFlow from './components/CashFlow';

const App = () => {
  return (
    <div  className='main' >
      <Navbar />
        <Sidebar />
          <Routes>
            <Route path="/menupage" element={<Menupage />} />
          </Routes>

<div style={{border:'2px solid red'}}>
<div className='upper-div' style={{border:'2px solid blue', display:'flex', justifyContent:'space-around', height:'33%'} }>

<div className='wavechart'><WaveChart/></div>
<div><Bargraph/></div>

</div>



<div style={{display:'flex',border:'2px solid green', justifyContent:'space-between'}}>
  <div style={{border:'2px solid black', marginLeft:'15%', width:'34%'}}><CashFlow/></div>
  <div></div>
</div>

</div>
      



    </div>
  );
};

export default App;
