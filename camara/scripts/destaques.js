
const spotlightContainer = document.querySelector("#spotlight-cards");

async function carregarDestaques() {
    try {
        const resposta = await fetch("dados/membros.json");

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os membros.");
        }

        const dados = await resposta.json();

        // Selecionar apenas associados Ouro (3) e Prata (2)
        const associados = dados.members.filter(
            membro => membro.membership === 3 || membro.membership === 2
        );

        // Embaralhar os associados aleatoriamente
        const embaralhados = [...associados].sort(
            () => Math.random() - 0.5
        );

        // Selecionar três empresas
        const destaques = embaralhados.slice(0, 3);

        spotlightContainer.innerHTML = "";

        destaques.forEach(membro => {
            const nivel = membro.membership === 3 ? "Ouro" : "Prata";

            const card = document.createElement("article");
            card.classList.add("spotlight-card");

            card.innerHTML = `
                <img src="${membro.image}"
                     alt="Imagem de ${membro.name}"
                     loading="lazy"
                     width="300"
                     height="200">

                <h3>${membro.name}</h3>
                <p><strong>Nível:</strong> ${nivel}</p>
                <p><strong>Endereço:</strong> ${membro.address}</p>
                <p><strong>Telefone:</strong> ${membro.phone}</p>
                <p>
                    <a href="${membro.website}"
                       target="_blank"
                       rel="noopener noreferrer">
                        Visitar site
                    </a>
                </p>
            `;

            spotlightContainer.appendChild(card);
        });

    } catch (erro) {
        console.error("Erro ao carregar destaques:", erro);

        spotlightContainer.innerHTML =
            "<p>Não foi possível carregar as empresas em destaque.</p>";
    }
}

carregarDestaques();
