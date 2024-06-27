import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 10, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom style={{ color: '#8ff442' }} align="center">
                Perguntas Frequentes
            </Typography>
            <Accordion sx={{ backgroundColor: '#0c0d1b', color: '#8ff442', width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#8ff442' }} />}>
                    <Typography>O que vou aprender no curso?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Você aprenderá a construir uma marca pessoal imbatível e autêntica através de estratégias comprovadas e práticas.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: '#0c0d1b', color: '#8ff442', width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#8ff442' }} />}>
                    <Typography>O que vou aprender no curso?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Você aprenderá a construir uma marca pessoal imbatível e autêntica através de estratégias comprovadas e práticas.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: '#0c0d1b', color: '#8ff442', width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#8ff442' }} />}>
                    <Typography>O que vou aprender no curso?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Você aprenderá a construir uma marca pessoal imbatível e autêntica através de estratégias comprovadas e práticas.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: '#0c0d1b', color: '#8ff442', width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#8ff442' }} />}>
                    <Typography>O que vou aprender no curso?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Você aprenderá a construir uma marca pessoal imbatível e autêntica através de estratégias comprovadas e práticas.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* Repetir para cada FAQ */}
        </Box>
    );
};

export default FAQ;
