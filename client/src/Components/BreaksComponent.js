import styled from "styled-components";
import { getBreakData } from "../helpers/BreaksService";
import react, { useState, useEffect } from "react";
import BreaksProgress from "./BreaksProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faClockFour, faClockRotateLeft, faUserClock } from "@fortawesome/free-solid-svg-icons";

const Bubble = styled.section`
margin-top: -5em;
  background-color: #144459;
  /* opacity: 0.6; */
  border-radius: 20px;
  color: antiquewhite;
`

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
    const timeDate = {timeTaken: 0, day: 0}
    increaseBreakPercent();
    const date = new Date();
    timeDate.timeTaken = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    timeDate.day = date.getDay()
    addBreak(timeDate);
  };

  return (
    <Bubble>
      <h2>Breaks Taken</h2>
      <button onClick={addABreak}>
        <FontAwesomeIcon icon={faClockRotateLeft} />
      </button>

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
    </Bubble>
  );
};

export default BreaksComponent;
