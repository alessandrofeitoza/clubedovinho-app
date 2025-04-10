import "./styles.css";
import { Container, Typography, Box, Divider, Chip, List, ListItem, ListItemText } from '@mui/material';


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
          <List sx={{ mt: 2, mb: 4 }}>
                {[
                'Java',
                'Spring Boot',
                'RabbitMQ',
                'PostgreSQL',
                'Redis',
                'AWS',
                'Docker',
                ].map((tech) => (
                <ListItem key={tech} disablePadding>
                    <ListItemText primary={`• ${tech}`} />
                </ListItem>
                ))}
            </List>

    
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