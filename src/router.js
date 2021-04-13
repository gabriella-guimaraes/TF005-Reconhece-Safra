import { Feed } from './pages/feed/feed.js';
import { Login } from './pages/login/login.js';
import { Register } from './pages/register/register.js';
import { Recommendation } from './pages/recommendation/recommendation.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/' : Login,
    '/feed': Feed,
    '/register': Register,
    '/recommendation': Recommendation

  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('feed')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/feed')
    });
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/')
    });
    document
    .getElementById('register')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/register')
    });
    document
    .getElementById('recommendation')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/recommendation')
    });

  routeRender();
});