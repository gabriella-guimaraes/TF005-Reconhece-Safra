import { Navbar } from '../../components/navbar/navBar.js';
import { Tester } from '../../components/tester/tester.js';
import { Footer } from '../../components/footer/footer.js';
import { Card } from '../../components/card/index.js';
import { getCard } from '../../services/index.js';

export const Feed = () => {
  const rootElement = document.createElement('div');
  rootElement.appendChild(Navbar());
  rootElement.appendChild(Tester());
  rootElement.innerHTML += `
  
      <div class="titlleFeed">
      <h1 class="title-feed">Reconhece Safra</h1>
      </div>
      <div class="filterSelect">
        <select style="height: 60px; width: 60%" name="filter" id="filter">
          <option selected style=font-size:20px">Filtro</option>
          <option value="Inspiração no Projeto">Inspiração do projeto</option>
          <option value="Atitudes Safra">Atitudes Safra</option>        
          <option value="Diferença no dia-a-dia">Diferença no dia a dia</option>
        </select>
      </div>
      <div id="cards" class="cards"></div>
      <div class="space-card"></div>
  `;

  const selectOption = rootElement.querySelector('#filter');

  selectOption.addEventListener('change', (event) => {
    event.target;
    const value = event.target.options[event.target.selectedIndex].value;
    console.log(value);
    showCards(value);
  });

  const showCards = (filter) => {
    getCard(filter).then((doc) => {
      rootElement.querySelector('#cards').innerHTML = '';
      doc.forEach((card) => {
        rootElement.querySelector('#cards').appendChild(Card(card.data()));
      })
    })
  }

  showCards('');
  rootElement.appendChild(Footer());
  return rootElement;

};

