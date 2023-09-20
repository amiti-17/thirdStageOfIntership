import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Link from '@mui/material/Link';

export default function Copyright(props: {sx: {mt: number, mb: number}}) {

  const [ currentUrl, setCurrentUrl ] = React.useState<string>('');

  React.useEffect(function() {
    const currentUrl = window.location.href.match(/(.*?)(?=\/?$)/);
    const formattedCurrentUrl = Array.from(currentUrl || ['(this site)'])[1];
    setCurrentUrl(formattedCurrentUrl);
  }, []);

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        {currentUrl}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}