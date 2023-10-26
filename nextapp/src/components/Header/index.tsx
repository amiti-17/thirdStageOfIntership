import { Box } from "@mui/material";
import { stringAvatar } from "./stringAvatar";
import { Logo } from "./components/Logo";
import { UserAvatar } from "./components/Avatar";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/userContext";
import { strConstants } from "config/system/constants/strConstants";
import { useQuery } from "@apollo/client";
import { users } from "Apollo/queries/users";

export function Header() {

  const { user, setUser } = useContext(UserContext);
  const userAvatarData = stringAvatar(user?.name ?? strConstants.usersName);
  const { data: currentUserData, error: currentUserError, loading: currentUserLoading } = useQuery(users.getCurrentUser);

  useEffect(() => {
    if (currentUserData?.getCurrentUser.email && user?.email !== currentUserData?.getCurrentUser.email) {
      setUser(currentUserData?.getCurrentUser);
    }
  }, [currentUserData]);
  
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
      {user?.email && <UserAvatar {...userAvatarData} title={user?.name ?? strConstants.username}/>}
    </Box>
  )
}