import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import logo from '../assets/mpi_logo.jpeg';
const Hero = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh',width:'100%', backgroundColor: '#0c0d1b', color: '#8ff442' }}>
            <img src={logo} alt="Logo MPI" style={{ maxWidth: '500px', marginBottom: '20px' }} />
            <Typography variant="h2" gutterBottom align="center">
                Descubra o método inovador que vai transformar sua carreira!
            </Typography>
            <Typography variant="h4" gutterBottom align="center">
                Construa uma Marca Pessoal Imbatível. Em apenas 6 Módulos, seja qual for a sua profissão ou nível de experiência.
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: '#8ff442', color: '#0c0d1b', mt: 3 }} href="#video">
                Assista ao vídeo abaixo
            </Button>
        </Box>
    );
};

export default Hero;
