import { getVeggies, setVeggies } from "./database.js";

//invoke getter function 
const veggies = getVeggies()

//create and export a function for HTML representation of an unordered list with radio inputs
export const veggiesChoices = () => {
    let html = "<ul>"

    //use .map to iterate over veggies array and invoke the function, while converting objects to li elements
    let veggieItemsArray = veggies.map(veggie => {
        return `<li>
         <input type="radio" name="veggie" value="${veggie.id}">${veggie.name}</input>
        </li>`
    })

    //join all the strings in the array into a single string
    html += veggieItemsArray.join("")
    //close UL
    html += '</ul>'

    return html
    }


//create an event listener for a change event, to show which veggie has been chosen
//if the name of the targeted event is veggie, then invoke the setter funciton 
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === 'veggie') {
            setVeggies(parseInt(changeEvent.target.value))
        }
    }
)


//alternate version of function with for of loop 
// //export const veggiesChoices = () => {
//     const html = "<ul>"

//     for (const veggie of veggies) {
//             html +=  `<li>
//             <input type="radio" name="veggie" value="${veggie.id}">${veggie.name}</input>
//             </li>`
//         }
//         html += "</ul>"
//         return html
    
