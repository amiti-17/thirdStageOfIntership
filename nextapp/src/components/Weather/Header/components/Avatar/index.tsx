import { Avatar, Box, Stack, SxProps } from "@mui/material"
import { strConstants } from "config/system/constants/strConstants"

export function UserAvatar(props: {sx: SxProps, children: string, title: string}) {

  return (
    <Stack
      sx={{
        alignItems: 'center',
      }}
    >
      <Avatar title={props.title} sx={props.sx} children={props.children} alt="users image"/>
      <Box>{strConstants.logOut}</Box>
    </Stack>
  )
  
}
