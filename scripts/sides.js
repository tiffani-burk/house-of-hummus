import { getSides, setSides } from "./database.js";

const sides = getSides()

//create and export a function for HTML representation of an unordered list with radio inputs
export const sidesChoices = () => {
    const html = '<ul>'

    let sideItemsArray = sides.map(side => {
        return `<li>
            <input type="radio" name="side" value="${side.id}">${side.name}</input>
        </li>`
    })

    //join all the strings in the array into a single string
    html += sideItemsArray.join("")
    //close UL
    html += '</ul>'
    return html
}

//create an event listener for a change event, to show which side has been chosen
//if the name of the targeted event is side, then invoke the setter funciton 

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === 'side') {
            setSides()
        }
    }
)
