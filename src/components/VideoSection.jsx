import React from 'react';
import { Box, Typography } from '@mui/material';

const VideoSection = () => {
    return (
        <Box id="video" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 10, textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom style={{ color: '#8ff442' }} align="center">
                Está cansado de não ser valorizado no seu trabalho? Quer se destacar de verdade?
            </Typography>
            <Typography variant="h5" gutterBottom style={{ color: '#0c0d1b' }} align="center">
                Assista ao vídeo abaixo e descubra o método transformador para criar uma Marca Pessoal Imbatível!
            </Typography>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoid" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Box>
    );
};

export default VideoSection;
