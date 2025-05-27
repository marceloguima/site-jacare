const menuIcon = document.getElementById("menu-icon")
const menu = document.getElementById("menu")


menuIcon.addEventListener("click", () => {
    showMenu()
    menuIcon.classList.toggle("fa-xmark")
    menuIcon.classList.toggle("fa-bars")
} )

const showMenu = () => {
 if(menu.style.display === "flex"){
    menu.style.display = "none"
}else{
    menu.style.display = "flex"
    
}

}