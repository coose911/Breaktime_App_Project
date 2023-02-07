import React, {useEffect, useState} from 'react'
import { getBreakData } from '../helpers/BreaksService'
import { getCoffeeData } from '../helpers/CoffeeService'
import { getWaterData } from '../helpers/WaterService'
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Graphs = () => {

    const [breakData, setBreakData] = useState([0, 0, 0, 0, 0, 0, 0])
    const [waterData, setWaterData] = useState([0, 0, 0, 0, 0, 0, 0])
    const [coffeeData, setCoffeeData] = useState([0, 0, 0, 0, 0, 0, 0])

    // codes of week represente by numbers
    const breaks =  [0, 0, 0, 0, 0, 0, 0]
    const coffee =  [0, 0, 0, 0, 0, 0, 0]
    const water =  [0, 0, 0, 0, 0, 0, 0]
   
    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        getBreakData()
        .then(res => sortBreakData(res))
        .then(res => setBreakData(res))

        getCoffeeData()
        .then(res => sortCoffeeData(res))
        .then(res => setCoffeeData(res))

        getWaterData()
        .then(res => sortWaterData(res))
        .then(res => setWaterData(res))
    }  

    const sortBreakData = (dataToSort) => {
        const sorted = dataToSort.forEach((object, index) => {
                breaks[object.day] += 1
        })
        return breaks
    }
    
    const sortCoffeeData = (dataToSort) => {
        const sorted = dataToSort.forEach((object, index) => {
            coffee[object.day] += 1
        })
        return coffee
    }

    const sortWaterData = (dataToSort) => {
        const sorted = dataToSort.forEach((object, index) => {
            water[object.day] += 1
        })
        return water
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
          text: 'My Breaks Over the Week'
        },
        series: [
          {
            name: 'Breaks',
            data: breakData.slice(1, 6),
            
          },
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
            categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
            breaks: [{
                from: 5,
                to: 10,
                breakSize: 1,
                // gapSize: 1
            }]
        }
      };

    return (
        
        <>
        <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        </>
     );
}
 
export default Graphs;