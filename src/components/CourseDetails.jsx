import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const CourseDetails = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 10, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom style={{ color: '#8ff442' }} align="center">
                O que você vai aprender no curso
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{m:1}}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" style={{ color: '#8ff442' }}>Metodologia comprovada</Typography>
                    <Typography variant="body1" style={{ color: '#8ff442' }}>Aprenda com métodos que já ajudaram centenas de profissionais.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" style={{ color: '#8ff442' }}>Exemplos práticos</Typography>
                    <Typography variant="body1" style={{ color: '#8ff442' }}>Estudos de caso e exemplos reais para aplicar no seu dia a dia.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" style={{ color: '#8ff442' }}>Ferramentas e insights</Typography>
                    <Typography variant="body1" style={{ color: '#8ff442' }}>Acesse ferramentas exclusivas para acelerar seus resultados.</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CourseDetails;
