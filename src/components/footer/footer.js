//import { onNavigate } from '../../utils/history.js';

export const Footer = () => {
  const navbar = document.createElement('nav');
  navbar.setAttribute('id', 'bottom-nav');

  navbar.innerHTML = `
    <div class="responsive-wrap-navbar">
      <i id="icon-nav-feed" class="fas fa-home" style="color:#ffff"></i>
      <i id="icon-nav-review" class="icon-nav fas fa-plus-circle" style="color:#ffff"></i>
      <i id="icon-nav-profile" class="fas fa-sign-out-alt" style="color:#ffff"></i>
    </div>
  `;

 
  return navbar;
};