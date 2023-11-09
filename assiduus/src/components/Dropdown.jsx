import React, { useState } from 'react';
import { Box, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('January');
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const handleManageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMonthClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleManageMenuItemClick = (option) => {
    // Handle clicks for "Manage" options here
    console.log(`Clicked on: ${option}`);
    // Additional logic for handling "Manage" options can be added here
    setAnchorEl(null); // Close the menu after the option is clicked
  };
  

  const handleMonthMenuItemClick = (month) => {
    setSelectedMonth(month);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='main-div'>
      <div style={{border:'2px solid red', width:'170px'}}> 
        <b style={{marginLeft:'12px'}}>Checking account</b>
      </div>

      <div className='main-div1'>
        <Box display="flex" alignItems="center">
          <Typography  variant="body1">Manage</Typography>
          <IconButton
            aria-controls="manage-menu"
            aria-haspopup="true"
            onClick={handleManageClick}
            size="small"
          >
            <ExpandMoreIcon />
          </IconButton>
          <Menu
            id="manage-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleManageMenuItemClick('Option 1')}>Option 1</MenuItem>
            <MenuItem onClick={() => handleManageMenuItemClick('Option 2')}>Option 2</MenuItem>
            <MenuItem onClick={() => handleManageMenuItemClick('Option 3')}>Option 3</MenuItem>
          </Menu>
        </Box>


        <div >
        <Box  display="flex" alignItems="center">
          <Typography variant="body1">{selectedMonth}</Typography>
          <IconButton
            aria-controls="month-menu"
            aria-haspopup="true"
            onClick={handleMonthClick}
            size="small"
          >
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="month-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {months.map((month) => (
              <MenuItem key={month} onClick={() => handleMonthMenuItemClick(month)}>
                {month}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
