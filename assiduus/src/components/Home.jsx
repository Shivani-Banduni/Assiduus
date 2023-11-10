import React from 'react';
// import Navbar from './components/Navbar';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import WaveChart from './WaveChart';
import Bargraph from './Bargraph';
import { width } from '@mui/system';
import '../App.css'
import CashFlow from './CashFlow';
import DataGrid from './Datagrid';

const Home = () => {
    return (
        <>
<div  className='main' >
      <Navbar />
        <Sidebar />
          

<div style={{border:'2px solid red', background:'rgb(246,247,249)',marginTop:'2.5vh'}}>
<div className='upper-div' style={{display:'flex', justifyContent:'space-around', height:'20%', border:'8px solid yellow'} }>

<div className='wavechart'>

<WaveChart/>
</div>
<div><Bargraph/></div>

</div>



<div style={{display:'flex',border:'8px solid green', justifyContent:'space-around'}}>
  <div style={{ marginLeft:'5%', alignItems:'center',display:'flex', justifyContent:'center',width:'50%'}}><CashFlow/></div>
  <div className='table'><DataGrid/></div>
</div>

</div>
      



    </div>
            
        </>
    );
}

export default Home;
