import styled from "styled-components";
import { getBreakData, addBreak } from "../helpers/BreaksService";
import react, { useState, useEffect } from "react";
import BreaksProgress from "./BreaksProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour, faFaceTired, faStopwatch20 } from "@fortawesome/free-solid-svg-icons";
import MeditativeButton from "./meditativeButton";

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
  backdrop-filter: blur(21px);
  -webkit-backdrop-filter: blur(21px);
  box-shadow: 0 8px 32px 0 rgba(36,148,162,1);
  border: 1px solid rgba(48,75,120,1);
  border-radius: 24px;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  grid-area: radiobuttons;
  display: grid;
  height: auto;
  grid-template-areas:
    "length meditation";
`
const LengthButton = styled.div`
  grid-area: length;
`
const MeditationButton = styled.div`
  grid-area: meditation;
`
const TitleContainer = styled.div`
  padding-top: 0.5em;
  padding-left: 1em;
`
const ProgressContainer = styled.div`
  padding-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;
`

const BreaksComponent = ({ addBreak }) => {
  
  const [percentBreak, setPercentBreak] = useState(0);
  const [amountBreak, setAmountBreak] = useState(0)
  
  const date = new Date();
  const todaysDate = date.getDay()

  useEffect(() => {
    getBreakData()
    .then(res => res.filter(object => object.day === todaysDate))
    .then(res => {
      const lengthOfArray = res.length
      setAmountBreak(lengthOfArray)
      if (lengthOfArray > 10) {
        setPercentBreak(100)
      } else setPercentBreak(lengthOfArray * 10)
    })
  }, [])

  const increaseBreakPercent = () => {
    setAmountBreak(amountBreak + 1)
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
          <BreaksProgress percent={percentBreak} amount={amountBreak}/>
        </ProgressContainer>

      </ProgressBarsContainer>
    
      <RadioButtonsContainer>
        <LengthButton>
          <legend>Pick a break length:</legend>
            <br/>
              <label>10 minutes</label>
                <input
                  type="radio"
                  id="10"
                  name="break-length"
                  value="10"
                />
              <br/>
            
              <label>20 minutes</label>
                <input
                  type="radio"
                  id="20"
                  name="break-length"
                  value="20"
                />
          
            <br/><br/>

            <button id="radio-button-submit" onClick={addABreak}>
              <FontAwesomeIcon icon={faClockFour} id='timer-button' style={{width: '30px', height: '30px', margin:-8}}/>
            </button>
          </LengthButton>

        <br/> <br/>

        <MeditationButton>
          <MeditativeButton addABreak={addABreak}/>
        </MeditationButton>

      </RadioButtonsContainer>

    </Bubble>

  );
};

export default BreaksComponent;
