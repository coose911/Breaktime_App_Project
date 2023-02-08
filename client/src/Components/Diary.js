import React, { useState, useEffect } from "react";
import DiaryEntry from "./DiaryEntry";
import { getDiaryEntries } from "../helpers/DiaryService";

const Diary = () => {
  const [diaryEntries, setDiaryEntries] = useState([]);

  useEffect(() => {
    getDiaryEntries().then((res) => setDiaryEntries(res));
  }, []);

  const showAllDiaryEntries = diaryEntries.map((entry) => (
    <DiaryEntry key={entry._id} entry={entry}></DiaryEntry>
  ));

  return (
    <section className="section-diary">
      <h1>Diary</h1>
      <ul className="diary-entries">{showAllDiaryEntries}</ul>
    </section>
  );
};

export default Diary;
