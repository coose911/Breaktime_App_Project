const diaryURL = "http://localhost:9000/api/diary_entries/";

export const getDiaryEntries = () => {
  return fetch(diaryURL).then((res) => res.json());
};

export const getSingleDiaryEntry = (id) => {
  return fetch(diaryURL + id).then((res) => res.json());
};

export const postDiaryEntry = (payload) => {
  return fetch(diaryURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
