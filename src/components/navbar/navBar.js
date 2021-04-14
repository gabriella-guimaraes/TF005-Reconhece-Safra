//import { onNavigate } from '../../utils/history.js';

export const Navbar = () => {
  const navbar = document.createElement('nav');
  navbar.setAttribute('id', 'bottom-nav');

  navbar.innerHTML = `
  <div class="navBar">
  <div class="nav">
    <img class="logoNav" src="/img/logo.png" alt="logo">
  </div>
</div>
  `;


  return navbar;
};