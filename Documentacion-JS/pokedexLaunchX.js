/*  Programa:
    Al buscar un pokemon obtener información acerca
    de él   */

/* API comunica BD de pokemones con la vista 
    1. Cómo llamar una API con JS.
    2. Programación asíncrona   */

const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) =>{
        if(res.status != "200") {
            console.log(res);
            pokeImage("./pikachu-llorando.gif")
        }
        else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })

    //FETCH
    //da resultado de consulta de un sitio
    //en este caso consulta API
    //recibe promesa

    /* Síncrono: secuencial */
    /* Asíncrono: partes(stacks) funcionando en paralelo. */
    //Consultar API es asíncrono.
}

//fetchPokemon()

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png");

const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    //obtiene valor del input
    console.log("Hola " + pokeInput);
}