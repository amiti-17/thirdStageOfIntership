import { Box, styled } from "@mui/material";

export const OverLayStyled = styled(Box)({
  height: '100%',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 2,
})