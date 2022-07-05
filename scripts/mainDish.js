import { getMainDish, setMainDish } from "./database.js";

//variable with getter function invoked
const mainDishes = getMainDish()

//create and export a function for HTML representation of an unordered list with radio inputs
export const mainDishChoices = () => {
    let html = '<article>'

    let mainDishArray = mainDishes.map(mainDish => {
        return `<p>
       <input type="radio" name="mainDish" value="${mainDish.id}">${mainDish.name}</input>
       </p>`
    })

    //join all the strings in the array into a single string
    html += mainDishArray.join("")
    //close UL
    html += '</article>'
    return html
}

//create an event listener for a change event, to show which main dish has been chosen
//if the name of the targeted event is mainDish, then invoke the setter funciton 

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === 'mainDish') {
            setMainDish()
        }
    }
)