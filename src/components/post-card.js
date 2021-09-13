import {
  likePost, deslikePost, delPost, editPost,
} from '../services/index.js';

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
      <div data-text="${objPost.id}">${objPost.mensagem}</div>
      <button class="like-button ${classLike}" data-like="${objPost.id}">like</button>

      <button class="del-button" data-del="${objPost.id}">delete</button>
      <button class="edit-button" data-edit="${objPost.id}">Edit</button>
      <button class="save-button" data-save="${objPost.id}">Save</button>
        `;

  infoDiv.innerHTML = contentCard;

  // LIKE / DESLIKE
  const likeBtn = infoDiv.querySelector(`[data-like="${objPost.id}"]`);
  likeBtn.addEventListener('click', () => {
    console.log(likeBtn);
    if (objPost.like.includes(idUser)) {
      deslikePost(idUser, objPost.id).then(() => {
        likeBtn.classList.add('descurtido');
        likeBtn.classList.remove('curtido');
      });
    } else {
      likePost(idUser, objPost.id).then(() => {
        likeBtn.classList.remove('descurtido');
        likeBtn.classList.add('curtido');
      });
    }
  });

  // DELETE
  const delBtn = infoDiv.querySelector(`[data-del="${objPost.id}"]`);
  delBtn.addEventListener('click', () => {
    delPost(objPost.id).then(() => {
      const deleteBtn = delBtn.parentNode;
      deleteBtn.remove();
    });
  });

  // UPDATE
  const editMsg = infoDiv.querySelector(`[data-text="${objPost.id}"]`);
  const editBtn = infoDiv.querySelector(`[data-edit="${objPost.id}"]`);
  editBtn.addEventListener('click', () => {
    console.log(editMsg);
    editMsg.setAttribute('contentEditable', '');
    editMsg.focus();
  });

  const saveBtn = infoDiv.querySelector(`[data-save="${objPost.id}"]`);
  saveBtn.addEventListener('click', () => {
    editPost(objPost.id, editMsg.innerText).then(() => {
      editMsg.removeAttribute('contentEditable', '');
    });
  });

  return infoDiv;
};
