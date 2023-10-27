import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Button }from '@mui/material';
import style from './style.module.css';

export default function Copyright() {

  const [ currentUrl, setCurrentUrl ] = React.useState<string>('');

  React.useEffect(function() {
    const currentUrlRaw = window.location.href + '/';
    const currentUrl = currentUrlRaw.match(/(.*?\/\/.*?)\/.*/);
    const formattedCurrentUrl = Array.from(currentUrl || ['(this site)'])[1];
    setCurrentUrl(formattedCurrentUrl);
  }, []);

  return (
    <Typography variant="body2" color="text.secondary" className={style.footer}>
      {'Copyright © '}
      <Button
        href={currentUrl}
        LinkComponent={Link}
        className={style.footerLocalHost}
      >
        {currentUrl}
        {' '}
      </Button>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}