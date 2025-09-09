import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/" style={{ textDecoration: 'none', color: '#0288d1' }}>
        Tales Souza Miura
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Container principal com gradiente inspirado no oceano
const StyledPaper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: '16px',
  background: 'linear-gradient(to bottom, #e0f7fa, #b2ebf2)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: '#0288d1',
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#0277bd',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0288d1',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#81d4fa',
    },
    '&:hover fieldset': {
      borderColor: '#29b6f6',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0288d1',
    },
  },
});

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  background: 'linear-gradient(45deg, #0288d1, #26c6da)',
  color: '#fff',
  fontWeight: 'bold',
  '&:hover': {
    background: 'linear-gradient(45deg, #0277bd, #00acc1)',
  },
  borderRadius: '8px',
}));

export default function SignUp({ onSignIn }) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <StyledPaper>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5" sx={{ color: '#01579b' }}>
          Sign Up
        </Typography>
        <StyledForm onSubmit={(e) => e.preventDefault()} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" sx={{ color: '#0288d1' }} />}
                label="Quero receber inspirações, promoções e atualizações sobre finanças por e-mail."
              />
            </Grid>
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            onClick={onSignIn}
          >
            Sign Up
          </SubmitButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/auth/signin" style={{ color: '#0288d1', textDecoration: 'none' }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </StyledForm>
      </StyledPaper>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
