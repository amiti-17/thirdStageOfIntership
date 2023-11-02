import { Stack } from '@mui/material';
import { CloudTwoToneIcon } from './styled/CloudTwoToneIcon';
import { LogoText } from './styled/LogoText';

export function Logo() {
  return (
    <Stack
      direction='row'
      alignItems='center'
      spacing={2}
    >
      <CloudTwoToneIcon />
      <LogoText>
        WeatherApp
      </LogoText>
    </Stack>
  )
}