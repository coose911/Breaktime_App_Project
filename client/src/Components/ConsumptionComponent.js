import styled from "styled-components";
import { useState } from "react";
import ConsumptionProgress from "./ConsumptionProgress";

const Bubble = styled.section`
  border: #00aeae solid 5px;
  border-radius: 20px;
`;

// Props = waterDrank state & coffeeDrank state
const ConsumptionComponent = ({ waterDrank, coffeeDrank }) => {
  const [percentWater, setPercentWater] = useState(0);
  const [percentCoffee, setPercentCoffee] = useState(0);

  const increaseWater = () => {
    if (percentWater + 10 > 100) return;
    setPercentWater(percentWater + 10);
  };
  const increaseCoffee = () => {
    if (percentCoffee + 10 > 100) return;
    setPercentCoffee(percentCoffee + 10);
  };

  //   const decrease = () => {
  //     if (percent - 10 < 0) return;
  //     setPercent(percent - 10);
  //   };

  return (
    <Bubble>
      <h2>Water & Coffee Drunk</h2>
      <button id="coffee-button" onClick={increaseCoffee}>
        + COFFEE
      </button>
      <button id="water-button" onClick={increaseWater}>
        + WATER
      </button>
      <ConsumptionProgress percent={percentWater} />
      <ConsumptionProgress percent={percentCoffee} />
    </Bubble>
  );
};

export default ConsumptionComponent;
