import { useMutation } from "@apollo/client";
import { Avatar, Stack, SxProps } from "@mui/material";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { auth } from "Apollo/queries/auth";
import { UserContext } from "Contexts/userContext";
import CircularIndeterminate from "components/Common/CircularIndeterminate";
import { strConstants } from "config/system/constants/strConstants";
import { LogoutButton } from "./styled/LogoutButton";

export function UserAvatar(props: {sx: SxProps, children: string, title: string}) {

  const [ logOut, { loading: logoutLoading } ] = useMutation(auth.logout);
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const logoutHandler = () => {
    logOut();
    setUser(null);
    if (window.location.pathname !== '/') router.replace('/');
  }

  return (
    <Stack
      sx={{
        alignItems: 'center',
      }}
    >
      <Avatar title={props.title} sx={props.sx} children={props.children} alt="users image"/>
      {logoutLoading && <CircularIndeterminate />}
      {
        !logoutLoading && <LogoutButton
            onClick={(e) => {
              logoutHandler();
            }}
          >
            {strConstants.logOut}
          </LogoutButton>
      }
    </Stack>
  )
  
}
