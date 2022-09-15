import './style.css';

const pokeElem = document.getElementById('poke-Elem');
const pokeNum = 27;
const fetchPoke = () => {
    const pokemons = [];
    for (let i = 1; i <= pokeNum; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokemons.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(pokemons).then((results) => {
        const pokemon = results.map((res) => ({
            name: res.name,
            image: res.sprites['front_default'],
            type: res.types.map((type) => type.type.name).join(', '),
            id: res.id
        }));
        showPoke(pokemon);
    });
};

const showPoke = (pokemon) => {
    console.log(pokemon);
    const pokeInnerHtml = pokemon
        .map(
            (pok) => `
        <li class="poke-cards">
        
            <img class="img-card" src="${pok.image}"/>
            <h2 class="title-cr">${pok.id}. ${pok.name}</h2>
            <p class="type">Type: ${pok.type}</p>
            <button type="button" class="btn">Comment</button>
            
        </li>
    `
        )
        .join('');
        pokeElem.innerHTML = pokeInnerHtml;
};

fetchPoke();
