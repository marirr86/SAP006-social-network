// aqui você exportará as funções que precisa

export const postarMensagem = (postagem) => {
    const db = firebase.firestore();
    return db.collection('postagens').add(postagem);
}