
"use strict";

// WDD 231 — Câmara de Comércio de Salvador
// Dados obtidos por meio do Cloudflare Worker.

const climaAtual = document.querySelector("#current-weather");
const previsao = document.querySelector("#forecast");

const workerURL =
    "https://wdd231-clima-salvador.drlucassobrinhooficial.workers.dev/";

async function carregarClima() {
    if (!climaAtual || !previsao) return;

    try {
        const resposta = await fetch(workerURL);

        if (!resposta.ok) {
            throw new Error("Falha ao consultar o clima.");
        }

        const dados = await resposta.json();

        climaAtual.textContent =
            `${dados.temperatura.toFixed(1)} °C — ${dados.descricao}`;

        previsao.replaceChildren();

        dados.previsao.forEach((dia) => {
            const paragrafo = document.createElement("p");

            const data = new Date(`${dia.data}T12:00:00`);
            const dataFormatada = data.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit"
            });

            paragrafo.textContent =
                `${dataFormatada}: ${dia.temperatura.toFixed(1)} °C`;

            previsao.appendChild(paragrafo);
        });

    } catch (erro) {
        console.error("Erro ao carregar clima:", erro);

        climaAtual.textContent =
            "Não foi possível carregar o clima no momento.";

        previsao.textContent = "";
    }
}

carregarClima();
