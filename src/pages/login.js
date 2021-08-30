/* firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  }); */

export const login = () => {
  const div = document.createElement('div');
  const content = `
  <div class="main-login">
  <div class="login-images">
    <img class="logo" src="../../images/flightrip.png"/>
    <img class="image-desktop" src="../../images/HINT.png"/>
  </div>
  <div class="login-data">
    <div class="mail-login">
      <form class="login-input">
        <input class="login-input" id="email-login" type="text" placeholder="E-mail ou nome do usuário">
        </input>
        <input class="login-input" id="password-login" type="password" placeholder="Insira sua senha">
        </input>
        <button class="login-input" id="lgn-btn" type="submit">Login</button>
        
      </form>
    </div>
    <h4>OU</h4>
    <div class="google-login">
      <button class="login-google" type="submit">Entrar com Google</button>
    </div>
    <div class="new-register">
      <p class="without-register">Ainda não tem uma conta?</p>
      <a class="register" id="btn-register">Cadastre-se aqui!</a>
    </div>
  </div>
</div>
  `;

  div.innerHTML = content;
  return div;
};
