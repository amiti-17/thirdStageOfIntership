import { Button } from "@mui/material";
import { strConstants } from "config/system/constants/strConstants";
import style from "./style.module.css";

export default function SubmitOutlinedButton({ isLoading, isDisabled }: { isLoading: boolean, isDisabled: boolean }) {
  return (
    <Button
      type="submit"
      variant="outlined"
      disabled={isDisabled}
      className={style.submitOutlinedButton}
      fullWidth
    >
      {isLoading ? strConstants.loadingLong : strConstants.signIn}
    </Button>
  )
}