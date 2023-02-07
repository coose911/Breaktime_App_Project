const DiaryEntry = ({entry}) => {


    return (
        <>
            <li>{entry.date} at {entry.time}<br/>
            {entry.entry}</li>
            <br/>
        </>
    )
}

export default DiaryEntry   