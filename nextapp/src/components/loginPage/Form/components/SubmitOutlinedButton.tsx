import { Button } from "@mui/material";
import { strConstants } from "config/system/constants/strConstants";

export default function SubmitOutlinedButton({ sx, isLoading, isDisabled }: {sx: {mt: number, mb: number}, isLoading: boolean, isDisabled: boolean}) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="outlined"
      sx={sx}
      disabled={isDisabled}
    >
      {isLoading ? strConstants.loadingLong : strConstants.signIn}
    </Button>
  )
}