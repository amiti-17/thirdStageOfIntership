import { Alert, Collapse } from "@mui/material";
import { useEffect, useState } from "react";
import { AlertSearchBarContext } from "Contexts/alertSearchBarContext";
import { digits } from "config/system/constants/digits";
import { SearchInput } from "./components/SearchInput";
import { WeatherSearchInputWrapper } from "./styled/WeatherSearchInputWrapper";

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
      <WeatherSearchInputWrapper>
        <SearchInput />
      </WeatherSearchInputWrapper>
      {
        alertText && 
          <Collapse in={alertTimeOut} onExited={() => setAlertText('')}>
            <Alert severity="warning">
              {alertText}
            </Alert>
          </Collapse>
      }
    </AlertSearchBarContext.Provider>
  )
}
