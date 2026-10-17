const menuIcon = document.querySelector("#menu-icon")
const navLinks = document.querySelector(".nav-links")

function setMenu(open) {
    navLinks.classList.toggle("active", open)
    menuIcon.setAttribute("aria-expanded", open)
    menuIcon.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu")
}

menuIcon.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("active"))
})

// closed menu
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setMenu(false))
})