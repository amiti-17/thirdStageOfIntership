import  React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LoginLayout from '../src/components/loginPage/LoginLayout';
import LoginForm from '../src/components/loginPage/Form';
import { sha256 } from 'js-sha256';

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
          {sha256('1234Qwer')}
        </LoginLayout>
      </Container>
  );
}
