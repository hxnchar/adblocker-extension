import { useState } from 'react';
import { Container, Box,
  Avatar, Typography,
  Grid, TextField, Button, Link } from '@mui/material';
import * as EmailValidator from 'email-validator';
import axios from 'axios';

export default function SignUp() {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [email, setEmail] = useState({ value: '', isValid: true });
  const [password, setPassword] = useState({ value: '', isValid: true });
  const [confirmPassword, setConfirmPassword] = useState({ value: '', isValid: true });

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (email.isValid && password.isValid && confirmPassword.isValid) {
      const tokens = await axios.post(`${process.env.REACT_APP_SERVER_LINK}/register`, {
        'email': email.value,
        'password': password.value,
      });
      console.log(tokens);
    }
    
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid item sx={{marginTop: 2}}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                error={!email.isValid}
                helperText={email.isValid ? "" : "Email is not valid"}
                onChange={e => setEmail({ value: e.target.value, isValid: EmailValidator.validate(e.target.value) })}
              />
            </Grid>
            <Grid item sx={{marginTop: 2}}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                error={!password.isValid}
                helperText={password.isValid ? "" : "Password must have minimum 8 characters, at least 1 letter and 1 number"}
                onChange={e => {
                  const newPassword = e.target.value;
                  setPassword({ value: newPassword, isValid: newPassword.match(passwordRegex) })
                  setConfirmPassword({ value: confirmPassword.value, isValid: confirmPassword.value === newPassword})
                }}
              />
            </Grid>
            <Grid item sx={{marginTop: 2}}>
              <TextField
                required
                fullWidth
                name="password"
                label="Confirm password"
                type="password"
                id="confirm-password"
                error={!confirmPassword.isValid}
                helperText={confirmPassword.isValid ? "" : "Password missmatch"}
                onChange={e => setConfirmPassword({ value: e.target.value, isValid: e.target.value === password.value })}
              />
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}