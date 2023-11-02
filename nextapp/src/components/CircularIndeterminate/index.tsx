import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { CircularProgressWrapper } from './styled/CircularProgressWrapper';

export default function CircularIndeterminate() {
  return (
    <CircularProgressWrapper>
      <CircularProgress />
    </CircularProgressWrapper>
  );
}