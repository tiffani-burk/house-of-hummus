import { getMainDish, getSides, getOrders, getVeggies } from "./database.js";
const mainDishes = getMainDish()
const sides = getSides()
const veggies = getVeggies()

//create a function to calculate the total cost of items
const buildOrder = (order) => {
    //find the id of the mainDish
    const selectedMainDish = mainDishes.find(mainDish => {
        return mainDish.id === order.mainDishId
    })
    //find the id of the side
    const selectedSide = sides.find(side => {
        return side.id === order.sideId
    })
    //find the id of the veggie 
    const selectedVeggie = veggies.find(veggie => {
        return veggie.id === order.veggieId
    })

    //add costs of items together and store to variable
    const totalCost = selectedMainDish.price + selectedSide.price + selectedVeggie.price

    //convert cost number to a string

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    //interpolate the price to HTML string 
    return `<li>
    Receipt #${order.id} = ${costString}
    </li>`
}