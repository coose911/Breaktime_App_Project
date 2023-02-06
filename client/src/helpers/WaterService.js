const waterURL = 'http://localhost:9000/api/waters/'

export const getWaterData = () => {
    return fetch(waterURL)
    .then(res => res.json())
}

export const putWaterData = (id) => {
    return fetch(waterURL + id)
    .then(res => res.json())
}