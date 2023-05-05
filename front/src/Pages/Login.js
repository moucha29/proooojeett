import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/UserSlice';
import { useNavigate } from 'react-router-dom';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

export default function Login() {
  const isAuth = localStorage.getItem('isAuth')
  React.useEffect(()=>{
    isAuth? navigate('/cars') : navigate('/')
  },[isAuth])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = React.useState({})
  const HandleChange= (e)=>{
    setUser({...user, [e.target.name] : e.target.value})
  }
  
  return (
    
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={HandleChange}
              // html input attribute
              name="email"
              type="email"
              placeholder="Exemple@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              onChange={HandleChange}
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
         <Button
          onClick={(e) => {
                e.preventDefault()
                dispatch(login(user))
              }}
              type="button"
              fullWidth
              
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>



          <Typography
            endDecorator={<Link href="/register">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

