
/* WDD 231 - Câmara de Comércio de Salvador
   Ano atual e última modificação
*/

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#ultimaModificacao");

currentYear.textContent = new Date().getFullYear();

lastModified.textContent =
    `Última modificação: ${document.lastModified}`;
