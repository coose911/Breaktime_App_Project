const coffeeURL = 'http://localhost:9000/api/coffees/'

export const getCoffeeData = () => {
    return fetch(coffeeURL)
    .then(res => res.json())
}

export const putCoffeeData = (id) => {
    return fetch(coffeeURL + id)
    .then(res => res.json())
}