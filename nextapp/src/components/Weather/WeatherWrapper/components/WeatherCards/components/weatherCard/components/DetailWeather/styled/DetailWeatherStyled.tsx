import { Box, styled } from "@mui/system";

export const DetailWeatherStyled = styled(Box)({
  minWidth: '345px',
  minHeight: '300px',
  width: '80%',
  padding: '10px',
  backgroundColor: 'rgba( 255, 255, 255, 0.9)',
  borderRadius: '15px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '600px',
  overflowY: 'auto',
})