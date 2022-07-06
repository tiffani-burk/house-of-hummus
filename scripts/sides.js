import { getSides, setSides } from "./database.js";

const sides = getSides()

//create and export a function for HTML representation of an unordered list with radio inputs
export const sidesChoices = () => {
    let html = '<article>'

    let sideItemsArray = sides.map(side => {
        return `<p>
            <input type="radio" name="side" value="${side.id}">${side.name}</input>
        </p>`
    })

    //join all the strings in the array into a single string
    html += sideItemsArray.join("")
    //close UL
    html += '</article>'
    return html
}

//create an event listener for a change event, to show which side has been chosen
//if the name of the targeted event is side, then invoke the setter funciton 

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === 'side') {
            setSides(parseInt(changeEvent.target.value))
        }
    }
)
