import './style.css';
import close from './images/close.png';

const container = document.querySelector('.container');
const pokeElem = document.getElementById('poke-elem');
const pokeNum = 36;
const fetchPoke = () => {
  const pokemons = [];
  for (let i = 1; i <= pokeNum; i += 3) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    pokemons.push(fetch(url).then((res) => res.json()));
  }

  const showPoke = (pokemon) => {
    const pokeInnerHtml = pokemon
      .map(
        (pok) => `
        <li class="poke-cards">
        
            <img class="img-card" src="${pok.image}"/>
            <h2 class="title-cr"> ${pok.name}</h2>
            <p class="type">Type: ${pok.type}</p>
            <div class = "click">
            <button type="button" class="btn">Comment</button>
            <img src="./images/icons8-heart-40(1).png" alt="" class="heart-img">
            </div>
        </li>
    `,
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

fetchPoke();

function displayComments() {
  const list = document.querySelector('.poke-elem');
  list.addEventListener('click', (e) => {
    if (e.target.innerHTML === "Comment") {
      const commentWrapper = document.createElement('div');
      commentWrapper.classList.add('comment-wrapper');
      container.appendChild(commentWrapper);

      const commentSection = document.createElement('div');
      commentSection.classList.add('comment-section');
      commentWrapper.appendChild(commentSection);

      const closeDiv = document.createElement('div');
      closeDiv.classList.add('close-div');
      commentSection.appendChild(closeDiv);

      const closeIcon = new Image;
      closeIcon.src = close;
      closeIcon.classList.add('close');
      closeDiv.appendChild(closeIcon);

      closeDiv.addEventListener('click', (z) => {
        if (z.target.src === close) {
          commentWrapper.remove();
        }
      });
    };
  });
}

displayComments();