
const menuButton = document.querySelector("#menu-button");
const primaryNav = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
});
