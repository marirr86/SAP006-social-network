import { likePost, deslikePost } from '../services/index.js';

export const card = (objPost) => {
// console.log(objPost.id);
  const infoDiv = document.createElement('div');
  const contentCard = ` 
      <h2>${objPost.autora}</h2>
      <p>Visited Place: ${objPost.local}</p>
      <p>${objPost.mensagem}</p>
      <button class="like-button" data-like="${objPost.id}">like</button>
        `;

  infoDiv.innerHTML = contentCard;
  const likeBtn = infoDiv.querySelector(`[data-like="${objPost.id}"]`);
  console.log(likeBtn);
  const idUser = firebase.auth().currentUser.uid;

  likeBtn.addEventListener('click', () => {
    if (objPost.like.includes(idUser)) {
      deslikePost(idUser, objPost.id);
      likeBtn.style.background = 'red';
    } else {
      likePost(idUser, objPost.id);
      likeBtn.style.background = 'green';
    }
  });

  return infoDiv;
};
