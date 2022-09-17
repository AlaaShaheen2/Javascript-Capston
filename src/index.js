import './style.css';
import getLikes from './JS/likeAPI.js';
import itemCounter from './JS/itemCounter.js';

const pokeElem = document.getElementById('poke-elem');
const pokeCounter = document.querySelector('.poke-counter');

const pokeNum = 36;

const fetchPoke = async () => {
  const likes = await getLikes();

  const pokemons = [];
  for (let i = 1; i <= pokeNum; i += 3) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    pokemons.push(fetch(url).then((res) => res.json()));
  }
  const showPoke = (pokemon) => {
    const pokeInnerHtml = pokemon
      .map(
        (pok) => {
          let targetLikes = 0;
          likes.forEach((l) => {
            if (l.item_id.toString() === pok.id.toString() && targetLikes === 0) {
              targetLikes = l.likes;
            }
          });
          return `
            <li class="poke-cards">
            
                <img class="img-card" src="${pok.image}"/>
                <h2 class="title-cr"> ${pok.name}</h2>
                <p class="type">Type: ${pok.type}</p>
                <div class = "click">
                <button type="button" class="btn">Comment</button>
                <img src="./images/icons8-heart-40(1).png" alt="" id=${pok.id} class="heart-img like-api-call-btn">
                <span class="likes-container">${targetLikes || 0}</span>
                </div>
            </li>
        `;
        },
      )
      .join('');
    pokeElem.innerHTML = pokeInnerHtml;
  };

  Promise.all(pokemons).then((results) => {
    const pokemon = results.map((res) => ({
      name: res.name,
      image: res.sprites.front_default,
      type: res.types.map((type) => type.type.name).join(', '),
      id: res.id,
    }));
    showPoke(pokemon);
  });
};

window.onload = async () => {
  fetchPoke();
  itemCounter(pokeNum, pokeCounter);
};