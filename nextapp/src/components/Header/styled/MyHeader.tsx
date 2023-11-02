import { Box, styled } from "@mui/material";

export const MyHeader = styled(Box)(({theme}) => ({
  color: theme.palette.primary.main,
  padding: '2px 4px 0px 4px',
  margin: '10px auto',
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1400px',
  minHeight: 'fit-content',
}));
