import { onNavigate } from '../../utils/history.js';

export const Footer = () => {
  const rootElement = document.createElement('div');
  

  rootElement.innerHTML = `
    <div class="responsive-wrap-navbar">
      <i id="iconFeed" class="fas fa-home" style="color:#ffff"></i>
      <i id="iconReview" class="icon-nav fas fa-plus-circle" style="color:#ffff"></i>
      <i id="iconSair" class="fas fa-sign-out-alt" style="color:#ffff"></i>
    </div>
  `;
  
  const iconFeed = rootElement.querySelector('#iconFeed');
  const iconReview = rootElement.querySelector('#iconReview');
  const iconSair = rootElement.querySelector('#iconSair');

  iconFeed.addEventListener('click', () => {
    onNavigate('/feed');
  }),

  iconReview.addEventListener('click', () => {
    onNavigate('/recommendation');
  }),

  iconSair.addEventListener('click', () => {
    onNavigate('/');
  })

  return rootElement;
};