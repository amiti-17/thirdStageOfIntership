import { Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import style from './style.module.css'
import { strConstants } from 'config/system/constants/strConstants';

export default function LoginHeader() {
  return (
    <>
      <Avatar className={style.loginPageLockIcon} >
        <LockOutlinedIcon/>
      </Avatar> 
      <Typography component="h1" variant="h5">
        {strConstants.signIn}
      </Typography>
    </>
  );
}