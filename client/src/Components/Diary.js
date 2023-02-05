// diary will have diary entries
import React from 'react'

// Props = diaryEntries state
const Diary = (diaryEntries) => {

    // Mapping to show full array of diary entries (NEED TO ADD IN KEYS/IDs HERE):
    const showAllDiaryEntries = diaryEntries.map((entry) => (
        <li key={entry._id} entry={entry}></li>
    ))

    return ( 
        <section>
            <h1>Diary</h1>
            {showAllDiaryEntries}
        </section>
    );
}

export default Diary;