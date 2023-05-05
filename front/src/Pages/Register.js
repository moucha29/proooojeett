import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { register, Registering } from '../Redux/UserSlice';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [newUser, setNewUser] = React.useState({})
  const HandleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={HandleChange}
                  autoComplete="given-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="fullname"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={HandleChange}
                  type={'String'}
                  required
                  fullWidth
                  id="DateOfBirth"
                  label="DateOfBirth"
                  name="DateOfBirth"
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl name='civility' fullWidth>
                <InputLabel id="civility">civility</InputLabel>
                <Select name='civility'
                  labelId="civility"
                  id="civility"

                  label="civility"
                  onChange={HandleChange}
                >
                  <MenuItem value={'Mrs'}>Mrs</MenuItem>
                  <MenuItem value={'melle'}>melle</MenuItem>
                  <MenuItem value={'Mme'}>Mme</MenuItem>
                </Select>
              </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={HandleChange}
                  required
                  fullWidth
                  name="country"
                  label="country"
                  
                  id="country"
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  onChange={HandleChange}
                  type='number'
                  required
                  fullWidth
                  id="Phone"
                  label="+216 00 000 000"
                  name="phone"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={HandleChange}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={HandleChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
             

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              onClick={(e) => {
                e.preventDefault()
                dispatch(Registering(newUser))
                navigate('/')             
              }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}