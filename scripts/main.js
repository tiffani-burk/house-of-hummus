import { htmlRepresentation } from "./mainHTMl.js";

//create a query selector and set id to container 
const htmlContainer = document.querySelector("#container")

//create a function to rendor the html 
//use .innterhtml on the variable we created and set value to the htmlRep funciton invoked
const rendorAllHTML = () => {
    htmlContainer.innerHTML = htmlRepresentation()
}

//invoke function above
rendorAllHTML()

//create an event listener to listen for the state to be changed
document.addEventListener(
    "stateChanged", event => {
        console.log('state has changed')
        rendorAllHTML()
    }
)
