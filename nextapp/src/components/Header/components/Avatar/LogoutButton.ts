import styled from "@emotion/styled";
// import { styled } from "@mui/system";
import { blue, lightBlue } from "@mui/material/colors";

const LogoutButton = styled.button`
  fontSize: 15px;
  margin: 3px;
  padding: 3px 7px;
  color: blue[400];
  border: 0px;
  backgroundColor: ${blue[50]};
`;

// const LogoutButton = styled('div')({
//   fontSize: '15px',
//   margin: '3px',
//   padding: '3px 7px',
//   color: blue[400],
//   border: '0px',
//   backdropColor: lightBlue[50],
// }) 

export default LogoutButton