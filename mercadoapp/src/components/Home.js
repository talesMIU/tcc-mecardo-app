import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MaterialLink from '@mui/material/Link';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MaterialLink component={Link} to="/" color="inherit" sx={{ textDecoration: 'none' }}>
        Tales Souza Miura
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Agora cards tem id, title e description
const cards = [
  { id: 1, title: 'Resumo', description: 'Descrição do card 1' },
  { id: 2, title: 'Card 2', description: 'Descrição do card 2' },
  { id: 3, title: 'Card 3', description: 'Descrição do card 3' },
  { id: 4, title: 'Card 4', description: 'Descrição do card 4' },
  { id: 5, title: 'Card 5', description: 'Descrição do card 5' },
  { id: 6, title: 'Card 6', description: 'Descrição do card 6' },
  { id: 7, title: 'Card 7', description: 'Descrição do card 7' },
  { id: 8, title: 'Card 8', description: 'Descrição do card 8' },
  { id: 9, title: 'Card 9', description: 'Descrição do card 9' },
];

export default function Home() {
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <Box sx={{ backgroundColor: 'background.paper', pt: 8, pb: 6 }}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              Micro Frontend no Mercado Financeiro
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Segurança e Boas Práticas.
            </Typography>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box component="footer" sx={{ backgroundColor: 'background.paper', py: 6 }}>
        <Typography variant="h6" align="center" gutterBottom>
          USP - ESALQ
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
           MBA - Engenharia de Sofware
        </Typography>
        <Copyright />
      </Box>
    </React.Fragment>
  );
}
