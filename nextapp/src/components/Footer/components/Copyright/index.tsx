import * as React from 'react';
import Link from 'next/link';
import { CopyrightWrapper } from './styled/CopyrightWrapper';
import { FooterLocalHost } from './styled/FooterLocalHost';

export default function Copyright() {

  const [ currentUrl, setCurrentUrl ] = React.useState<string>('');

  React.useEffect(function() {
    const currentUrlRaw = window.location.href + '/';
    const currentUrl = currentUrlRaw.match(/(.*?\/\/.*?)\/.*/);
    const formattedCurrentUrl = Array.from(currentUrl || ['(this site)'])[1];
    setCurrentUrl(formattedCurrentUrl);
  }, []);

  return (
    <CopyrightWrapper variant="body2" color="text.secondary">
      {'Copyright © '}
      <FooterLocalHost
        href={currentUrl}
        LinkComponent={Link}
      >
        {currentUrl}
        {' '}
      </FooterLocalHost>
      {new Date().getFullYear()}
      {'.'}
    </CopyrightWrapper>
  );
}