import moment from 'moment'
import 'moment/locale/es' // con esto utilizamos moment en español
import { toCelsius } from '../utils'

const getChartData = ( data ) => {

    const daysAhead = [0,1,2,3,4,5];
    const days = daysAhead.map( d => moment().add(d,'d'))
    const dataAux = days.map (day =>{
        
        const tempObjArray = data.list.filter( item =>{
            const dayOfYear = moment.unix(item.dt).dayOfYear() // funciones de moment
            return dayOfYear === day.dayOfYear()
        })
    
        const temps = tempObjArray.map(item => item.main.temp)
        
        return (
            {
                dayHour: day.format('ddd'),
                min: toCelsius(Math.min(...temps)),
                max: toCelsius(Math.max(...temps)),
                hasTemps: (temps.length > 0 ? true : false)
            }
        )
        
    }).filter(item => item.hasTemps)

    return dataAux
}

export default getChartData