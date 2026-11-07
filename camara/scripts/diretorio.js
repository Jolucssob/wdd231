
/* WDD 231 - Câmara de Comércio de Salvador
   Diretório de empresas associadas
   Autor: José Lucas Sobrinho
*/

const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");

// Busca os dados do arquivo JSON.
async function getMembersData() {
    try {
        const response = await fetch("dados/membros.json");

        if (!response.ok) {
            throw new Error("Não foi possível carregar os dados.");
        }

        const data = await response.json();

        displayMembers(data.members);
    } catch (error) {
        console.error("Erro ao carregar empresas:", error);

        membersContainer.innerHTML =
            "<p>Não foi possível carregar as empresas.</p>";
    }
}

// Converte o nível numérico em texto.
function getMembershipLevel(level) {
    switch (level) {
        case 3:
            return "Ouro";
        case 2:
            return "Prata";
        default:
            return "Membro";
    }
}

// Cria os cartões das empresas.
function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach((member) => {
        const card = document.createElement("article");
        card.classList.add("member-card");

        const name = document.createElement("h3");
        name.textContent = member.name;

        const image = document.createElement("img");
        image.src = member.image;
        image.alt = `Imagem ilustrativa de ${member.name}`;
        image.loading = "lazy";
        image.width = 250;
        image.height = 150;

        const description = document.createElement("p");
        description.textContent = member.description;

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = member.phone;

        const membership = document.createElement("p");
        membership.textContent =
            `Associação: ${getMembershipLevel(member.membership)}`;

        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Visitar site";
        website.target = "_blank";
        website.rel = "noopener noreferrer";

        card.append(
            name,
            image,
            description,
            address,
            phone,
            membership,
            website
        );

        membersContainer.appendChild(card);
    });
}

// Alterna para a visualização em grade.
gridButton.addEventListener("click", () => {
    membersContainer.classList.remove("list");
    membersContainer.classList.add("grid");

    gridButton.classList.add("active");
    listButton.classList.remove("active");

    gridButton.setAttribute("aria-pressed", "true");
    listButton.setAttribute("aria-pressed", "false");
});

// Alterna para a visualização em lista.
listButton.addEventListener("click", () => {
    membersContainer.classList.remove("grid");
    membersContainer.classList.add("list");

    listButton.classList.add("active");
    gridButton.classList.remove("active");

    listButton.setAttribute("aria-pressed", "true");
    gridButton.setAttribute("aria-pressed", "false");
});

// Inicia o carregamento das empresas.
getMembersData();
