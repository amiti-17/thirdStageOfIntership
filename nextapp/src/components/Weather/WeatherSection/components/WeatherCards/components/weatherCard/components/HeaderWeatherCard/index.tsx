import { Box, Button } from "@mui/material";
import { grey } from '@mui/material/colors';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getUrlForIcon } from "functions/getUrlForIcon";
import { getDate } from "functions/timeAndDate/getDate";
import { getTime } from "functions/timeAndDate/getTime";
import { digits } from "config/system/constants/digits";
import { useMutation } from "@apollo/client";
import { locations } from "Apollo/queries/locations";
import { useContext } from "react";
import { UserContext } from "Contexts/userContext";

export function HeaderWeatherCard({ name, currentDt, icon, onDeleteHandler }: { name: string, currentDt: number, icon: string, onDeleteHandler: () => {} }) {

  const currentTime = new Date(currentDt * digits[1000]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
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
      {name} ({getDate(currentTime)} {getTime(currentTime)})
      <Button
        sx={{
          m: '3px',
          p: '2px',
          minWidth: 'fit-content',
          color: 'black',
        }}
        onClick={(e) => {
          onDeleteHandler()
        }}
      >
        <DeleteOutlineIcon />
      </Button>
      
    </Box>
  )
}