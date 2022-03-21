const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) =>{
        return res.json();
    }).then((data) => {
        //console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokemon = data.name;
        let pokeType = data.types; 
        let pokeMove = data.moves; //for //cuadro rollup
        let pokeStat = data.stats; //for //barras

        let pokeT = document.getElementById("pokeType");
        pokeT.innerHTML = "";
        let pokeM = document.getElementById("pokeMove");
        pokeM.innerHTML = "";
        let filaS = document.getElementById("stat");
        let filaNomS = document.getElementById("statName");
        filaS.innerHTML = "";
        filaNomS.innerHTML = "";

        pokeImage(pokeImg);
        pokeNom(pokemon)
        for(let i=0; i<pokeType.length; i++){
            tipo = pokeType[i].type.name;
            pokeTypes(tipo);
        }
        for(let i=0; i<pokeMove.length; i++){
            movim = pokeMove[i].move.name;
            pokeMoves(movim);
        }
        for(let i=0;i<pokeStat.length;i++){
            statName = pokeStat[i].stat.name;
            stat = pokeStat[i].base_stat;
            pokeStats(statName,stat);
        }
    }).catch((error)=>{
        pokeImage("../assets/gif/pikachu-llorando.gif")
        console.log("pokemón inváildo");
    })
}
    
//fetchPokemon()
    
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeNom = (nombre) => {
    const pokeNom = document.getElementById("pokeNom");
    pokeNom.innerHTML = nombre;
}

const pokeTypes = (tipo) =>{
    let pokeTypes = document.getElementById("pokeType");
    let type = document.createElement("span");
    type.setAttribute("class","type");
    type.innerHTML = tipo;
    pokeTypes.appendChild(type);
}

const pokeMoves = (movim) => {
    let pokeMoves = document.getElementById("pokeMove");
    let move = document.createElement("span");
    move.setAttribute("class","move");
    move.innerHTML = movim;
    pokeMoves.appendChild(move);
}

//crear barras //necesita el número de barras
const bars = (col) => {
    let stat = document.createElement("div");
    stat.setAttribute("class","stat"); 
    col.appendChild(stat);
}

const barNum = (stat) => {
    return Math.round((stat*10)/100);
}

//crear columnas stat
const pokeStats = (statName,stat) => {
    let filaStat = document.getElementById("stat");
    let filaNomStat = document.getElementById("statName");
    let colStat = document.createElement("td");
    colStat.innerHTML = stat;
    for(let i=0;i<barNum(stat);i++){
        bars(colStat);
    }
    filaStat.appendChild(colStat);
    let colNomStat = document.createElement("td");
    colNomStat.innerHTML = statName;
    filaNomStat.appendChild(colNomStat);
}


//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png");
    
