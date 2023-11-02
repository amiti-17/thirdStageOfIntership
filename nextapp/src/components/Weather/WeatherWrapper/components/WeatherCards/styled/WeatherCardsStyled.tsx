import { Box, styled } from "@mui/material";

export const WeatherCardsStyled = styled(Box)(({theme}) => ({
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'baseline',
  gap: '30px',
  // [theme.breakpoints.up("xs")]: {
  //   width: '90%'
  // },
}));