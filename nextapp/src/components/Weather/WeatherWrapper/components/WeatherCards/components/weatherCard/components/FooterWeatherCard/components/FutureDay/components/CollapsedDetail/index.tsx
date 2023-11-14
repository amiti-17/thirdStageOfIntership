import { Collapse, Stack } from "@mui/material";
import { DetailedList } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailedList";

type CollapsedDetailType = {
  checked: boolean, 
  weather: any,
}

export const CollapsedDetail = ({ checked, weather }: CollapsedDetailType) => {
  return (
    <Collapse in={ checked }>
      <Stack direction='column' alignItems='center' width='fit-content' >
        <DetailedList weather={weather} />
      </Stack>
    </Collapse>
  )
  
}