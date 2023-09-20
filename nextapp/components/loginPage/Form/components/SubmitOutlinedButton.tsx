import { Button } from "@mui/material";

export default function SubmitOutlinedButton({ sx }: {sx: {mt: number, mb: number}}) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="outlined"
      sx={sx}
    >
      Sign In
    </Button>
  )
}