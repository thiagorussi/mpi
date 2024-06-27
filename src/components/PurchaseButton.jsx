import React from 'react';
import { Button, Box } from '@mui/material';

const PurchaseButton = ({ text, href }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', m: 3 }}>
            <Button variant="contained" sx={{ backgroundColor: '#8ff442', color: '#0c0d1b', p:5 }} href={href}>
                {text}
            </Button>
        </Box>
    );
};

export default PurchaseButton;
