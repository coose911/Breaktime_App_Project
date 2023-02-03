import styled from 'styled-components'

const Bubble = styled.section`
    background-color: #00AEAE;
    border-radius: 20px;
`

const ConsumptionComponent = () => {

    return (
        <Bubble>
        <h2>Consumption Bubble</h2>
            <ul>
                <li>Button to add water drunk</li>
                <li>Button to add coffee drunk</li>
                <hr/>
                <li>Bar showing water drunk</li>
                <li>Bar showing coffee drunk</li>
            </ul>
    </Bubble>
    )
}

export default ConsumptionComponent