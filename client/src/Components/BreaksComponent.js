import styled from "styled-components";
import { getBreakData, addBreak } from "../helpers/BreaksService";
import react, { useState, useEffect } from "react";
import BreaksProgress from "./BreaksProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour, faClockRotateLeft, faFaceTired, faStopwatch20, faTimesCircle, faTimesRectangle } from "@fortawesome/free-solid-svg-icons";

//solid color background
// const Bubble = styled.section`
//   margin-top: 0em;
//   margin-left: 1em;
//   margin-right: 1em;
//   background-color: #144459;
//   opacity: 0.9;
//   border-radius: 20px;
//   color: antiquewhite;
//   padding-right: 2em;
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
    "bars radiobuttons";
  grid-template-columns: 55% 45%;
`
const ProgressBarsContainer = styled.div`
  grid-area: bars;

`


const RadioButtonsContainer = styled.form`
  border: gray solid 2px;
  border-radius: 20px;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  grid-area: radiobuttons;
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
    evt.preventDefault()
    const timeDate = {timeTaken: 0, day: 0, length: ''}
    // regular break length is 5mins, unless specified
    increaseBreakPercent();

    const radioButtons = document.querySelectorAll('[name="break-length"]');
    
    timeDate.length = radioButtonValueBreak(radioButtons)
    const date = new Date();
    timeDate.timeTaken = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    timeDate.day = date.getDay()
    addBreak(timeDate);
  };


  const radioButtonValueBreak = (radios) => {
    let selectedSize;
    
    for (const button of radios) {
      if (button.checked) {
        selectedSize = button.value;
        button.checked = false
        break;
        }else selectedSize = '5'
      }
    return selectedSize
    
  }

  return (
    <Bubble>

      <ProgressBarsContainer>

        <TitleContainer>
          <h2>Breaks Taken</h2>
            <button id='break-button' onClick={addABreak} style={{width: '60px', height: '50px'}}>
              <FontAwesomeIcon icon={faFaceTired} size="lg" />
            </button>
        </TitleContainer>

        <ProgressContainer>
          <BreaksProgress percent={percentBreak} />
        </ProgressContainer>

      </ProgressBarsContainer>
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
        <button id="radio-button-submit" onClick={addABreak}>
          <FontAwesomeIcon icon={faClockFour} id='timer-button' style={{width: '30px', height: '30px', margin:-8}}/>
        </button>
      </RadioButtonsContainer>

      <br />
      <br />
    </Bubble>

  );
};

export default BreaksComponent;
