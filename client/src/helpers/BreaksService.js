const breakURL = 'http://localhost:9000/api/consumables_data/'

export const getConsumableData = () => {
    return fetch(breakURL)
    .then(res => res.json())
    .then(result => console.log(result))
}

export const getBreakData = (id) => {
    return fetch(breakURL + id)
    .then(res => res.json())
}

export const putBreakData = (id) => {
    return fetch(breakURL + id)
    .then(res => res.json())
}