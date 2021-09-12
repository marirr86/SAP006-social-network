import { postarMensagem, readPost } from '../services/index.js';
import { card } from '../components/post-card.js';

export const feed = () => {
  const div = document.createElement('div');
  const content = ` 
    <div class="container-feed">

      <div class="logo-feed">
        <img src="images/HINT-small.png" />
      </div>

      <div class="post-area">
        <form action="" class="form-post">
          <label class="review-label" for="book-name">Add a new review</label>
          <input class="post-place" id="lugar" type="text" placeholder="Visited place">
          <textarea class="post-review" id="mensagem" cols="50" rows="10" placeholder="Describe your experiences"></textarea>
          <button type='button' class='submit' id='submit-post'>Submit</button>
        </form>
      </div>
      <div class="containerPost" id="containerPost">
        
      </div>
    
    </div>
      `;

  div.innerHTML = content;

  const btn = div.querySelector('#submit-post');
  const postContainer = div.querySelector('#containerPost');

  console.log(postContainer);

  readPost().then((allPosts) => {
    allPosts.forEach((doc) => {
      const objPost = {
        id: doc.id,
        local: doc.data().local,
        mensagem: doc.data().mensagem,
        autora: doc.data().autora,
        like: doc.data().like,
      };
      // console.log(objPost);
      const elementCard = card(objPost);
      console.log(elementCard);
      postContainer.appendChild(elementCard);
    });
  });

  btn.addEventListener('click', () => {
    const msg = div.querySelector('#mensagem').value;
    const place = div.querySelector('#lugar').value;

    const postagem = {
      local: place,
      mensagem: msg,
      autora: 'Fulana',
      like: [],
    };

    postarMensagem(postagem)
      .then((docRef) => {
        const objNewPost = {
          id: docRef.id,
          ...postagem,
        };
        console.log(objNewPost);
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });

  return div;
};

/* firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
}); */
