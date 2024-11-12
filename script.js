async function buscarPersonaje() {
    const characterId = document.getElementById("personajeName").value;
    if (characterId === "") {
        alert("Por favor, ingresa el nombre de personaje");
        return;
    }
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${characterId}`
        );
        if (!response.ok) {
            throw new Error("Personaje no encontrado");
        }
        const data = await response.json();
        const characterCard = document.getElementById("personaje");
        characterCard.style.display = "block";
        characterCard.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Id:</strong> ${data.id}</p>
        <p><strong>Altura:</strong> ${data.height}</p>
        <p><strong>Especie:</strong> ${data.species.name}</p>
        `;
    } catch (error) {
        console.error("Error", error);
        const characterCard = document.getElementById("personaje");
        characterCard.style.display = "block";
        characterCard.innerHTML = "<p>No se encontró el personaje</p>";
    }
}

document.getElementById("buscarBtn").addEventListener("click", buscarPersonaje);
    