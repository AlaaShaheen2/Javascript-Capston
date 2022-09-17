const p = document.querySelector('#poke-elem');

const likeAPI = (item) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0R3ry3Cxsg0WOw831pSH/likes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(item),
  });
  // .then(json=>json.json())
};

const getLikes = async () => {
  const like = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0R3ry3Cxsg0WOw831pSH/likes');
  return like.json();
};

p.addEventListener('click', (e) => {
  if (e.target.classList.value === 'heart-img like-api-call-btn') {
    const likeContainer = e.target.parentNode.children[2];
    const value = +likeContainer.innerHTML + 1;
    likeContainer.innerHTML = value;
    const { id } = e.target;
    likeAPI({ item_id: id });
  }
});

export default getLikes;