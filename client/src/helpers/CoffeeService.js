const coffeeURL = 'http://localhost:9000/api/coffees/'

export const getCoffeeData = () => {
    return fetch(coffeeURL)
    .then(res => res.json())
}

export const postCoffeeData = (payload) => {
    return fetch(coffeeURL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
}