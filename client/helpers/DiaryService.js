const diaryURL = 'http://localhost:9000/api/diary_entries/'

export const getDiaryEntries = () => {
    return fetch(diaryURL)
    .then(res => res.json())
}

export const getSingleDiaryEntrie = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
}