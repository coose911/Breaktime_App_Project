import styled from 'styled-components'
import React, {useEffect, useState} from "react"
import { getDiaryEntries } from '../helpers/DiaryService'

const Bubble = styled.section`
    margin-top: 3em;
    background-color: #144459;
    /* opacity: 0.6; */
    border-radius: 20px;
    color: antiquewhite;
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
const DiaryComponent = ({addEntry}) => {

    // State for diary entry input text box:
    const [entry, setEntry] = useState ("")
    const [postToShow, setPostToShow] = useState("")
    const [allDiaryPosts, setAllDiaryPosts] = useState([])
    
    useEffect(() => {
        getDiaryEntries()
        .then(res => showRandomPost(res))
        
    }, [])
    // To update the text as a diary entry is being typed:
    const handleTextChange = (evt) => {
        // console.log(evt.target.value)
        setEntry(evt.target.value)
    }

    // To handle the submission of a new entry:
    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        const entryToSubmit = {entry}
        // addEntry lives in the same file as diary entry state and is passed down as a prop
        addEntry(entryToSubmit)
        setPostToShow(entry)
        setEntry("")
    }

    const showRandomPost = (diaryentries) => {
        setPostToShow(diaryentries[Math.floor(Math.random()*diaryentries.length)])
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
            <LastEntry> {postToShow.entry} </LastEntry>
        </Bubble>
    )
}

export default DiaryComponent