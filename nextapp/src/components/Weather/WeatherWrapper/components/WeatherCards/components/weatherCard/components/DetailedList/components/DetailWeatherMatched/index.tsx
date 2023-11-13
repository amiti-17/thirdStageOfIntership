import { getTime } from "functions/timeAndDate/getTime";
import { GetListOfItem } from "./components/GetListOfItem"
import { strConstants } from "config/system/constants/strConstants";
import { digits } from "config/system/constants/digits";
import { makeFirstCapitalize } from "functions/makeFirstCapitalize";

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

const getPropsForWind = (props: DetailWeatherMatchedType) => ({
  name: getNormalName(props.name),
  item: Math.round(Number(props.item)),
  measure: strConstants.speedWindMeasure,
})

export const DetailWeatherMatched = (props: DetailWeatherMatchedType) => {

  const { name, item } = props;
  
  switch (name) {
    case strConstants.sunrise:
      return <GetListOfItem {...getPropsForTime(props)} />
    case strConstants.sunset:
      return <GetListOfItem {...getPropsForTime(props)} />
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
      return <GetListOfItem name={makeFirstCapitalize(strConstants.pressure)} item={item} measure={strConstants.pressureMeasure} />
    case strConstants.humidity:
      return <GetListOfItem name={makeFirstCapitalize(strConstants.humidity)} item={item} measure={strConstants.humidityMeasure} />
    case strConstants.windSpeed:
      return <GetListOfItem {...getPropsForWind(props)} />
    case strConstants.windDeg:
      return <GetListOfItem {...getPropsForWind(props)} measure={strConstants.degreesMeasure} />
    case strConstants.rain:
      return <GetListOfItem name={makeFirstCapitalize(strConstants.rain)} item={item} measure={strConstants.waterMeasure} />
    case strConstants.snow:
      return <GetListOfItem name={makeFirstCapitalize(strConstants.snow)} item={item} measure={strConstants.waterMeasure} />
    default:
      return <></>
  }
}