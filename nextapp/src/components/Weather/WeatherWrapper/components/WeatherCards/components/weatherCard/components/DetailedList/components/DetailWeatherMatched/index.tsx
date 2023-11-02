import { getTime } from "functions/timeAndDate/getTime";
import { GetListOfItem } from "./components/GetListOfItem"

type DetailWeatherMatchedType = {
  name: string,
  item: string,
}

const getNormalName = (name: string) => {
  return [name[0].toUpperCase(), name.slice(1,)].join('').split('_').join(' ')
}

const getPropsForTime = (props: DetailWeatherMatchedType) => ({
  name: [props.name[0].toUpperCase(), props.name.slice(1,)].join(''),
  item: getTime(new Date(Number(props.item) * 1000)),
  measure: '',
})

const getPropsForTemp = (props: DetailWeatherMatchedType) => ({
  name: getNormalName(props.name),
  item: Math.round(Number(props.item)),
  measure: '°C',
})

const getPropsForWind = (props: DetailWeatherMatchedType) => ({
  name: getNormalName(props.name),
  item: Math.round(Number(props.item)),
  measure: ' metre/sec',
})

export const DetailWeatherMatched = (props: DetailWeatherMatchedType) => {

  const { name, item } = props;
  
  switch (name) {
    case 'sunrise':
      return <GetListOfItem {...getPropsForTime(props)} />
    case 'sunset':
      return <GetListOfItem {...getPropsForTime(props)} />
    case 'temp_day':
      return <GetListOfItem {...getPropsForTemp(props)} />
    case 'temp_min':
      return <GetListOfItem {...getPropsForTemp(props)} />
    case 'temp_max':
      return <GetListOfItem {...getPropsForTemp(props)} />
    case 'temp_night':
      return <GetListOfItem {...getPropsForTemp(props)} />
    case 'temp_eve':
      return <GetListOfItem {...getPropsForTemp(props)} />
    case 'temp_morn':
      return <GetListOfItem {...getPropsForTemp(props)} />
    case 'feels_like_day':
      return <GetListOfItem {...getPropsForTemp(props)} />
    case 'feels_like_night':
      return <GetListOfItem {...getPropsForTemp(props)} />
    case 'feels_like_eve':
      return <GetListOfItem {...getPropsForTemp(props)} />
    case 'feels_like_morn':
      return <GetListOfItem {...getPropsForTemp(props)} />
    case 'pressure':
      return <GetListOfItem name={"Pressure"} item={item} measure={' hPa'} />
    case 'humidity':
      return <GetListOfItem name={"Humidity"} item={item} measure={'%'} />
    case 'wind_speed':
      return <GetListOfItem {...getPropsForWind(props)} />
    case 'wind_deg':
      return <GetListOfItem {...getPropsForWind(props)} measure="°"/>
    case 'rain':
      return <GetListOfItem name={"Rain"} item={item} measure={' mm'} />
    case 'snow':
      return <GetListOfItem name={"Snow"} item={item} measure={' mm'} />
    default:
      return <></>
  }
}