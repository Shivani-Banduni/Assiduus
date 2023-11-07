import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ContactsIcon from '@mui/icons-material/Contacts';

const Sidebar = () => {
  const [clickedDivs, setClickedDivs] = useState([]);
  const[colr,setcolr]=React.useState("white")
  const navigate = useNavigate();

  const menuItems = [
    { icon: <DashboardIcon />, text: 'Dashboard', link: '/menupage', index: 0 },
    { icon: <AccountCircleIcon />, text: 'Account', link: '/account', index: 1 },
    { icon: <MonetizationOnIcon />, text: 'Payroll', link: '/payroll', index: 2 },
    { icon: <AssessmentIcon />, text: 'Reports', link: '/reports', index: 3 },
    { icon: <SupervisorAccountIcon />, text: 'Advisor', link: '/advisor', index: 4 },
    { icon: <ContactsIcon />, text: 'Contacts', link: '/contacts', index: 5 },
  ];








  const handleDivClick = (index) => {
    const updatedDivs = new Array(6).fill(false);
    updatedDivs[index] = true;
    setClickedDivs(updatedDivs);
    setcolr("green"); // Set the color to green for the clicked menu item
  console.log(updatedDivs,'updateddivs')
  console.log(clickedDivs,'clickeddivs')

    navigate(menuItems[index].link);
  };
  
  

  return (
    <Drawer variant="permanent">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Company Logo */}
        <img
          src="https://images.yourstory.com/cs/images/companies/Assiduus-1651134955756.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
          alt="Company Logo"
          style={{ marginRight: '10px', width: '50px', height: '50px' }}
        />
        <span style={{ fontWeight: 'bold', fontSize: 'large', marginTop: '10px', color: 'black' }}>ASSIDUUS</span>
      </div>
      <List style={{ marginTop: '6vh' }}>
        {menuItems.map((item) => (
          <Link to={item.link} key={item.index} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem
              onClick={() => handleDivClick(item.index)}
              style={{ background: clickedDivs[item.index] ? colr : 'white',  marginTop: '10px' }}
              button
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

// const handleDivClick = (index) => {
//     const updatedDivs = [...clickedDivs];
//     updatedDivs[index] = !updatedDivs[index];
//     setClickedDivs(updatedDivs);
//     navigate(menuItems[index].link);
// if(updatedDivs[index]){
//     setcolr("green")
// }
   
//     console.log(updatedDivs)
//   };


// clickedDivs[item.index]  ? 'green' : 'white'