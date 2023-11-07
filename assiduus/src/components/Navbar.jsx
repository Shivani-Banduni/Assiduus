import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '@mui/material/Avatar';
import Sidebar from './Sidebar';

const theme = createTheme({
  palette: {
    background: {
      default: '#fff', // Set background color to white
    },
  },
});

const Navbar = () => {
  return (
    

<ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" style={{ background: '#fff' }}>
        <Toolbar>
          

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            {/* Search Bar */}

            <InputBase
            placeholder="Search..."
            style={{
              background: '#f2f2f2', // Light grey background color
              borderRadius: '5px',
              padding: '10px',
              paddingLeft: '40px',
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ color: '#888888' }} /> {/* Grey search icon */}
              </InputAdornment>
            }
          />

            {/* Bell Icon */}
            <IconButton aria-label="notifications icon" sx={{ p: '10px' }}>
              <NotificationsIcon />
            </IconButton>

            {/* Profile Photo */}
            <IconButton aria-label="profile photo" sx={{ p: '10px' }}>
              <Avatar alt="User" src="/path/to/profile-photo.jpg" />
            </IconButton>

            {/* Drop Down Arrow */}
            <IconButton aria-label="drop down arrow" sx={{ p: '10px' }}>
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* Rest of your application content */}


      

    </ThemeProvider>
    
  );
};

export default Navbar;
