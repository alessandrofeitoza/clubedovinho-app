import "./styles.css";
import { Container, Typography, Box, Divider, Chip, Grid, List, ListItem, ListItemText } from '@mui/material';


export default function Johnatan() {
    return (
        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h3" fontWeight="bold">
              Johnatan Dantas
            </Typography>
            <Typography variant="h6" color="text.secondary">
                Staff engineer
            </Typography>
            <Typography variant="body1" mt={1}>
              dantas.johnatan@gmail.com • (99) 99999-9999 • Fortaleza/CE
            </Typography>
          </Box>
    
          <Divider textAlign="left"><Chip label="Sobre" /></Divider>
          <Typography mt={2} mb={4}>
            Desenvolvedor especialista java com mais de 10 anos de experiência, focado em entregar soluções eficientes e gerar impacto positivo através da tecnologia. Apaixonado por estudar, praticar esportes e viajar.
          </Typography>
    
          <Divider textAlign="left"><Chip label="Experiência" /></Divider>
          <Box mt={2} mb={4}>
            <Typography variant="subtitle1" fontWeight="bold">
                Staff engineer — Ipiranga (2021 - atual)
            </Typography>
            <Typography variant="body2">
              Desenvolvimento de microserviços com Spring Boot, integrações com APIs, mensageria (RabbitMQ) e sistemas legados.
            </Typography>
          </Box>
    
          <Divider textAlign="left"><Chip label="Tecnologias" /></Divider>
          <Grid container spacing={1} mt={2} mb={4}>
            {['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
              <Grid item key={tech}>
                <Chip label={tech} />
              </Grid>
            ))}
          </Grid>
    
          <Divider textAlign="left"><Chip label="Formação" /></Divider>
          <List>
            <ListItem disablePadding>
              <ListItemText
                primary="Sistema de Informação"
                secondary="Faculdade Lourenço Filho - Conclusão: 2017"
              />
            </ListItem>
          </List>
        </Container>
    )
}