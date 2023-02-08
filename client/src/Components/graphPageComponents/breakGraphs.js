import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, {useEffect, useState} from 'react';
import { getBreakData } from '../../helpers/BreaksService'

const BreakGraph = () => {

    const [breakData, setBreakData] = useState([0, 0, 0, 0, 0, 0, 0])
    const breaks =  [0, 0, 0, 0, 0, 0, 0]
    
    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        getBreakData()
        .then(res => sortBreakData(res))
        .then(res => setBreakData(res))
    }

    const sortBreakData = (dataToSort) => {
        const sorted = dataToSort.forEach((object, index) => {
                breaks[object.day] += 1
        })
        return breaks
    }

    // GRAPH
    const options = {

        chart: {
            type: 'spline',
            backgroundColor: 'rgba(0, 0, 0, 0)',
        //   style: {
        //     fontFamily: 'serif',
        //     stroke: '#FFFFFF',    
        },
        accessibility: {
            description: 'showing breaks over the week'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'My Breaks Over the Week'
        },
        colors: ['#DBB13C'],
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
        }
    };

    return (
        <>
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>

        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        
        <div id="container"></div>
        </>
    )
}

export default BreakGraph;