import { Box } from "@mui/material";
import { WeatherContext } from "../../src/Contexts/weatherContext";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from './style.module.css'

export function WeatherLayout({ children } : { children: React.ReactNode }): JSX.Element {
  return (
    <WeatherContext.Provider value={{}}>
      {/* <div className={styles.weatherLayout}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </div> */}

      <Box sx={{maxWidth: '1200px', mx: 'auto'}}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </Box>
      
    </WeatherContext.Provider>
  )
}