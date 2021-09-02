export const feed = () => {
  const div = document.createElement('div');
  const content = ` 
    <div class="container-feed">

      <header class="head-feed">
        <span>casinha</span>
        <h1 class="title-feed">Homescreen</h1>
      </header>

      <div class="post-area">
        <form action="" class="form-post">
          <label class="review-label" for="book-name">Add a new review</label>
          <input class="post-place" type="text" placeholder="Visited place">
          <textarea class="post-review" id="" cols="50" rows="10" placeholder="Describe your experiences"></textarea>
          <button type='submit' class='submit' id='submit-post'>Submit</button>
        </form>
      </div>
    
    </div>
      `;

  div.innerHTML = content;
  return div;
};

/* firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
}); */
