import { postarMensagem } from '../services/index.js';

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
          <input class="post-place" type="text" placeholder="Visited place">
          <textarea class="post-review" id="mensagem" cols="50" rows="10" placeholder="Describe your experiences"></textarea>
          <button type='button' class='submit' id='submit-post'>Submit</button>
        </form>
      </div>
    
    </div>
      `;

    div.innerHTML = content;

    const btn = div.querySelector('#submit-post');
    btn.addEventListener('click' , () => {
      const msg = div.querySelector('#mensagem').value;
      
      const postagem = {
        mensagem: msg,
        autora: 'Rafaela',
      };

      postarMensagem(postagem)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
        console.error("Error adding document: ", error);
      });
    });

  
  return div;
};



/* firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
}); */
