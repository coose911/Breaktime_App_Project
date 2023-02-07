import styled from "styled-components";
import { getBreakData } from "../helpers/BreaksService";
import react, { useState, useEffect } from "react";
import BreaksProgress from "./BreaksProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceTired, faStopwatch20 } from "@fortawesome/free-solid-svg-icons";



const Bubble = styled.section`
  margin-top: 0em;
  margin-left: 1em;
  margin-right: 1em;
  background-color: #144459;
  opacity: 0.9;
  border-radius: 20px;
  color: antiquewhite;
  padding-right: 2em;
`;
const RadioButtonsContainer = styled.form`
  border: gray solid 2px;
  border-radius: 20px;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-left: 2em;
  margin-right: 60em;
`;

const TitleContainer = styled.div`
  padding-top: 0.5em;
  padding-left: 2em;
`

const ProgressContainer = styled.div`
  padding-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;
`


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
    <>
    <Bubble>
      <TitleContainer>
        <h2>Breaks Taken</h2>
        <button id='break-button' onClick={addABreak} style={{width: '60px', height: '50px'}}>
          <FontAwesomeIcon icon={faFaceTired} size="lg" />
        </button>
      </TitleContainer>
      <ProgressContainer>
        <BreaksProgress percent={percentBreak} />
      </ProgressContainer>
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
    </Bubble>
    </>
  );
};

export default BreaksComponent;
