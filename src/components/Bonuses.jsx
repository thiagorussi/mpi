import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Bonuses = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 10, backgroundColor: '#0c0d1b', color: '#8ff442', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Bônus Exclusivos
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{m:1}}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6">Bônus 1: eBook personalizado</Typography>
                    <Typography variant="body1">Acesse conteúdos exclusivos para acelerar seus resultados.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6">Bônus 2: Sessão de Mentoria ao Vivo</Typography>
                    <Typography variant="body1">Participe de sessões de mentoria com nossas especialistas.</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Bonuses;
