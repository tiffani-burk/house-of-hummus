const database = {
    tempOrder:{}, //leave empty to fill with later

    mainDishes: [{
        id: 1,
        name: 'Hummus and Hot Sauce',
        price: 8
    },
    {
        id: 2,
        name: 'Chicken Fried Lamb Kabob',
        price: 18
    },
    {
        id: 3,
        name: 'Hot Chicken Greek Salad',
        price: 16
    },
    {
        id: 4,
        name: 'Brussel Sprout Mousakka',
        price: 12
    },
    {
        id: 5,
        name: 'Okrakopita',
        price: 10
    },
    {
        id: 6,
        name: 'Fried Onion and Grape Leaves',
        price: 9
    },
    {
        id: 7,
        name: 'Chess Baklava',
        price: 6
    },
    {
        id: 8,
        name: 'Gyro Bisquits',
        price: 16
    },
    {
        id: 9,
        name: 'Black Eyed Pea Falafal',
        price: 11
    },
    {
        id: 10,
        name: 'Pecan Pastitsio',
        price: 15
    },
],
    sides: [{
        id: 1,
        name: 'Chicken Fried Steak',
        price: 7
    },
    {
        id: 2,
        name: 'Bacon',
        price: 8
    },
    {
        id: 3,
        name: 'Turkey Leg',
        price: 7
    },
    {
        id: 4,
        name: 'Ribs',
        price: 12
    },
    {
        id: 5,
        name: 'Catfish',
        price: 8
    },
    {
        id: 6,
        name: 'Souvlaki',
        price: 6
    }

],
    veggies: [{
        id: 1,
        name: 'Okra',
        price: 4
    },
    {
        id: 2,
        name: 'Callard Greens',
        price: 4
    },
    {
        id: 3,
        name: 'Swiss Chard',
        price: 4
    },
    {
        id: 4,
        name: 'Corn',
        price: 4
    },
    {
        id: 5,
        name: 'Brussel Sprouts',
        price: 4
    },
    {
        id: 6,
        name: 'Sweet Potatoes',
        price: 4
    },
    {
        id: 7,
        name: 'Grits',
        price: 4
    },
    {
        id: 8,
        name: 'Fried GreenTomatoes',
        price: 4
    }
],
    customOrders: [{
        id: 1,
        mainDishId: 2,
        veggieId: 6,
        sideId: 6,
        timestamp: 368239445
    }]
}

//create and export getter functions
export const getMainDish = () => {
    return database.mainDishes.map(mainDish => ({...mainDish}))
}
export const getVeggies = () => {
    return database.veggies.map(veggie =>  ({...veggie}))
}
export const getSides = () => {
    return database.sides.map(side => ({...side}))
}
export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

//create and export setter functions that willl set state 
const setMainDish = (id) => {
    return database.tempOrder.mainDishId = id
}
const setVeggies = (id) => {
    return database.tempOrder.veggieId = id
}
const setSides =(id) => {
    return database.tempOrder.sideId = id
}

//create and export a function whose role is to take the temp state and make it permanant
export const customOrder = () => {
    const newOrder = {...database.tempOrder} //copy current state of user choices

    //add a new primary key to the object
    const lastIndex = database.customOrders.length - 1

    //add a timestamp to the order
    newOrder.customOrder.timestamp = Date.now()

    //add a newOrder object to the custom order state by pushing the newOrder into the customOrders in the db
    database.customOrders.push(newOrder)

    //reset the temp state for the users
    database.tempOrder = {}

    //Broadcast notification that the perm state has changed 
    document.dispatchEvent(new CustomEvent("stateChanged"))
}