import styled from "styled-components";
import { useState } from "react";
import ConsumptionProgress from "./ConsumptionProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater, faCoffee, faWater } from "@fortawesome/free-solid-svg-icons";

const Bubble = styled.section`
  border: #00aeae solid 5px;
  border-radius: 20px;
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
    const date = new Date()
    const time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()
    addCoffee(time)
  }

  const addOneWater = (evt) => {
    const date = new Date()
    const time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()
    addWater(time)
  }

  return (
    <Bubble>
      <h2>Water & Coffee Drunk</h2>
      <button id="coffee-button" onClick={increaseCoffee}>
        <FontAwesomeIcon icon={faCoffee}/>
      </button>
      <button id="water-button" onClick={increaseWater}>
        <FontAwesomeIcon icon={faBottleWater}/>
      </button>
      <ConsumptionProgress percent={percentWater} />
      <ConsumptionProgress percent={percentCoffee} />
    </Bubble>
  );
};

export default ConsumptionComponent;
