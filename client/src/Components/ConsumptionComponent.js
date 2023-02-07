import styled from "styled-components";
import { useState } from "react";
import ConsumptionProgress from "./ConsumptionProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater, faCoffee, faWater } from "@fortawesome/free-solid-svg-icons";

const Bubble = styled.section`
  margin-top: 3em;
  background-color: #144459;
  opacity: 0.9;
  border-radius: 20px;
  color: antiquewhite;
  padding-left: 2em;
  padding-right: 3em;
  padding-top: 0.5em;
  padding-bottom: 2em;
`;

// Props = waterDrank state & coffeeDrank state
const ConsumptionComponent = ({ waterDrank, coffeeDrank, addWater, addCoffee }) => {
  const [percentWater, setPercentWater] = useState(0);
  const [percentCoffee, setPercentCoffee] = useState(0);

  const increaseWater = () => {
    addOneWater()
    if (percentWater + 10 > 100) return;
    setPercentWater(percentWater + 10);
  };
  const increaseCoffee = () => {
    addOneCoffee()
    if (percentCoffee + 10 > 100) return;
    setPercentCoffee(percentCoffee + 10);
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
  }

  const addOneWater = (evt) => {
    const timeDate = {timeTaken: 0, day: 0}
    const date = new Date();
    timeDate.timeTaken = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    timeDate.day = date.getDay()
    addWater(timeDate);
  }

  return (
    <Bubble>
      <h2>Coffee</h2>
      <button id="coffee-button" onClick={increaseCoffee} style={{width: '60px', height: '50px'}}>
        <FontAwesomeIcon icon={faCoffee}/>
      </button>
      <ConsumptionProgress percent={percentCoffee} />
      <h2>Water</h2>
      <button id="water-button" onClick={increaseWater} style={{width: '60px', height: '50px'}}>
        <FontAwesomeIcon icon={faBottleWater}/>
      </button>
      <ConsumptionProgress percent={percentWater} />
      
    </Bubble>
  );
};

export default ConsumptionComponent;
