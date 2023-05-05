import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { logOut } from '../Redux/UserSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  
  export default function EnableColorOnDarkAppBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
   
    
   
    return (
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        
        <ThemeProvider theme={darkTheme} position="static" color="primary" enableColorOnDark>
          
            
          
        <Toolbar style={{backgroundColor:"black"}}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
       
        <Typography style={{color:"white"}}  variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Rent Cars
        
        </Typography>

        <Button as={Link} to={'/addCar'}>
        Add Car
      </Button>
        <Button style={{color:"white"}} onClick={()=> {dispatch(logOut())
                                   navigate('/')
            }} variant='light'>LogOut</Button>

        

      </Toolbar>
          
        </ThemeProvider>
      </Stack>
    );
  }
  
