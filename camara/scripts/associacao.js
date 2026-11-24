
document.addEventListener("DOMContentLoaded", () => {
    const timestamp = document.querySelector("#timestamp");

    if (timestamp) {
        timestamp.value = new Date().toISOString();
    }
});

/* Modal de benefícios da Associação NP */

const modalNP = document.querySelector("#modal-np");
const linkNP = document.querySelector('a[href="#modal-np"]');
const fecharModalNP = document.querySelector("#fechar-modal-np");

if (modalNP && linkNP && fecharModalNP) {
    linkNP.addEventListener("click", (event) => {
        event.preventDefault();
        modalNP.showModal();
    });

    fecharModalNP.addEventListener("click", () => {
        modalNP.close();
    });
}

/* Modal de benefícios da Associação Bronze */

const modalBronze = document.querySelector("#modal-bronze");
const linkBronze = document.querySelector('a[href="#modal-bronze"]');
const fecharModalBronze = document.querySelector("#fechar-modal-bronze");

if (modalBronze && linkBronze && fecharModalBronze) {
    linkBronze.addEventListener("click", (event) => {
        event.preventDefault();
        modalBronze.showModal();
    });

    fecharModalBronze.addEventListener("click", () => {
        modalBronze.close();
    });
}

/* Modal de benefícios da Associação Prata */

const modalPrata = document.querySelector("#modal-silver");
const linkPrata = document.querySelector('a[href="#modal-silver"]');
const fecharModalPrata = document.querySelector("#fechar-modal-silver");

if (modalPrata && linkPrata && fecharModalPrata) {
    linkPrata.addEventListener("click", (event) => {
        event.preventDefault();
        modalPrata.showModal();
    });

    fecharModalPrata.addEventListener("click", () => {
        modalPrata.close();
    });
}

/* Modal de benefícios da Associação Ouro */

const modalOuro = document.querySelector("#modal-gold");
const linkOuro = document.querySelector('a[href="#modal-gold"]');
const fecharModalOuro = document.querySelector("#fechar-modal-gold");

if (modalOuro && linkOuro && fecharModalOuro) {
    linkOuro.addEventListener("click", (event) => {
        event.preventDefault();
        modalOuro.showModal();
    });

    fecharModalOuro.addEventListener("click", () => {
        modalOuro.close();
    });
}

// Registra a data e a hora do envio do formulário.

const formularioAssociacao = document.querySelector(".membership-form form");
const campoTimestamp = document.querySelector("#timestamp");

if (formularioAssociacao && campoTimestamp) {
    campoTimestamp.value = new Date().toISOString();

    formularioAssociacao.addEventListener("submit", () => {
        campoTimestamp.value = new Date().toISOString();
    });
}
