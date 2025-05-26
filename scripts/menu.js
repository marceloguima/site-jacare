const menuIcon = document.getElementById("menu-icon")
const menu = document.getElementById("menu")

const showMenu = () => {
menu.classList.toggle("hidden")
menuIcon.classList.toggle("open")
}