
"use strict";

// Recupera os dados enviados pelo formulário.
const parametros = new URLSearchParams(window.location.search);

// Localiza a área onde os dados serão apresentados.
const container = document.querySelector("#dados-solicitacao");

// Campos que serão exibidos na confirmação.
const campos = [
    ["nome", "Nome"],
    ["sobrenome", "Sobrenome"],
    ["cargo", "Cargo na organização"],
    ["email", "E-mail"],
    ["telefone", "Telefone celular"],
    ["organizacao", "Empresa ou organização"],
    ["nivel", "Nível de associação"],
    ["descricao", "Descrição"]
];

// Converte os valores dos níveis em nomes legíveis.
const niveis = {
    np: "Associação NP",
    bronze: "Associação Bronze",
    silver: "Associação Prata",
    gold: "Associação Ouro"
};

if (container) {
    container.replaceChildren();

    if (!parametros.has("nome")) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Nenhuma solicitação foi informada.";
        container.appendChild(mensagem);
    } else {
        campos.forEach(([chave, rotulo]) => {
            let valor = parametros.get(chave) || "Não informado";

            if (chave === "nivel") {
                valor = niveis[valor] || valor;
            }

            const paragrafo = document.createElement("p");
            const destaque = document.createElement("strong");

            destaque.textContent = `${rotulo}: `;
            paragrafo.appendChild(destaque);
            paragrafo.appendChild(document.createTextNode(valor));

            container.appendChild(paragrafo);
        });

        // Apresenta a data e a hora registradas no formulário.
        const timestamp = parametros.get("timestamp");

        if (timestamp) {
            const data = new Date(timestamp);

            if (!Number.isNaN(data.getTime())) {
                const paragrafo = document.createElement("p");
                const destaque = document.createElement("strong");

                destaque.textContent = "Data da solicitação: ";

                paragrafo.appendChild(destaque);
                paragrafo.appendChild(
                    document.createTextNode(
                        data.toLocaleString("pt-BR")
                    )
                );

                container.appendChild(paragrafo);
            }
        }
    }
}
