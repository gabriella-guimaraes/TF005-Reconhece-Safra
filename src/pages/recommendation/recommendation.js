import { UsersData, createCard } from '../../services/index.js';
import { Navbar } from '../../components/navbar/navBar.js';
import { Footer } from '../../components/footer/footer.js';

export const Recommendation = () => {
  const rootElement = document.createElement('div');
  rootElement.appendChild(Navbar());
  rootElement.className = "container-div-register"
  rootElement.innerHTML += `
  <div class="recommendation-page">
    <h1 class="intro">Escreva uma recomendação!</h1>
    <form class="recommendation-form" id="recommendation-form">
      <label class="recommendation-page" for="userAddressee">Para:</label>
      <select class="userSelect" id="userAddressee">
      <option> </option>
      </select>

      <button class="recommendation-page" id="inspirationBtn">Inspiração do projeto</button>
      <button class="recommendation-page" id="differenceBtn">Diferença no dia-a-dia</button>
      <button class="recommendation-page" id="referenceBtn">Referência em atitude Safra</button>
      <div class="recommendation" id="recommendation"></div>
      <div class="space"></div>

    </form>
  </div>
  `;

  rootElement.appendChild(Footer());

  // const userAddressee = rootElement.querySelector('#userAddressee');
  const inspirationBtn = rootElement.querySelector('#inspirationBtn');
  const differenceBtn = rootElement.querySelector('#differenceBtn');
  const referenceBtn = rootElement.querySelector('#referenceBtn');
  const recommendationForm = rootElement.querySelector('#recommendation');

  inspirationBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const modalTemplate = `
    <div class="recommendation-page">
      <p>Para quem inspirou em uma ação ou projeto específico</p>
      <label class="recommendation-page" for="model-recommendation" >Escreva sua mensagem aqui:</label>
      <input class="recommendation-page" id="model-recommendation" maxLength="500">
      <button class="recommendation-page" id="submit-recommendation">Enviar</button>
    </div>
    `
    recommendationForm.innerHTML = modalTemplate

    const submitRecommendation = rootElement.querySelector('#submit-recommendation');

    const userTo = rootElement.querySelector('#userAddressee');
    const recommendationText = rootElement.querySelector('#model-recommendation');

    submitRecommendation.addEventListener('click', (event) => {
      event.preventDefault();
      createCard(
        userTo.options[userTo.selectedIndex].value,
        'Inspiração no Projeto',
        recommendationText.value,
        {}
      );
    })
  })

  referenceBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const modalTemplate = `
    <div class="recommendation-page">
      <p>Para quem se destaca em alguma atitude.</p>
      
      <h2>Atitudes Safra</h2>
      <div class="recommendation-page">
        <input type="checkbox" id="specialist" class="checkbox" name="specialist" value="specialist" data-label="Especialista">
        <label for="specialist">Especialista</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" id="partnership" class="checkbox" name="partnership" value="partnership" data-label="Parceiro">
        <label for="partnership">Parceiro</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" id="resilience" class="checkbox" name="resilience" value="resilience" data-label="Resiliência">
        <label for="resilience">Resiliência</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" id="owner-attitude" class="checkbox" name="owner-attitude" value="owner-attitude" data-label="Atitude de Dono">
        <label for="owner-attitude">Atitude de Dono</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" id="leadership" class="checkbox" name="leadership" value="leadership" data-label="Liderança">
        <label for="leadership">Liderança</label>
      </div>

      <label class="recommendation-page" for="model-recommendation" >Escreva sua mensagem aqui:</label>
      <input class="recommendation-page" id="model-recommendation" maxLength="500">

      <button class="recommendation-page" id="submit-recommendation">Enviar</button>
    </div>
    `
    recommendationForm.innerHTML = modalTemplate

    
    let inputs = rootElement.querySelectorAll('.checkbox');
    const selectedCheckbox = () => {
      let formatInput = {};
      for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
          console.log(inputs[i].value)
          formatInput[inputs[i].value] = inputs[i].getAttribute('data-label');
        }
      }
      
      return formatInput;
    };

    const submitRecommendation = rootElement.querySelector('#submit-recommendation');

    const userTo = rootElement.querySelector('#userAddressee');
    const recommendationText = rootElement.querySelector('#model-recommendation');

    submitRecommendation.addEventListener('click', (event) => {
      event.preventDefault();
      createCard(
        userTo.options[userTo.selectedIndex].value,
        'Atitudes Safra',
        recommendationText.value,
        selectedCheckbox()
      );
    })

  })

  differenceBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const modalTemplate = `
    <div class="recommendation-page">
      <p>Para quem ajuda as pessoas e os times a se desenvolverem: com feedbacks, dicas, orientações.</p>
      
      <h2>Tópicos</h2>
      <div class="recommendation-page">
        <input type="checkbox" class="checkbox" id="feedback" name="feedback" value="feedback" data-label="Feedback">
        <label for="feedback">Feedback</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox"  class="checkbox" id="hints-tips" name="hints-tips" value="hints-tips" data-label="Dicas e Sugestões">
        <label for="hints-tips">Dicas e Sugestões</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" class="checkbox"  id="support" name="support" value="support" data-label="Apoio em Desafios">
        <label for="support">Apoio em Desafios</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" class="checkbox"  id="owner-attitude" name="owner-attitude" value="owner-attitude" data-label="Atitude de Dono">
        <label for="owner-attitude">Atitude de Dono</label>
      </div>

      <label class="recommendation-page" for="model-recommendation" >Escreva sua mensagem aqui:</label>
      <input class="recommendation-page" id="model-recommendation" maxLength="500">

      <button class="recommendation-page" id="submit-recommendation">Enviar</button>
    </div>
    `
    recommendationForm.innerHTML = modalTemplate

    let inputs = rootElement.querySelectorAll('.checkbox');
    const selectedCheckbox = () => {
      let formatInput = {};
      for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
          console.log(inputs[i].value)
          formatInput[inputs[i].value] = inputs[i].getAttribute('data-label');
        }
      }
      
      return formatInput;
    };

    const submitRecommendation = rootElement.querySelector('#submit-recommendation');

    const userTo = rootElement.querySelector('#userAddressee');
    const recommendationText = rootElement.querySelector('#model-recommendation');

    submitRecommendation.addEventListener('click', (event) => {
      event.preventDefault();
      createCard(
        userTo.options[userTo.selectedIndex].value,
        'Diferença no dia-a-dia',
        recommendationText.value,
        selectedCheckbox()
      );
    })
  })
  function loadUsers() {
    UsersData()
      .then((doc) => {
        doc.forEach((user) => {
          const userAddressee = rootElement.querySelector('#userAddressee');
          let option = document.createElement('option');
          option.value = user.data().id;
          option.text = user.data().name;
          userAddressee.add(option);
        })
      });
 
  }
  loadUsers();
  
  return rootElement;
};