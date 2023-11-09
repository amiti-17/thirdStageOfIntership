import { useQuery } from "@apollo/client";
import { users } from "Apollo/queries/users";
import { avatarFromString } from "./stringAvatar";
import { Logo } from "./components/Logo";
import { MyHeader } from "./styled/MyHeader";
import { UserAvatar } from "./components/Avatar";
import { strConstants } from "config/system/constants/strConstants";
import { useContext } from "react";
import { UserContext } from "Contexts/userContext";

export function Header() {

  const { user } = useContext(UserContext);
  const { data: currentUserData} = useQuery(users.getCurrentUser);
  const userAvatarData = avatarFromString(user?.name ?? strConstants.usersName);

  return (
    <MyHeader
      component='header'
    >
      <Logo />
      {user && <UserAvatar {...userAvatarData} title={user.email ?? strConstants.username}/>}
    </MyHeader>
  )
}