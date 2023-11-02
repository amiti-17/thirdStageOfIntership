import { Stack } from '@mui/material';
import { CloudTwoToneIcon } from './components/CloudTwoToneIcon';
import { LogoText } from './components/LogoText';

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