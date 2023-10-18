import { Button } from "@mui/material";
import { strConstants } from "config/system/constants/strConstants";

export default function SubmitOutlinedButton({ sx, isLoading }: {sx: {mt: number, mb: number}, isLoading: boolean}) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="outlined"
      sx={sx}
      onSubmit={e => {
        
      }}
    >
      {isLoading ? strConstants.loadingLong : strConstants.signIn}
    </Button>
  )
}