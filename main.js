import './style.css'
const menuToggle = document.querySelector("#menuToggle")
const menu = document.getElementById("menu")
const Togglemenu = () =>{
 if( menu.style.display === "none" )
 { menu.style.display = "block"

 }else{ 
    menu.style.display = "none" 
 }
} 
menuToggle.addEventListener("click", Togglemenu)


//JS functionality for Login

const loginform = document.getElementById("loginform")

const username = document.getElementById("username")

const password = document.getElementById("password")

const loader = document.getElementById("loader")

const submitbtn = document.getElementById("submitbtn")

//Maxium strength password
const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//Minimum strength password
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

loginform.addEventListener("submit", function (event){
//prevent browser from submitting
event.preventDefault();
// console.log (username.value, password.value)
const passwordvalue = password.value
const usernamevalue = username.value

// if (mediumRegex.test(passwordvalue)) {
   if ( passwordvalue !== "" && passwordvalue !== null && passwordvalue !== undefined) {
   password.style.borderColor = "green"
   if (usernamevalue !== "" && usernamevalue !== null && usernamevalue !== undefined) {
       username.style.borderColor = "green"

       toggleElement(loader, "block")
       toggleElement(submitbtn, "")

       fetch('https://dummyjson.com/auth/login', {
                //methods -> POST,GET,PUT,PATCH,DELETE
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: usernamevalue,
                    password: passwordvalue,
                    // expiresInMins: 60, // optional
                })
            })
                .then(res => res.json())
                .then((data) => {
                    if (data?.token) {
                        sessionStorage.setItem("usersDetail", JSON.stringify(data))
                        window.location.href = "/src/pages/dashboard.html"
                    } else {
                        alert("invalid login details")
                    }
                    // window.location.reload();
                })
                .catch((reason) => {
                    console.log(reason)
                })

                setTimeout(() => {
                    toggleElement(submitbtn, "block")
                    toggleElement(loader, "")
                }, 1000);
   } else {
       username.style.borderColor = "red"
   }
} else {
   password.style.borderColor = "red"
    }
})
    
    

const toggleElement = (element, display) => {
    if (element.style.display !== "none") {
        element.style.display = "none"
    } else {
        element.style.display = display;
    }
}

const profilesection = document.querySelector("#profilesection")
profilesection.innerHTML = "<h1>Hello Dominique</h1>"
console.log (profilesection)