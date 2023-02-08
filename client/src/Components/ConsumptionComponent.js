import styled from "styled-components";
import { useState } from "react";
import ConsumptionProgress from "./ConsumptionProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater, faCoffee, faWater } from "@fortawesome/free-solid-svg-icons";
import WaterCoffeeDayPieChart from "./WaterCoffeeDayPieChart";


// solid color background
// const Bubble = styled.section`
//   margin-top: 3em;
//   margin-left: 1em;
//   margin-right: 1em;
//   background-color: #144459;
//   opacity: 0.9;
//   border-radius: 20px;
//   color: antiquewhite;
//   padding-left: 2em;
//   padding-right: 3em;
//   padding-top: 0.5em;
//   padding-bottom: 2em;
// `;

// glass background
const Bubble = styled.section`
  backdrop-filter: blur(21px);
  -webkit-backdrop-filter: blur(21px);
  box-shadow: 0 8px 32px 0 rgba(36,148,162,1);
  border: 1px solid rgba(48,75,120,1);
  border-radius: 24px;
  padding: 20px;
  margin-top: 0em;
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 5em;
  display: grid;
  grid-template-areas:
    "bars piechart";
  grid-template-columns: 55% 45%;
`
const PieChartContainer = styled.div`
  margin-top: 2em;
  margin-left: 2em;
  margin-right: 2em;
  margin-bottom: 2em;
  width: 50%;
  height: auto;
  grid-area: piechart;
`
const ProgressBarsContainer = styled.div`
  grid-area: bars;
  display: grid;
  grid-template-areas: 
    "coffee" 
    "water" ;
`
const Coffee = styled.div`
  grid-area: coffee;
`
const Water = styled.div`
  grid-area: water;
`

// Props = waterDrank state & coffeeDrank state
const ConsumptionComponent = ({ addWater, addCoffee }) => {
  const [percentWater, setPercentWater] = useState(0);
  const [percentCoffee, setPercentCoffee] = useState(0);
  const [coffeeAmount, setCoffeeAmount] = useState(0);
  const [waterAmount, setWaterAmount] = useState(0);
  
  const increaseWater = () => {
    addOneWater()
    if (percentWater + 10 > 100) return;
    setPercentWater(percentWater + 10);
  }

  const increaseCoffee = () => {
    addOneCoffee()
    if (percentCoffee + 25 > 100) return;
    setPercentCoffee(percentCoffee + 25);
  };

  //   const decrease = () => {
  //     if (percent - 10 < 0) return;
  //     setPercent(percent - 10);
  //   };

  const addOneCoffee = (evt) => {
    const timeDate = {timeTaken: 0, day: 0}
    const date = new Date();
    timeDate.timeTaken = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    timeDate.day = date.getDay()
    addCoffee(timeDate);
    return setCoffeeAmount(coffeeAmount + 1)
  }

  const addOneWater = (evt) => {
    const timeDate = {timeTaken: 0, day: 0}
    const date = new Date();
    timeDate.timeTaken = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    timeDate.day = date.getDay()
    addWater(timeDate);
    return setWaterAmount(waterAmount + 1)
  }

  return (
    <Bubble>
      
      <ProgressBarsContainer>

        <Coffee>
          <h2>Coffee</h2>
            <button id="coffee-button" onClick={increaseCoffee} style={{width: '60px', height: '50px'}}>
              <FontAwesomeIcon icon={faCoffee}/>
            </button>
          <ConsumptionProgress percent={percentCoffee} />
        </Coffee>

        <Water>
          <h2>Water</h2>
            <button id="water-button" onClick={increaseWater} style={{width: '60px', height: '50px'}}>
              <FontAwesomeIcon icon={faBottleWater}/>
            </button>
          <ConsumptionProgress percent={percentWater} />
        </Water>

      </ProgressBarsContainer>

      <PieChartContainer>
        <WaterCoffeeDayPieChart waterAmount={waterAmount} coffeeAmount={coffeeAmount}/>
      </PieChartContainer>
      

    </Bubble>
  );
};

export default ConsumptionComponent;
