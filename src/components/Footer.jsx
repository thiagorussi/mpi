import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ width: '100%', py: 5, backgroundColor: '#0c0d1b', color: '#8ff442', textAlign: 'center' }}>
            <Typography variant="body2">© 2024 Marca Pessoal Imbatível. Todos os direitos reservados. CNPJ xxxxx</Typography>
            <Typography variant="body2">
                Os depoimentos contidos nesta página não podem ser considerados como garantias de ganhos ou resultados.
            </Typography>
        </Box>
    );
};

export default Footer;
