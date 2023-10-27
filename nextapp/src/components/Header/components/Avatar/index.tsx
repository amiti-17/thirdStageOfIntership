import { useMutation } from "@apollo/client";
import { Avatar, Button, Stack, SxProps } from "@mui/material";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { auth } from "Apollo/queries/auth";
import { UserContext } from "Contexts/userContext";
import CircularIndeterminate from "components/CircularIndeterminate";
import { strConstants } from "config/system/constants/strConstants";
import style from "./style.module.css";

export function UserAvatar(props: {sx: SxProps, children: string, title: string}) {

  const [ logOut, { data: logoutData, loading: logoutLoading, error: logoutError } ] = useMutation(auth.logout);
  const { user, setUser } = useContext(UserContext);
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
        !logoutLoading && <Button
          className={style.logoutButton}
          onClick={(e) => {
            logoutHandler();
          }}
        >
          {strConstants.logOut}
        </Button>
      }
    </Stack>
  )
  
}
