import { Box, Stack } from "@mui/material";
import style from "./style.module.css";

export function NameAndCaption({ name, caption }: { name: string, caption?: string }) {
  return (
    <Stack direction='column'>
          {name}
          {
            caption && 
              <Box className={style.currentWeatherCardMainDescription}>
                {caption}
              </Box>
          }
        </Stack>
  )
}