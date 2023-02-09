const breakURL = 'http://localhost:9000/api/breaks/'

export const getBreakData = () => {
    return fetch(breakURL)
    .then(res => res.json())
}


export const postBreakData = (payload) => {
    return fetch(breakURL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
}