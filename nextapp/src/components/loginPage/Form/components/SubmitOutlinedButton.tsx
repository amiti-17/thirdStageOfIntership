import { Button } from "@mui/material";

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
      {isLoading ? "Loading ..." : "Sign In"}
    </Button>
  )
}