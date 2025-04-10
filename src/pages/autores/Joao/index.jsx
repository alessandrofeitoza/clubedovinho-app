import "./styles.css";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import minhafoto from "./img/foto.jpg"

export default function Joao() {
    return (
        <div>
        <Card class="card" sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            
            component="img"
            height="140"
            image= {minhafoto}
            alt="green iguana"
        />

        <CardContent>
          <Typography class="myname" gutterBottom variant="h5" component="div">
            João Antonio
          </Typography>
          <Typography class="desc" variant="body2" sx={{ color: 'text.secondary' }}>
            Desenvolvedor Web || Técnico em Mecatrônica
          </Typography>
        </CardContent>

      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>

        </div>
    )
}

