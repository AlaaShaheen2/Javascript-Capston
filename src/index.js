import './style.css';
import close from './images/close.png';
import itemCounter from './JS/itemCounter';

const container = document.querySelector('.container');
const pokeElem = document.getElementById('poke-elem');
const pokeCounter = document.querySelector('.poke-counter');
console.log(pokeCounter);

const pokeNum = 36;

const fetchPoke = () => {
  const pokemons = [];
  for (let i = 1; i <= pokeNum; i += 3) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    pokemons.push(fetch(url).then((res) => res.json()));
  }

  const displayComments = (pokemon) => {
    const list = document.querySelector('.poke-elem');
    list.addEventListener('click', (e) => {
      if (e.target.innerHTML === 'Comment') {
        for (let i = 0; i <= pokemon.length; i += 1) {
          const pokeSource = e.target.parentElement.parentElement.firstChild.nextSibling.src;
          if (pokeSource === pokemon[i]?.image) {
            const commentWrapper = document.createElement('div');
            commentWrapper.classList.add('comment-wrapper');
            container.appendChild(commentWrapper);

            const commentSection = document.createElement('div');
            commentSection.classList.add('comment-section');
            commentWrapper.appendChild(commentSection);

            const closeDiv = document.createElement('div');
            closeDiv.classList.add('close-div');
            commentSection.appendChild(closeDiv);

            const closeIcon = new Image();
            closeIcon.src = close;
            closeIcon.classList.add('close');
            closeDiv.appendChild(closeIcon);

            const pokemonImg = new Image();
            pokemonImg.src = pokemon[i].image;
            pokemonImg.classList.add('img-card');
            commentSection.appendChild(pokemonImg);

            const pokemonName = document.createElement('h2');
            pokemonName.classList.add('comment-pokename');
            pokemonName.innerText = pokemon[i].name;
            commentSection.appendChild(pokemonName);

            const pokemonType = document.createElement('p');
            pokemonType.classList.add('comment-poketype');
            pokemonType.innerText = `Type: ${pokemon[i].type}`;
            commentSection.appendChild(pokemonType);

            const pokemonGameID = document.createElement('p');
            pokemonGameID.classList.add('comment-pokeid');
            pokemonGameID.innerText = `In-game Pokemon ID: ${pokemon[i].id}`;
            commentSection.appendChild(pokemonGameID);

            const allCommentsWrapper = document.createElement('div');
            allCommentsWrapper.classList.add('all-comments-wrapper');
            commentSection.appendChild(allCommentsWrapper);

            const commentsHeader = document.createElement('h2');
            commentsHeader.classList.add('comments-header');
            commentsHeader.innerText = 'Comments';
            allCommentsWrapper.appendChild(commentsHeader);

            const allComments = document.createElement('ul');
            allComments.classList.add('all-comments');
            allCommentsWrapper.appendChild(allComments);

            const addCommentWrapper = document.createElement('div');
            addCommentWrapper.classList.add('add-comment-wrapper');
            commentSection.appendChild(addCommentWrapper);

            const addCommentHeader = document.createElement('h3');
            addCommentHeader.classList.add('add-comment-header');
            addCommentHeader.innerText = 'Add a comment';
            addCommentWrapper.appendChild(addCommentHeader);

            const addCommentName = document.createElement('input');
            addCommentName.classList.add('add-comment-name');
            addCommentName.placeholder = 'Your name';
            addCommentWrapper.appendChild(addCommentName);

            const addCommentText = document.createElement('textarea');
            addCommentText.classList.add('add-comment-text');
            addCommentText.placeholder = 'Your comment';
            addCommentWrapper.appendChild(addCommentText);

            const addCommentBtn = document.createElement('button');
            addCommentBtn.classList.add('add-comment-button');
            addCommentBtn.innerText = 'Comment';
            addCommentWrapper.appendChild(addCommentBtn);

            closeDiv.addEventListener('click', (z) => {
              if (z.target.src === close) {
                commentWrapper.remove();
              }
            });
          }
        }
      }
    });
  };

  const showPoke = (pokemon) => {
    console.log(pokemon);
    const pokeInnerHtml = pokemon
      .map(
        (pok) => `
        <li class="poke-cards">
        
            <img class="img-card" src="${pok.image}"/>
            <h2 class="title-cr"> ${pok.name}</h2>
            <p class="type">Type: ${pok.type}</p>
            <div class = "click">
            <button type="button" class="btn">Comment</button>
            <button class="like-api-call-btn" type="button" id=${pok.id}><img src="./images/icons8-heart-40(1).png" alt="" class="heart-img"></button>
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
    displayComments(pokemon);
  });
};

window.onload = () => {
  fetchPoke();
  itemCounter(pokeNum, pokeCounter);
};