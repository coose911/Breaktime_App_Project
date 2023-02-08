const DiaryEntry = ({ entry }) => {
  return (
    <>
      <li className="li-entry">
        {entry.date} at {entry.time}
        <br />
        {entry.entry}
      </li>
      <br />
    </>
  );
};

export default DiaryEntry;
