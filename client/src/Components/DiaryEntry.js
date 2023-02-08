const DiaryEntry = ({ entry }) => {
  return (
    <>
      <li className="li-entry">
        {entry.day} at {entry.timeTaken}
        <br />
        {entry.entry}
      </li>
      <br />
    </>
  );
};

export default DiaryEntry;
