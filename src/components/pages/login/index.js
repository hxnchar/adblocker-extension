import { Container, Box,
  Avatar, Typography,
  Grid, TextField, Button, Link } from '@mui/material';
import axios from 'axios';

export default function Login() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const tokens = await axios.post(`${process.env.REACT_APP_SERVER_LINK}/register`, {
      'email': data.get('email'),
      'password': data.get('password'),
    });

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
            <Link href="/register" variant="body2">
              New here? Sign up
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}