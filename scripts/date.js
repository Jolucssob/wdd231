
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#ultimaModificacao");

currentYear.textContent = new Date().getFullYear();

lastModified.textContent =
    `Última Modificação: ${document.lastModified}`;
