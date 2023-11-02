import { Stack, styled } from "@mui/material";
import { blue } from "@mui/material/colors";

export const WeatherCardStyled = styled(Stack)(({ theme }) => ({
  minWidth: '295px',
  maxWidth: '4000px',
  borderRadius: '15px',
  backgroundColor: blue[50],
  padding: '15px 20px'
}))