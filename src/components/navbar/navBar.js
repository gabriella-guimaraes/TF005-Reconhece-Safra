//import { onNavigate } from '../../utils/history.js';

export const Navbar = () => {
  const navbar = document.createElement('nav');
  navbar.setAttribute('id', 'bottom-nav');

  navbar.innerHTML = `
  <div class="navBar">
  <div class="jss150">
  <img class="jss151" src="/components/logos/img/logo.png" style="color:red" alt="logo">
  
  </div>
  </div>
  `;


  return navbar;
};