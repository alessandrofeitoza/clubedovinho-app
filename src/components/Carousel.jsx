import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';

const data = [
  {
    src: 'https://raw.githubusercontent.com/Thiagoarruda09/SPA-SPOTIFY/main/src/assets/playlist/macbook-spotify.png.png',
    title: 'Clone spotify',
    description: 'SPA desenvolvida na imersao alura',
  },
  {
    src: '/public/dripstore.png',
    title: 'Drip store',
    description: 'ecomerce desenvolvida durante o curso geração tech',
  },
  {
    src: '/public/sicko.png',
    title: 'Portifolio sicko',
    description: 'Portifolio desenvolvido para o artista urbano sicko',
  },
];

export default function ListStackRatio() {
  return (
    <Card variant="outlined" sx={{ width: 300, p: 0 }}>
      <List sx={{ py: 'var(--ListDivider-gap)' }}>
        {data.map((item, index) => (
          <React.Fragment key={item.title}>
            <ListItem>
              <ListItemButton sx={{ gap: 2 }}>
                <AspectRatio sx={{ flexBasis: 120 }}>
                  <img
                    srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.src}?w=120&fit=crop&auto=format`}
                    alt={item.title}
                  />
                </AspectRatio>
                <ListItemContent>
                  <Typography sx={{ fontWeight: 'md' }}>{item.title}</Typography>
                  <Typography level="body-sm">{item.description}</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            {index !== data.length - 1 && <ListDivider />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}