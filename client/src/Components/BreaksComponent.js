import styled from "styled-components";
import { getBreakData } from "../helpers/BreaksService";
import react, { useState, useEffect } from "react";
import BreaksProgress from "./BreaksProgress";

const Bubble = styled.section`
  border: #00aeae solid 5px;
  border-radius: 20px;
`;
const RadioButtonsContainer = styled.form`
  border: gray solid 2px;
  border-radius: 20px;
`;

// Props = breaksTaken state & breakLength state
const BreaksComponent = ({ breaksTaken, addBreak }) => {
  const [breakData, setBreakData] = useState([]);
  const [breakID, setBreakID] = useState("");
  const [percentBreak, setPercentBreak] = useState(0);

  const increaseBreakPercent = () => {
    if (percentBreak + 10 > 100) return;
    setPercentBreak(percentBreak + 10);
  };

  const addABreak = (evt) => {
    increaseBreakPercent();
    const date = new Date();
    const time =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    addBreak(time);
  };

  return (
    <Bubble>
      <h2>Breaks Taken</h2>
      <button onClick={addABreak}>+ BREAK</button>

      <br />
      <br />
      <RadioButtonsContainer>
        <legend>Select your preferred break length:</legend>
        <label>10 minutes</label>
        <input
          type="radio"
          id="10"
          name="break-length"
          value="10" /* onClick={handleRadioButton} */
        />
        <br />
        <label>20 minutes</label>
        <input
          type="radio"
          id="20"
          name="break-length"
          value="20" /* onClick={handleRadioButton} */
        />
        <br />
        <br />
        <input type="submit" value="Set Length"></input>
      </RadioButtonsContainer>

      <br />
      <br />
      <BreaksProgress percent={percentBreak} />
      <ul>
        <li>
          Breaks Taken: {breaksTaken} - Will be a bar showing breaks taken
        </li>
        {/* <li>break id: {consumableData[0]._id}</li> */}
      </ul>
    </Bubble>
  );
};

export default BreaksComponent;
