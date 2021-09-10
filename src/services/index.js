const db = firebase.firestore();

// Creating Posts
export const postarMensagem = (postagem) => db.collection('postagens').add(postagem);

// Reading Post
export const readPost = () => db.collection('postagens').get();

// likes
export const likePost = (idUser, idPost) => {
  firebase
    .firestore()
    .collection('postagens')
    .doc(idPost)
    .update({ like: firebase.firestore.FieldValue.arrayUnion(idUser) });
};

// Deslike
export const deslikePost = (idUser, idPost) => {
  firebase
    .firestore()
    .collection('postagens')
    .doc(idPost)
    .update({ like: firebase.firestore.FieldValue.arrayRemove(idUser) });
};

/* .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  })
  .catch((error) => {
    console.log('Error getting documents: ', error);
  }); */

/* docRef.get().then((doc) => {
  if (doc.exists) {
    console.log('Document data:', doc.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}).catch((error) => {
  console.log('Error getting document:', error);
});

// Observing user
/* firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
}); */
