import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const WaterCoffeeDayPieChart = ({ waterAmount, coffeeAmount }) => {
  var pieColors = (function () {
    var colors = [],
      base = Highcharts.getOptions().colors[0],
      i;

    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(
        Highcharts.color(base)
          .brighten((i - 3) / 7)
          .get()
      );
    }
    return colors;
  })();

  // Build the chart
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Coffees and Waters Today",
      align: "left",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b><br>{point.percentage:.1f} %",
          distance: -50,
          filter: {
            property: "percentage",
            operator: ">",
            value: 4,
          },
        },
      },
    },
    series: [
      {
        name: "Share",
        data: [
          { name: "Water", y: waterAmount },
          { name: "Coffee", y: coffeeAmount },
        ],
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default WaterCoffeeDayPieChart;
