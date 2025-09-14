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
  { id: 1, title: 'Resumo', description: `Este trabalho investiga a adoção da arquitetura de micro-frontends em organizações do setor financeiro, com foco nas questões de segurança e nas boas práticas associadas a essa abordagem. Inspirada nos princípios dos microsserviços, a arquitetura de micro-frontends permite a divisão da interface de usuário em módulos independentes, promovendo modularidade, escalabilidade e maior autonomia entre equipes de desenvolvimento. Entretanto, em ambientes financeiros, caracterizados por elevados requisitos de segurança, compliance e integração com sistemas legados, surgem desafios adicionais que demandam atenção especial.
A pesquisa adota como metodologia a revisão bibliográfica de artigos científicos e livros que tratam de micro-frontends, segurança em arquiteturas distribuídas e padrões de engenharia de software. Complementarmente, realiza-se um estudo de caso prático com a implementação de um projeto desenvolvido pelo autor, no qual são analisados os aspectos de segurança aplicados e as boas práticas utilizadas durante o processo.
Os resultados esperados incluem a sistematização de práticas recomendadas para garantir a proteção de dados e a conformidade regulatória, bem como a identificação de estratégias arquiteturais que favoreçam a resiliência e a manutenção em ambientes críticos. Dessa forma, este estudo contribui para ampliar a compreensão sobre o uso seguro de micro-frontends em setores altamente regulados, oferecendo subsídios teóricos e práticos para profissionais e pesquisadores da área.
` },
  { id: 2, title: 'Abstract', description: `This study investigates the adoption of micro-frontend architecture in financial sector organizations, focusing on security issues and best practices associated with this approach. Inspired by the principles of microservices, micro-frontend architecture enables the division of the user interface into independent modules, promoting modularity, scalability, and greater autonomy among development teams. However, in financial environments, characterized by high security requirements, compliance demands, and integration with legacy systems, additional challenges arise that require special attention.
The research methodology is based on a literature review of scientific articles and books addressing micro-frontends, security in distributed architectures, and software engineering patterns. Additionally, a practical case study is conducted with a project developed by the author, analyzing the security aspects applied and the best practices adopted throughout the process.
The expected results include the systematization of recommended practices to ensure data protection and regulatory compliance, as well as the identification of architectural strategies that foster resilience and maintainability in critical environments. Thus, this study contributes to broadening the understanding of the secure use of micro-frontends in highly regulated sectors, providing both theoretical and practical insights for professionals and researchers in the field.`  },
  { id: 3, title: 'Palavras Chave', description: `micro-frontends; segurança de software; boas práticas; setor financeiro; arquitetura de sistemas.`  },  
  { id: 4, title: 'Key Words', description: 'micro-frontends; software security; best practices; financial sector; systems architecture.' },
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
