
/* WDD 231 - Câmara de Comércio de Salvador
   Navegação responsiva
*/

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
});
