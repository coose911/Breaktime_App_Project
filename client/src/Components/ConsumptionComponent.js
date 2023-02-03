import styled from 'styled-components'

const Bubble = styled.section`
    border: #00AEAE solid 5px;
    border-radius: 20px;
`

// Props = waterDrank state & coffeeDrank state
const ConsumptionComponent = ({waterDrank, coffeeDrank}) => {

    return (
        <Bubble>
            <h2>Water & Coffee Drunk</h2>
                <button /* onClick={onClickWater} */>+ COFFEE</button>
                <button /* onClick={onClickCoffee} */>+ WATER</button>
                <ul>
                    <li>Bar showing water drank</li>
                    <li>Bar showing coffee drank</li>
                </ul>
        </Bubble>
    )
}

export default ConsumptionComponent