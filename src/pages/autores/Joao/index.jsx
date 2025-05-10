import "./styles.scss";

import * as React from 'react';
import { Avatar, Typography, Stack, IconButton, Tooltip, Box, Paper } from '@mui/material';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';
import { SiJavascript, SiReact, SiNodedotjs, SiTypescript, SiHtml5, SiCss3 } from "react-icons/si";

import minhafoto from "./img/foto.jpg";

export default function Joao() {
  return (
    <div className="page-Joao">

      <Box className="container">
        <Box className="profile-card">
          {/* Header */}
          <Stack alignItems="center" spacing={2}>
          <Avatar src={minhafoto} alt="João" sx={{ width: 120, height: 120 }} />
          <Typography variant="h4" className="name">João Antonio</Typography>
            <Typography variant="body1" textAlign="center">
              Desenvolvedor full stack apaixonado por resolver problemas com código. Experiência com aplicações web modernas, APIs REST, design responsivo e boas práticas de programação.
            </Typography>
          </Stack>
  
          {/* Skills */}
          <Box className="skills">
            <Typography variant="h5" gutterBottom className="section-title">Skills</Typography>
            <Stack direction="row" spacing={2}>
              <Tooltip title="JavaScript"><Box component="span" className="icon"><SiJavascript size={32} /></Box></Tooltip>
              <Tooltip title="React"><Box component="span" className="icon"><SiReact size={32} /></Box></Tooltip>
              <Tooltip title="Node.js"><Box component="span" className="icon"><SiNodedotjs size={32} /></Box></Tooltip>
              <Tooltip title="TypeScript"><Box component="span" className="icon"><SiTypescript size={32} /></Box></Tooltip>
              <Tooltip title="HTML5"><Box component="span" className="icon"><SiHtml5 size={32} /></Box></Tooltip>
              <Tooltip title="CSS3"><Box component="span" className="icon"><SiCss3 size={32} /></Box></Tooltip>
            </Stack>
          </Box>
  
          {/* Experiências */}
          <Box className="experiences">
            <Typography variant="h5" gutterBottom className="section-title">Experiências</Typography>
            <Paper className="experience-item">
              <Typography variant="h6" className="experience-title">Jornada na Robótica</Typography>
              <Typography variant="body2">
                Desde jovem, participei de equipes de robótica, aprendendo sobre mecânica, programação embarcada e trabalho em equipe. Contribuí para projetos premiados em competições regionais e nacionais. Essa experiência me ensinou a importância da inovação, disciplina e resolução de problemas em ambientes de alta pressão.
              </Typography>
            </Paper>
            <Paper className="experience-item">
              <Typography variant="h6" className="experience-title">Desenvolvimento Pessoal</Typography>
              <Typography variant="body2">
                Ao longo da minha trajetória, busquei constantemente aprimorar meus conhecimentos em tecnologia, explorando áreas como desenvolvimento web, automação e inteligência artificial. Participei de hackathons, mentorias e cursos práticos para aplicar conhecimentos em situações reais.
              </Typography>
            </Paper>
          </Box>
  
          {/* Prêmios */}
          <Box className="awards">
            <Typography variant="h5" gutterBottom className="section-title">Prêmios</Typography>
            <ul>
              <li><Typography variant="body2">🏆 1º Champions Awards Etapa Regional First Lego League (2021)</Typography></li>
              <li><Typography variant="body2">🏆1° IMAGERY AWARD First Robotics Competition (2025)</Typography></li>
            </ul>
          </Box>
  
          {/* Redes sociais */}
          <Stack direction="row" spacing={2} justifyContent="center" mt={5}>
            <IconButton className="social-icon" component="a" href="https://www.linkedin.com/in/joão-antonio-de-macedo-santos-a3676b310/" target="_blank">
              <LinkedIn />
            </IconButton>
            <IconButton className="social-icon" component="a" href="https://github.com/JoaoAntonio18" target="_blank">
              <GitHub />
            </IconButton>
            <IconButton className="social-icon" component="a" href="https://instagram.com/seuusuario" target="_blank">
              <Instagram />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </div>
    );
}
