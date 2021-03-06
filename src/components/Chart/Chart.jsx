import React, {useState, useEffect }from 'react';
import {fetchDailyData} from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = ({data:{confirmed,deaths,recovered}, country}) => {

    // Statefile and what sets it
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        // console.log(dailyData)
        fetchAPI();
    },[]);

    const lineChart = (
        dailyData.length
        ?(<Line 
            data={{
                // labels: dailyData.map(({date}) => date),
                labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                datasets: [{
                    data:dailyData.map(({confirmed}) => confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true,
                },{
                    data:dailyData.map(({deaths}) => deaths),
                    label:'Deaths',
                    borderColor:'#red',
                    backgroundColor:'rgb(255,0,0,0.5)',
                    fill:true,

                }, {
                    data: dailyData.map((data) => data.recovered),
                    label: 'Recovered',
                    borderColor: 'green',
                    backgroundColor: 'rgba(0, 255, 0, 0.5)',
                    fill: true,

                },
            
            ]
            }}
        />) : null


    );
        
    console.log(confirmed,recovered)

    const barChart = (
        
        confirmed?(
            <Bar
                data={{
                    lables: ['gae','Recovered','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                        ],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]

                }}

                options= {{
                    legend: {display:true},
                    title:{display:true, text:`Current state in ${country}`},


                }}
            
            />
        ) : null
        
    );
    

    return (
        <div className={styles.container}>
            {country ? barChart:lineChart}    
        </div>
    );
};

export default Chart;