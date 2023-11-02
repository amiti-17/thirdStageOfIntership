import { Stack } from "@mui/material";
import { NameForCard } from "./components/NameForCard";
import { Caption } from "./styled/Caption";

export function NameAndCaption({ name, caption }: { name: string, caption?: string }) {

  return (
    <Stack direction='column'>
      <NameForCard name={name}></NameForCard>
      {
        caption && 
          <Caption>
            {caption}
          </Caption>
      }
    </Stack>
  )
}