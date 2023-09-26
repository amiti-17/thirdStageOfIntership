import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Button }from '@mui/material';

export default function Copyright(props: {sx: {mt: number, mb: number}}) {

  const [ currentUrl, setCurrentUrl ] = React.useState<string>('');

  React.useEffect(function() {
    const currentUrlRaw = window.location.href + '/';
    const currentUrl = currentUrlRaw.match(/(.*?\/\/.*?)\/.*/);
    const formattedCurrentUrl = Array.from(currentUrl || ['(this site)'])[1];
    setCurrentUrl(formattedCurrentUrl);
  }, []);

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Button
        href={currentUrl}
        LinkComponent={Link}
        sx={{textTransform: 'lowercase', m:'2'}}
      >
        {currentUrl}
        {' '}
      </Button>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}