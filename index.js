function fetchData() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const pokemonSprite = document.getElementById('pokemonSprite');

    if (pokemonName) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => {
                const spriteUrl = data.sprites.front_default;
                pokemonSprite.src = spriteUrl;
                pokemonSprite.style.display = "block";
            })
            .catch(error => {
                alert("Pokemon not found!");
            });
    } else {
        alert("Please enter a Pokemon name!");
    }
}
