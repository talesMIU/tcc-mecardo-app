import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      Tales Souza Miura {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
  },
  formControl: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  actions: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export default function Pagamento() {
  const classes = useStyles();

  // Mock
  const qtdItens = 3;
  const [cartao, setCartao] = React.useState('');

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h5" gutterBottom>
            Confirmação de Pagamento
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Quantidade de itens no carrinho: <b>{qtdItens}</b>
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome completo"
                defaultValue="Fulano da Silva"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Endereço"
                defaultValue="Rua Exemplo, 123"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Telefone"
                defaultValue="(11) 98765-4321"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="cartao-label">Cartão</InputLabel>
                <Select
                  labelId="cartao-label"
                  value={cartao}
                  onChange={(e) => setCartao(e.target.value)}
                  label="Cartão"
                >
                  <MenuItem value="visa">Visa</MenuItem>
                  <MenuItem value="master">Mastercard</MenuItem>
                  <MenuItem value="vr">VR</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <div className={classes.actions}>
            <Button variant="outlined" color="secondary">
              Cancelar
            </Button>
            <Button variant="contained" color="primary">
              Confirmar
            </Button>
          </div>
        </Paper>
      </Container>

      {/* Footer simples */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}
