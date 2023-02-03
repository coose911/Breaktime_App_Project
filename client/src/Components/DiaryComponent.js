import styled from 'styled-components'

const Bubble = styled.section`
    background-color: #00AEAE;
    border-radius: 20px;
`
const DiaryComponent = () => {

    return (
        <Bubble>
        <h2>Diary Bubble</h2>
            <ul>
                <li>Text input to type a new comment</li>
                <li>Button to add comment</li>
                <hr/>
                <li>Box showing latest comment</li>
            </ul>
        </Bubble>
    )
}

export default DiaryComponent