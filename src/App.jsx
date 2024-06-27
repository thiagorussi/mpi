import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Typography, Box, Button, Grid, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '@fontsource/poppins'; // Importa a fonte Poppins
import Logo from './assets/mpi_logo.jpeg'; // Importa a imagem do logo

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Montserrat, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#8ff442',
    },
    background: {
      default: '#0c0d1b',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: '#0c0d1b', color: '#fff', textAlign: 'center' }}>
          {/* Hero Section */}
          <Box sx={{ py: 10, width: '100%', backgroundColor: '#0c0d1b' }}>
            <img src={Logo} alt="Logo MPI" style={{ maxWidth: '400px', marginBottom: '20px', width: '100%', height: 'auto' }} />
            <Typography variant="h2" gutterBottom>
              Descubra o método inovador que vai transformar sua carreira!
            </Typography>
            <Typography variant="h4" gutterBottom>
              <b>Construa uma Marca Pessoal Imbatível.</b> Em apenas 6 Módulos, seja qual for a sua profissão ou nível de experiência.
            </Typography>
            <Button variant="contained" color="primary" sx={{ p: 3, borderRadius: 5, mt: 10, background: 'linear-gradient(90deg, #8ff442 0%, #00ff7f 100%)' }} href="#video">
              <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Assista ao vídeo abaixo</Typography>
            </Button>
          </Box>

          {/* Video Section */}
          <Box id="video" sx={{ py: 10 }}>
            <Typography variant="h3" gutterBottom sx={{ background: 'linear-gradient(90deg, #8ff442 0%, #00ff7f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Está cansado de não ser valorizado no seu trabalho? Quer se destacar de verdade?
            </Typography>
            <Typography variant="h5" gutterBottom style={{ color: '#fff' }}>
              Assista ao vídeo abaixo e descubra o método transformador para criar uma Marca Pessoal Imbatível!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Box sx={{ position: 'relative', width: { xs: '100%', md: '700px' }, height: { xs: 'auto', md: '500px' }, overflow: 'hidden', background: 'none', paddingBottom: { xs: '56.25%', md: 0 } }}>
                <iframe
                  src="https://fast.wistia.com/embed/medias/uuxugpwypj"
                  title="Wistia Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </Box>
            </Box>
          </Box>

          {/* Purchase Button */}
          <Button variant="contained" color="primary" sx={{ borderRadius: 5, mt: 3, p: 4, background: 'linear-gradient(90deg, #8ff442 0%, #00ff7f 100%)' }} href="#purchase">
            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Quero construir minha Marca Pessoal Imbatível agora!</Typography>
          </Button>

          {/* Testimonials */}
          <Box sx={{ py: 10, backgroundColor: '#0c0d1b' }}>
            <Typography variant="h4" gutterBottom>
              Veja o que nossos alunos dizem sobre a transformação que tiveram com nosso método!
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ m: 2, p: 2, background: 'linear-gradient(90deg, #8ff442 0%, #00ff7f 100%)', color: '#0c0d1b', borderRadius: 5 }}>
                  <Typography variant="body1">
                    "Este curso transformou minha carreira! - Aluno 1"
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ m: 2, p: 2, background: 'linear-gradient(90deg, #8ff442 0%, #00ff7f 100%)', color: '#0c0d1b', borderRadius: 5 }}>
                  <Typography variant="body1">
                    "Aprendi a me posicionar de forma autêntica e eficaz! - Aluno 2"
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Course Details */}
          <Box sx={{ py: 10 }}>
            <Typography variant="h4" gutterBottom sx={{ background: 'linear-gradient(90deg, #8ff442 0%, #00ff7f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 8 }}>
              O que você vai aprender no curso
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <CheckCircleIcon fontSize="large" style={{ color: '#8ff442' }} />
                <Typography variant="h6" style={{ color: '#fff' }}><b>Metodologia comprovada</b></Typography>
                <Typography variant="body1" style={{ color: '#fff' }}>Aprenda com métodos que já ajudaram centenas de profissionais.</Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <CheckCircleIcon fontSize="large" style={{ color: '#8ff442' }} />
                <Typography variant="h6" style={{ color: '#fff' }}><b>Exemplos práticos</b></Typography>
                <Typography variant="body1" style={{ color: '#fff' }}>Estudos de caso e exemplos reais para aplicar no seu dia a dia.</Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <CheckCircleIcon fontSize="large" style={{ color: '#8ff442' }} />
                <Typography variant="h6" style={{ color: '#fff' }}><b>Ferramentas e insights</b></Typography>
                <Typography variant="body1" style={{ color: '#fff' }}>Acesse ferramentas exclusivas para acelerar seus resultados.</Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Bonuses */}
          <Box sx={{ py: 10, backgroundColor: '#0c0d1b' }}>
            <Typography variant="h4" gutterBottom sx={{ background: 'linear-gradient(90deg, #8ff442 0%, #00ff7f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 8 }}>
              Bônus Exclusivos
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <CheckCircleIcon fontSize="large" style={{ color: '#8ff442' }} />
                <Typography variant="h6" style={{ color: '#fff' }}><b>Bônus 1: eBook personalizado</b></Typography>
                <Typography variant="body1" style={{ color: '#fff' }}>Acesse conteúdos exclusivos para acelerar seus resultados.</Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <CheckCircleIcon fontSize="large" style={{ color: '#8ff442' }} />
                <Typography variant="h6" style={{ color: '#fff' }}><b>Bônus 2: Sessão de Mentoria ao Vivo</b></Typography>
                <Typography variant="body1" style={{ color: '#fff' }}>Participe de sessões de mentoria com nossas especialistas.</Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Purchase Button */}
          <Button variant="contained" color="primary" sx={{ borderRadius: 5, mt: 3, p: 4, background: 'linear-gradient(90deg, #8ff442 0%, #00ff7f 100%)' }} href="#purchase">
            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Quero começar agora a minha jornada de Marca Pessoal Imbatível!</Typography>
          </Button>

          {/* FAQ */}
          <Box sx={{ py: 10 }}>
            <Typography variant="h4" gutterBottom sx={{ background: 'linear-gradient(90deg, #8ff442 0%, #00ff7f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Perguntas Frequentes
            </Typography>
            <Accordion sx={{ backgroundColor: '#0c0d1b', color: '#8ff442', width: '100%', mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#8ff442' }} />}>
                <Typography>O que vou aprender no curso?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Você aprenderá a construir uma marca pessoal imbatível e autêntica através de estratégias comprovadas e práticas.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: '#0c0d1b', color: '#8ff442', width: '100%', mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#8ff442' }} />}>
                <Typography>O que vou aprender no curso?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Você aprenderá a construir uma marca pessoal imbatível e autêntica através de estratégias comprovadas e práticas.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: '#0c0d1b', color: '#8ff442', width: '100%', mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#8ff442' }} />}>
                <Typography>O que vou aprender no curso?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Você aprenderá a construir uma marca pessoal imbatível e autêntica através de estratégias comprovadas e práticas.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: '#0c0d1b', color: '#8ff442', width: '100%', mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#8ff442' }} />}>
                <Typography>O que vou aprender no curso?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Você aprenderá a construir uma marca pessoal imbatível e autêntica através de estratégias comprovadas e práticas.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>

          {/* Footer */}
          <Box sx={{ width: '100%', py: 5, backgroundColor: '#0c0d1b', color: '#8ff442' }}>
            <Typography variant="body2">© 2024 Marca Pessoal Imbatível. Todos os direitos reservados. CNPJ xxxxx</Typography>
            <Typography variant="body2">
              Os depoimentos contidos nesta página não podem ser considerados como garantias de ganhos ou resultados.
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
