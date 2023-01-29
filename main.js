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