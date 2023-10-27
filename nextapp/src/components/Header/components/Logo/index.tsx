import CloudTwoToneIcon from '@mui/icons-material/CloudTwoTone';
import { Box, Stack } from '@mui/material';
import style from './style.module.css';

export function Logo() {
  return (
    <Stack
      direction='row'
      alignItems='center'
      spacing={2}
    >
      <CloudTwoToneIcon className={style.mainLogo}/>
      <Box className={style.mainLogoText}>
        WeatherApp
      </Box>
    </Stack>
  )
}