import styled from "styled-components";
import { useState } from "react";

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
      <button onClick={increaseCoffee}>+ COFFEE</button>
      <button onClick={increaseWater}>+ WATER</button>
      <ul>
        <li>Water drank: {percentWater} - Will be a bar showing water drank</li>
        <li>
          Coffee drank: {percentCoffee} - Will be a bar showing coffee drank
        </li>
      </ul>
    </Bubble>
  );
};

export default ConsumptionComponent;
