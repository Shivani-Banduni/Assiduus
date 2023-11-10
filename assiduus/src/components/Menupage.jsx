import React from 'react';
import { Typography, Paper, Container, Button } from '@mui/material';
const Menupage = () => {

    return (
        <Container maxWidth="sm" style={{ marginTop: '50px' , background:'red'}}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="body1" paragraph>
            We appreciate your visit to our website. If you have any questions or need further assistance, feel free to contact us.
          </Typography>
          <Button variant="contained" color="primary">
            Contact Us
          </Button>
        </Paper>
      </Container>
    );
}

export default Menupage;
