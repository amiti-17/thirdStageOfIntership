import { Avatar, Box, Stack, SxProps } from "@mui/material"

export function UserAvatar(props: {sx: SxProps, children: string, title: string}) {

  return (
    <Stack
      sx={{
        alignItems: 'center',
      }}
    >
      <Avatar title={props.title} sx={props.sx} children={props.children} alt="users image"/>
      <Box>Log out</Box>
    </Stack>
  )
  
}
