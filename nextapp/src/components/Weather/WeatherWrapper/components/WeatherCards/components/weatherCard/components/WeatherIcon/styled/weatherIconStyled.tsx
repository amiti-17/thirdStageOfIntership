import { Box, styled } from "@mui/material";

export const weatherIconStyled = (width) => styled(Box)({
  width,
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(0,36,35,0.0214679621848739) 0%, rgba(66,128,129,0.13351278011204482) 100%)',
});