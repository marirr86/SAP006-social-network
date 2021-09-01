export const feed = () => {
  const div = document.createElement('div');
  const content = ` 
    <div>container-feed
      <div class="head-feed">
        <span>casinha</span>
        <h1 class="title-feed">Homescreen</h1>
      </div>
        <div class="post-area">
          <div class="post-area-in"> 
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
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
