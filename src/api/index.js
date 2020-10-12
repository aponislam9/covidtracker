import axious from 'axios';
import Axios from 'axios';


const url = "https://covid19.mathdro.id/api"

export const fetchData = async(country) => {

    let changeableUrl = url

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try{
        const { data } = await axious.get(changeableUrl)

       

        const modifiedData = {
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        }
        
        return modifiedData;

    }
    catch(error){

    }
}


// export const fetchDailyData = async () => {
//     try{

//         const {data} = await axious.get(`${url}/daily`)


//         const modifiedData = data.map((dailyData) => ({
//             confirmed: dailyData.confirmed.total,
//             deaths:dailyData.deaths.total,
//             date:dailyData.reportDate,

//         }));

//         return modifiedData;

        
//     }

//     catch (error){

//     }
// }
export const fetchDailyData = async () => {
    try {
      const { data } = await axious.get('https://api.covidtracking.com/v1/us/daily.json');

      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };

export const fetchCountries = async () => {
    try {
        const {data:{countries}} = await axious.get(`${url}/countries`);
        

        return countries.map((country)=>country.name)

    } catch (error) {
        console.log(error)
    }
}