import { getUrlForIcon } from "functions/getUrlForIcon";
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";
import { grey } from '@mui/material/colors';

export function HeaderWeatherCard({ name, currentDt, icon }: { name: string, currentDt: number, icon: string }) {
  const currentTime = new Date(currentDt * 1000);
  // console.log(currentDt);
  return (
    <Stack 
      direction='row' 
      alignItems='center' 
      gap='5px'
      sx={{
        fontSize: 'larger',
      }}
    >
      <Box 
        component='img' 
        src={getUrlForIcon(icon)} 
        width='50px' 
        loading="lazy" 
        title="weather icon"
        sx={{
          bgcolor: grey[300],
          borderRadius: '50%'
        }}
      />
      {name} ({currentTime.getDate()}:{currentTime.getMonth()}:{currentTime.getFullYear()} {currentTime.getHours()}:{currentTime.getMinutes()})
    </Stack>
  )
}