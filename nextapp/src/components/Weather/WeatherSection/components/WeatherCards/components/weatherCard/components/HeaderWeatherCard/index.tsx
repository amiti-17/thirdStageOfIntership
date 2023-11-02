import { Box, Stack } from "@mui/material";
import style from "./style.module.css"
import { WeatherIcon } from "../WeatherIcon";
import { NameAndCaption } from "./components/NameAndCaption";
import { DeleteButton } from "./components/DeleteButton";
import { Current } from "config/system/types/Current";

export function HeaderWeatherCard({ name, current, onDeleteHandler }: { name: string, current: Current, onDeleteHandler: () => {} }) {

  const currentData = JSON.parse(current.current);
  
  return (
    <Box className={style.headerWeatherCard}>
      <Stack direction='row' gap='10px' className={style.iconAndName}> {/* I couldn't get name for this component, so it here) */}
        <WeatherIcon icon={currentData.weather[0].icon} width={'50px'} />
        <NameAndCaption name={name} caption={currentData.weather[0].description} />
      </Stack>
      <DeleteButton onDeleteHandler={onDeleteHandler} />
    </Box>
  )
}