const waterURL = 'http://localhost:9000/api/waters/'

export const getWaterData = () => {
    return fetch(waterURL)
    .then(res => res.json())
}

export const postWaterData = (payload) => {
    return fetch(waterURL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
}