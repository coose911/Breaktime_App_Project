import styled from 'styled-components'
import React, {useState} from "react"

const Bubble = styled.section`
    border: #00AEAE solid 5px;
    border-radius: 20px;
`
const InputBox = styled.input`
    height: 150px;
    width: 300px;
`
const LastEntry = styled.ul`
    border: gray solid 2px;
    border-radius: 20px;
`

// Props = diaryEntries state & addEntry function (below, needs to be moved)
const DiaryComponent = ({diaryEntries, addEntry}) => {

    // State for diary entry input text box:
    const [entry, setEntry] = useState ("")

    // To update the text as a diary entry is being typed:
    const handleTextChange = (evt) => {
        // console.log(evt.target.value)
        setEntry(evt.target.value)
    }

    // To handle the submission of a new entry:
    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        console.log(evt.target.value)
        const entryToSubmit = {entry}
        // addEntry lives in the same file as diary entry state and is passed down as a prop
        addEntry(entryToSubmit)
        setEntry("")
    }


    // Filtering to find the most recent diary entry, then mapping to show it in a list
    // const mostRecentDiaryEntry = diaryEntries.filter(entry, index => index === 0);
    // const entryToDisplay = mostRecentDiaryEntry.map((entry) => {
    //     return <li>{entry.text}</li>
    // })

    return (
        <Bubble>
        <h2>Daily Thoughts & Feelings</h2>

        <form onSubmit={handleFormSubmit} >
            <InputBox 
                type="text"
                placeholder="How do you feel today?"
                 value={entry} 
                 onChange={handleTextChange} 
                />
            <input
                type="submit"
                value="Post"
                />
        </form>
            <LastEntry>
                <li>Last entry here</li>
                {/* {entryToDisplay} */}
            </LastEntry>
        </Bubble>
    )
}

export default DiaryComponent