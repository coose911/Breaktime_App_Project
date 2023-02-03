import styled from 'styled-components'

const Bubble = styled.section`
    background-color: #00AEAE;
    border-radius: 20px;
`

const BreaksComponent = () => {

    return(
        <Bubble>
        <h2>Breaks Bubble</h2>
            <button /* onClick={onClick} */>ADD A BREAK</button>

            <br/>
            
            <form>
                <legend>Select your preferred break length:</legend>
                <label>10 minutes</label>
                <input type="radio" id="10" name="break-length" value="10" /* onClick={handleRadioButton} */ />
                <label>20 minutes</label>
                <input type="radio" id="20" name="break-length" value="20" /* onClick={handleRadioButton} */ />

                <input type="submit" value="Save Break Length"></input>
            </form>
            <ul>
                <hr/>
                <li>Radio buttons to select desired length of breaks</li>
                <hr/>
                <li>Bar showing breaks taken</li>
            </ul>
        </Bubble>
    )
}

export default BreaksComponent
