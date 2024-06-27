import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const Testimonials = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 10, backgroundColor: '#0c0d1b', color: '#8ff442' }}>
            <Typography variant="h4" gutterBottom align="center">
                Veja o que nossos alunos dizem sobre a transformação que tiveram com nosso método!
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#8ff442', color: '#0c0d1b' }}>
                        <CardContent>
                            <Typography variant="body1">
                                "Este curso transformou minha carreira! - Aluno 1"
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#8ff442', color: '#0c0d1b' }}>
                        <CardContent>
                            <Typography variant="body1">
                                "Aprendi a me posicionar de forma autêntica e eficaz! - Aluno 2"
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Testimonials;
