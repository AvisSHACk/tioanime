let menuContainer = document.querySelector(".Menu");
let buttonMenu = document.querySelector(".Header__menuicon");

buttonMenu.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
})
