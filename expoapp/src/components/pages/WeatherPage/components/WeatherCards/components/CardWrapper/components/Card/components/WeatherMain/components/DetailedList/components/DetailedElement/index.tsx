import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { RenderElement } from "./components/RenderElement";
import { makeFirstCapitalize } from "functions/makeFirstCapitalize";
import { detailedElementsKeys } from "config/system/constants/detailedElementsKeys";
import { digits } from "config/system/constants/digits";
import { strConstants } from "config/system/constants/strConstants";
import { iconsName } from 'config/system/constants/iconsName';
import { getTime } from 'functions/timeAndDate/getTime';

type DetailedElementProps = {
  keyValue: string,
  value: string | ({
    [index: string]: string,
  })[],
}

export const DetailedElement = ({ keyValue, value }: DetailedElementProps) => {

  switch (keyValue) {
    case detailedElementsKeys.sunrise:
      return <RenderElement
        title={makeFirstCapitalize(keyValue)}
        value={getTime(new Date(Number(value) * digits[1000]))}
        icon={MaterialCommunityIcons}
        name={iconsName.sunrise}
      />
    case detailedElementsKeys.sunset:
      return <RenderElement
        title={makeFirstCapitalize(keyValue)}
        value={getTime(new Date(Number(value) * digits[1000]))}
        icon={MaterialCommunityIcons}
        name={iconsName.sunset}
      />
    case detailedElementsKeys.humidity:
      return <RenderElement
        title={makeFirstCapitalize(keyValue)}
        value={String(value)}
        measure={strConstants.humidityMeasure}
        icon={MaterialCommunityIcons}
        name={iconsName.humidity}
      />
    case detailedElementsKeys.visibility:
      return <RenderElement
        title={makeFirstCapitalize(keyValue)}
        value={String(Math.round(Number(value) / 1000))}
        measure={strConstants.lengthMeasure}
        icon={MaterialIcons}
        name={iconsName.visibility}
      />
    case detailedElementsKeys.pressure:
      return <RenderElement
        title={makeFirstCapitalize(keyValue)}
        value={String(value)}
        measure={strConstants.pressureMeasure}
        icon={MaterialCommunityIcons}
        name={iconsName.pressure}
      />
    case detailedElementsKeys.wind_speed:
      return <RenderElement
        title={makeFirstCapitalize(strConstants.wind)}
        value={String(Math.round(Number(value)))}
        measure={strConstants.speedMeasure}
        icon={Feather}
        name={iconsName.wind}
      />
    default:
      return <></>
  }

  return (
    <></>
  )
}