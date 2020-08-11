/* eslint-env es6 */
/* eslint-disable */


const form = document.querySelector("#info")
const email = document.querySelector("#email")
const email = document.querySelector("#emailHelp")
const name = document.querySelector("#name")
const name = document.querySelector("#nameHelp")



form.addEventListener("submit", event => {
    event.preventDefault() 
    console.log("trato de enviar el formulario")
    
    if(email.value==="" || name.value===""){
        if (email.value === "" ){
            emailHelp.innerText = "Please complete you Email"           
            }    
        if (name.value === ""){
            nameHelp.innerText = "Please Complete you name"
        }
    }
    else {
        form.submit();
    }
})

email.nodeValue

