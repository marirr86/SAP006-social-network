import { likePost, deslikePost } from '../services/index.js';

export const card = (objPost) => {
  const idUser = firebase.auth().currentUser.uid;
  let classLike = 'muda-cor';
  if (objPost.like.includes(idUser)) {
    classLike = 'curtido';
  } else {
    classLike = 'descurtido';
  }
  const infoDiv = document.createElement('div');
  const contentCard = ` 
      <h2>${objPost.autora}</h2>
      <p>Visited Place: ${objPost.local}</p>
      <p>${objPost.mensagem}</p>
      <button class="like-button ${classLike}" data-like="${objPost.id}">like</button>
        `;

  infoDiv.innerHTML = contentCard;
  const likeBtn = infoDiv.querySelector(`[data-like="${objPost.id}"]`);
  // console.log(likeBtn);

  likeBtn.addEventListener('click', () => {
    if (objPost.like.includes(idUser)) {
      deslikePost(idUser, objPost.id).then(() => {
        window.location.reload();
      });
    } else {
      likePost(idUser, objPost.id).then(() => {
        window.location.reload();
      });
    }
  });

  return infoDiv;
};
