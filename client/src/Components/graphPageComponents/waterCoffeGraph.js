import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { getCoffeeData } from "../../helpers/CoffeeService";
import { getWaterData } from "../../helpers/WaterService";
require("highcharts/modules/accessibility")(Highcharts);

const WaterCoffeeGraph = () => {
  const [waterData, setWaterData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [coffeeData, setCoffeeData] = useState([0, 0, 0, 0, 0, 0, 0]);

  const coffee = [0, 0, 0, 0, 0, 0, 0];
  const water = [0, 0, 0, 0, 0, 0, 0];

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    getCoffeeData()
      .then((res) => sortCoffeeData(res))
      .then((res) => setCoffeeData(res));

    getWaterData()
      .then((res) => sortWaterData(res))
      .then((res) => setWaterData(res));
  };

  const sortCoffeeData = (dataToSort) => {
    const sorted = dataToSort.forEach((object, index) => {
      coffee[object.day] += 1;
    });
    return coffee;
  };

  const sortWaterData = (dataToSort) => {
    const sorted = dataToSort.forEach((object, index) => {
      water[object.day] += 1;
    });
    return water;
  };

  //GRAPH

  const options = {
    chart: {
      type: "area",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    // style: {
    //     fontFamily: 'serif',
    //     stroke: '#FFFFFF'
    // },
    credits: {
      enabled: false,
    },
    accessibility: {
      description: "comparison of coffees and waters",
    },
    title: {
      text: "Coffees and Waters Drank Over the Week",
    },
    colors: ["#DBB13C", "#2C3258"],
    xAxis: {
      title: {
        text: "Days of the Week",
      },
      categories: ["Mon", "Tue", "Wed", "Thur", "Fri"],
    },
    yAxis: {
      title: {
        text: "Number of Drinks",
      },
    },
    // plotOptions: {
    //     area: {
    //         pointStart: 0,
    //         marker: {
    //             enabled: false,
    //             symbol: 'circle',
    //             radius: 2,
    //             states: {
    //                 hover: {
    //                     enabled: true
    //                 }
    //             }
    //         }
    //     }
    // },
    series: [
      {
        name: "Waters",
        data: waterData.slice(1, 6),
      },
      {
        name: "Coffees",
        data: coffeeData.slice(1, 6),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default WaterCoffeeGraph;
