import * as React from 'react';
import Link from 'next/link';
import { CopyrightWrapper } from './styled/CopyrightWrapper';
import { FooterLocalHost } from './styled/FooterLocalHost';
import { strConstants } from 'config/system/constants/strConstants';
import { regexpObj } from 'config/system/regex';

export default function Copyright() {

  const [ currentUrl, setCurrentUrl ] = React.useState<string>('');

  React.useEffect(function() {
    const currentUrlRaw = window.location.href + strConstants.slash;
    const currentUrl = currentUrlRaw.match(regexpObj.regex.url);
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