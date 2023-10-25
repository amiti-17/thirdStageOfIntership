import { Alert, Box, Collapse } from "@mui/material";
import { useEffect, useState } from "react";
import { AlertSearchBarContext } from "../../../../../Contexts/alertSearchBarContext";
import { SearchInput } from "./components/SearchInput";
import { Places } from "./components/Places";
import { digits } from "config/system/constants/digits";

export function SearchBar() {
  
  const [ alertText, setAlertText ] = useState<string>('');
  const [ alertTimeOut, setAlertTimeOut ] = useState<boolean>(false);

  let alertTimer;

  useEffect(() => {
    if (alertTimer) {
      setAlertTimeOut(false);
      clearTimeout(alertTimer);
      alertTimer = undefined;
    }
    if (alertText) {
      setAlertTimeOut(true);
      alertTimer = setTimeout(() => {
        setAlertTimeOut(false);
      }, digits[3000]);
    }
  }, [alertText]);

  return (
    <AlertSearchBarContext.Provider value={{ alertText, setAlertText }}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '90%',
        mx: 'auto',
      }}>
        <SearchInput />
        {/* <Places /> */}
      </Box>
      {/* {
        alertText && 
          <Collapse in={alertTimeOut} onExited={() => setAlertText('')}>
            <Alert severity="warning">
              {alertText}
            </Alert>
          </Collapse>
      } */}
    </AlertSearchBarContext.Provider>
  )
}
