import  React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LoginLayout from '../components/loginPage/LoginLayout';
import LoginForm from '../components/loginPage/Form';
import { useQuery } from '@apollo/client';
import { locations } from '../Apollo/locations';

export default function Login() {
  
  // const { loading, error, data } = useQuery(locations.listAll, {variables: { input: 2 }});
  // console.log({loading}, {error}, data)

  // React.useEffect(() => {
    
  // }, [])

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <LoginLayout>
          <LoginForm />
          {/* {sha256('1234Qwer')} */}
        </LoginLayout>
      </Container>
  );
}
