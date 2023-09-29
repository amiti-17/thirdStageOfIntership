import { Box } from "@mui/material";
import { WeatherContext } from "../../Contexts/weatherContext";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function WeatherLayout({ children } : { children: React.ReactNode }): JSX.Element {
  return (
    <WeatherContext.Provider value={{}}>

      <Box sx={{maxWidth: '1200px', mx: 'auto'}}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </Box>
      
    </WeatherContext.Provider>
  )
}