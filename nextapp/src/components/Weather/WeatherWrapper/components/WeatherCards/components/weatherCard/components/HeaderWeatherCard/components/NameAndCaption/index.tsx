import { Stack } from "@mui/material";
import { NameForCard } from "./components/NameForCard";
import { Caption } from "./styled/Caption";

type NameAndCaptionType = {
  name: string,
  caption?: string,
}

export function NameAndCaption({ name, caption }: NameAndCaptionType) {

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