import { Box, styled } from "@mui/material";

export const tempWithIcon = (margin = '0') => styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: 'fit-content',
  gap: '10px',
  margin,
})