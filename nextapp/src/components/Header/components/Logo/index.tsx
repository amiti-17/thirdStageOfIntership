import CloudTwoToneIcon from '@mui/icons-material/CloudTwoTone';
import { Box, Stack } from '@mui/material';
import { blue } from '@mui/material/colors';

export function Logo() {
  return (
    <Stack
      direction='row'
      alignItems='center'
      spacing={2}
    >
      <CloudTwoToneIcon sx={{color: blue[500], fontSize: 70}}/>
      <Box
        sx={{
          fontSize: 30,
          color: blue[500],
        }}
      >
        WeatherApp
        </Box>
    </Stack>
  )
}