const breakURL = 'http://localhost:9000/api/breaks/'

export const getBreakData = () => {
    return fetch(breakURL)
    .then(res => res.json())
}

// export const putBreakData = (number) => {
//     return fetch(breakURL)
//     .then(res => res.json())
    // .then(res.break = number)
// }

export const putBreakData = (payload) => {
    console.log(payload)
    return fetch(breakURL, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
}