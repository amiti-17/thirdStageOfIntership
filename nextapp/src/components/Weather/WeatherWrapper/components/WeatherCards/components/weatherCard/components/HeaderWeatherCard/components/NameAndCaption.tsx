import { Box, Stack, Tooltip, Typography } from "@mui/material";
import style from "./style.module.css";
import { NameForCard } from "./NameForCard";

export function NameAndCaption({ name, caption }: { name: string, caption?: string }) {

  return (
    <Stack direction='column'>
      <NameForCard name={name}></NameForCard>
      {
        caption && 
          <Box className={style.currentWeatherCardMainDescription}>
            {caption}
          </Box>
      }
    </Stack>
  )
}