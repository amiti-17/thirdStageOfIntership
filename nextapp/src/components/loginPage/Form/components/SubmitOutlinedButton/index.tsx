import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { strConstants } from "config/system/constants/strConstants";
import { LoginPageButton } from "./components/LoginPageButton";

export default function SubmitOutlinedButton({ isLoading, isDisabled }: { isLoading: boolean, isDisabled: boolean }) {
  
  return (
    <LoginPageButton
      type="submit"
      variant="outlined"
      disabled={isDisabled}
      fullWidth
    >
      {isLoading && strConstants.loadingLong}
      {!isLoading && strConstants.signIn}
    </LoginPageButton>
  )
}