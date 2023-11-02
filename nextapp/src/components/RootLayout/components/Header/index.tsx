import { useQuery } from "@apollo/client";
import { users } from "Apollo/queries/users";
import { avatarFromString } from "./stringAvatar";
import { Logo } from "./components/Logo";
import { MyHeader } from "./styled/MyHeader";
import { UserAvatar } from "./components/Avatar";
import { useContext, useEffect } from "react";
import { UserContext } from "Contexts/userContext";
import { strConstants } from "config/system/constants/strConstants";

export function Header() {

  const { user, setUser } = useContext(UserContext);
  const userAvatarData = avatarFromString(user?.name ?? strConstants.usersName);
  const { data: currentUserData} = useQuery(users.getCurrentUser);

  useEffect(() => {
    if (currentUserData?.getCurrentUser.email && user?.email !== currentUserData?.getCurrentUser.email) {
      setUser(currentUserData?.getCurrentUser);
    }
  }, [currentUserData]);
  
  return (
    <MyHeader
      component='header'
    >
      <Logo />
      {user?.email && <UserAvatar {...userAvatarData} title={user?.name ?? strConstants.username}/>}
    </MyHeader>
  )
}