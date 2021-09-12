import { login } from './pages/login.js';
import { register } from './pages/register.js';
import { feed } from './pages/feed.js';

const routes = {
  '': login,
  '#register': register,
  '#feed': feed,
  //        '/reset': reset
};

function renderPage() {
  const url = window.location.hash;
  const page = routes[url]();
  const divRoot = document.getElementById('root');
  divRoot.innerHTML = '';
  divRoot.appendChild(page);
}

window.addEventListener('hashchange', renderPage);
window.addEventListener('load', () => {
  renderPage();
});

const root = document.getElementById('root');

root.innerHTML = '';

root.appendChild(feed());
