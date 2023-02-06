import styled from "styled-components";

const Bubble = styled.section`
  border: #00aeae solid 5px;
  border-radius: 20px;
`;
const RadioButtonsContainer = styled.form`
  border: gray solid 2px;
  border-radius: 20px;
`;

// Props = breaksTaken state & breakLength state
const BreaksComponent = ({ breaksTaken, breakLength }) => {
  return (
    <Bubble>
      <h2>Breaks Taken</h2>
      <button /* onClick={onClick} */>+ BREAK</button>

      <br />
      <br />
      <RadioButtonsContainer /* onSubmit={saveBreakLength} */>
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
      <ul>
        <li>Breaks Taken: (value here) - Will be a bar showing breaks taken</li>
      </ul>
    </Bubble>
  );
};

export default BreaksComponent;
