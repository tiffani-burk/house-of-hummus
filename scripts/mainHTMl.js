import { customOrder } from "./database";
import { mainDishChoices } from "./mainDish.js";
import { listOfOrders } from "./orders.js";
import { sidesChoices } from "./sides.js";
import { veggiesChoices } from "./veggies.js";


//create an event listener that listens for the add to order click from the order button
//if the id on the button clicked matches the id prfaced below, then invoke the funciton 
//responsible for taking the temp state and making it perm
document.addEventListener(
    "click",
    (clickEvent) => {
        const buttonClicked = clickEvent.target
        if (buttonClicked.id === "button") {
            customOrder()
        }
    }
)

//create a function that is responsible for all the HTML representation in the document 
//return the HTML rep and invoke the earlier functions

export const htmlRepresentation = () => {
    return `
    <section> 
    <h1>Laura Kathryn's House of Hummus</h1>
    <article>
    <h2>Main Dishes</h2>
    ${mainDishChoices()}
    </article>
    <article>
    <h2>Vegetables</h2>
    ${veggiesChoices()}
    </article>
    <article>
    <h2>Sides</h2>
    ${sidesChoices()}
    </article>
    </section>
    <div>
    <button id="button">Order Now</button>
    <div>
    <section>
    <h2>
    Monthly Sales
    </h2>
    ${listOfOrders}
    </section>
    `
}


