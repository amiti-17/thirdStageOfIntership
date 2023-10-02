import { Box } from "@mui/material";
import { stringAvatar } from "./stringAvatar";
import { Logo } from "./components/Logo";
import { UserAvatar } from "./components/Avatar";
import { useContext } from "react";
import { CurrentUserContext } from "../../../Contexts/currentUserContext";

export function Header() {

  const { name } = useContext(CurrentUserContext);
  const userAvatarData = stringAvatar(name ?? 'Users Name');
  
  return (
    <Box component='header' sx={{
      pt: 2,
      px: 4,
      // bgcolor: 'lightGreen',
      width: '100%',
      height: '80px',
      display: "flex",
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Logo />
      <UserAvatar {...userAvatarData} title={name ?? 'username'}/>
    </Box>
  )
}