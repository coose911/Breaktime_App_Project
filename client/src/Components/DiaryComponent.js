import styled from 'styled-components'
import React, {useEffect, useState} from "react"
import { getDiaryEntries } from '../helpers/DiaryService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


//solid color background
// const Bubble = styled.section`
//     padding-left: 2em;
//     padding-top: 0.5em;
//     padding-bottom: 2em;
//     padding-right: 2em;
//     margin-top: 3em;
//     margin-left: 1em;
//     margin-right: 1em;
//     margin-bottom: 5em;
//     background-color: #144459;
//     opacity: 0.9;
//     border-radius: 20px;
//     color: antiquewhite;
// `

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
`

const InputBox = styled.input`
    height: 100px;
    width: 700px;
    margin-right: 1em;
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
            <button id='post-button' type="submit" style={{width: '60px', height: '100px'}}>
                <FontAwesomeIcon icon={faPaperPlane}/>
            </button>
        </form>
            <LastEntry> {postToShow.entry} </LastEntry>
        </Bubble>
    )
}

export default DiaryComponent