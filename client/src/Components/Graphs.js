import React, {useEffect, useState} from 'react'
import { getBreakData } from '../helpers/BreaksService'
import { getCoffeeData } from '../helpers/CoffeeService'
import { getWaterData } from '../helpers/WaterService'
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Graphs = () => {

    const [breakData, setBreakData] = useState([])
    const [waterData, setWaterData] = useState([])
    const [coffeeData, setCoffeeData] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        setBreakData(getBreakData())
        setCoffeeData(getCoffeeData())
        setWaterData(getWaterData())
    }    

// GRAPHS    

    const options = {


        chart: {
          type: 'spline'
        },
        credits: {
            enabled: false
        },
        title: {
          text: 'My Breaks'
        },
        series: [
          {
            name: 'Breaks',
            data: [1, 2, 1, 4, 3, 6]
          }
        ],
        yAxis: {
            title: {
                text: 'Number of Breaks'
            }
        },
        xAxis: {
            title: {
                text: 'Days of the Week'
            },
            categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri']
        }
      };

        









    return (
        
        <>
        <h1>Graphs</h1>
        <p>breakdata</p>
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        </>
     );
}
 
export default Graphs;