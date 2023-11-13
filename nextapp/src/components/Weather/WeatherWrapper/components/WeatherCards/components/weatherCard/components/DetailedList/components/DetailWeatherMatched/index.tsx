import AirIcon from '@mui/icons-material/Air';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import KayakingIcon from '@mui/icons-material/Kayaking';
import CompressIcon from '@mui/icons-material/Compress';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import { getTime } from "functions/timeAndDate/getTime";
import { GetListOfItem } from "./components/GetListOfItem"
import { strConstants } from "config/system/constants/strConstants";
import { digits } from "config/system/constants/digits";
import { makeFirstCapitalize } from "functions/makeFirstCapitalize";
import { WindAngleIcon } from './components/WindAngleIcon';

type DetailWeatherMatchedType = {
  name: string,
  item: string,
}

const getNormalName = (name: string) => {
  return [
    name[0].toUpperCase(), 
    name.slice(1,)].join(strConstants.emptyStr).split(strConstants.underlineStr).join(strConstants.spaceStr)
}

const getPropsForTime = (props: DetailWeatherMatchedType) => ({
  name: [props.name[0].toUpperCase(), props.name.slice(1,)].join(strConstants.emptyStr),
  item: getTime(new Date(Number(props.item) * digits[1000])),
  measure: strConstants.emptyStr,
})

const getPropsForTemp = (props: DetailWeatherMatchedType) => ({
  name: getNormalName(props.name),
  item: Math.round(Number(props.item)),
  measure: strConstants.degreesCelsiusMeasure,
})

const getPropsForWind = (props: DetailWeatherMatchedType) => {
  return {
    item: Math.round(Number(props.item.split(strConstants.slash)[0])),
    measure: strConstants.speedWindMeasure,
  }
}

export const DetailWeatherMatched = (props: DetailWeatherMatchedType) => {
  const { name, item } = props;
  
  switch (name) {
    case strConstants.sunrise:
      return <GetListOfItem {...getPropsForTime(props)}><WbTwilightIcon/></GetListOfItem>
    case strConstants.sunset:
      return <GetListOfItem {...getPropsForTime(props)}><WbTwilightIcon/></GetListOfItem>
    case strConstants.tempDay:
      return <GetListOfItem {...getPropsForTemp(props)} />
    case strConstants.tempMin:
      return <GetListOfItem {...getPropsForTemp(props)} />
    case strConstants.tempMax:
      return <GetListOfItem {...getPropsForTemp(props)} />
    case strConstants.tempNight:
      return <GetListOfItem {...getPropsForTemp(props)} />
    case strConstants.tempEve:
      return <GetListOfItem {...getPropsForTemp(props)} />
    case strConstants.tempMorn:
      return <GetListOfItem {...getPropsForTemp(props)} />
    case strConstants.feelsLikeDay:
      return <GetListOfItem {...getPropsForTemp(props)} />
    case strConstants.feelsLikeNight:
      return <GetListOfItem {...getPropsForTemp(props)} />
    case strConstants.feelsLikeMorn:
      return <GetListOfItem {...getPropsForTemp(props)} />
    case strConstants.feelsLikeEve:
      return <GetListOfItem {...getPropsForTemp(props)} />
    case strConstants.pressure:
      return <GetListOfItem item={item} measure={strConstants.pressureMeasure} ><CompressIcon /></GetListOfItem>
    case strConstants.humidity:
      return <GetListOfItem name={makeFirstCapitalize(strConstants.humidity)} item={item} measure={strConstants.humidityMeasure}><WaterDropIcon /></GetListOfItem>
    case (strConstants.windSpeed + strConstants.slash + strConstants.windDeg):
      return <GetListOfItem {...getPropsForWind(props)} ><><WindAngleIcon angle={Number(props.item.split(strConstants.slash)[1])} /><AirIcon /></></GetListOfItem>
    case strConstants.rain:
      return <GetListOfItem name={makeFirstCapitalize(strConstants.rain)} item={item} measure={strConstants.waterMeasure}><KayakingIcon/></GetListOfItem>
    case strConstants.snow:
      return <GetListOfItem name={makeFirstCapitalize(strConstants.snow)} item={item} measure={strConstants.waterMeasure}><AcUnitIcon/></GetListOfItem>
    default:
      return <></>
  }
}