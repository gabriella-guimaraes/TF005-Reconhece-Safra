export const Recommendation = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.className = "container-div-register"
  rootElement.innerHTML = `
  <div class="recommendation-page">
    <h1>Escreva uma recomendação!</h1>
    <form id="recommendation-form">
      <label class="recommendation-page" for="userAddressee">Para:</label>
      <select id="userAddressee">
        <option>Funcionário 1</option>
        <option>Funcionário 2</option>
        <option>Funcionário 3</option>
      </select>

      <button class="recommendation-page" id="inspirationBtn">Inspiração do projeto</button>
      <button class="recommendation-pagem" id="differenceBtn">Diferença no dia-a-dia</button>
      <button class="recommendation-page" id="referenceBtn">Referência em atitude Safra</button>

    </form>
  </div>
  `;

  const userAddressee = rootElement.querySelector('#userAddressee');
  const inspirationBtn = rootElement.querySelector('#inspirationBtn');
  const differenceBtn = rootElement.querySelector('#differenceBtn');
  const referenceBtn = rootElement.querySelector('#referenceBtn');
  const recommendationForm = rootElement.querySelector('#recommendation-form');

  inspirationBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicou');
    const modalTemplate = `
    <div class="recommendation-page">
      <p>Para quem inspirou em uma ação ou projeto específico</p>
      <label class="recommendation-page" for="model-recommendation" >Escreva sua mensagem aqui:</label>
      <input class="recommendation-page" id="model-recommendation" required>
      <button class="recommendation-page" id="submit-recommendation">Enviar</button>
    </div>
    `
    recommendationForm.innerHTML += modalTemplate
  })

  referenceBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicou');
    const modalTemplate = `
    <div class="recommendation-page">
      <p>Para quem se destaca em alguma atitude.</p>
      
      <h2>Atitudes Safra</h2>
      <div class="recommendation-page">
        <input type="checkbox" id="specialist" name="specialist" value="specialist">
        <label for="specialist">Especialista</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" id="partnership" name="partnership" value="partnership">
        <label for="partnership">Parceiro</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" id="resilience" name="resilience" value="resilience">
        <label for="resilience">Resiliência</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" id="owner-attitude" name="owner-attitude" value="owner-attitude">
        <label for="owner-attitude">Atitude de Dono</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" id="leadership" name="leadership" value="leadership">
        <label for="leadership">Liderança</label>
      </div>

      <label class="recommendation-page" for="model-recommendation" >Escreva sua mensagem aqui:</label>
      <input class="recommendation-page" id="model-recommendation" required>

      <button class="recommendation-page" id="submit-recommendation">Enviar</button>
    </div>
    `
    recommendationForm.innerHTML += modalTemplate
  })

  differenceBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicou');
    const modalTemplate = `
    <div class="recommendation-page">
      <p>Para quem ajuda as pessoas e os times a se desenvolverem: com feedbacks, dicas, orientações.</p>
      
      <h2>Tópicos</h2>
      <div class="recommendation-page">
        <input type="checkbox" id="feedback" name="feedback" value="feedback">
        <label for="feedback">Feedback</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" id="hints-tips" name="hints-tips" value="hints-tips">
        <label for="hints-tips">Dicas e Sugestões</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" id="support" name="support" value="support">
        <label for="support">Apoio em Desafios</label>
      </div>

      <div class="recommendation-page">
        <input type="checkbox" id="owner-attitude" name="owner-attitude" value="owner-attitude">
        <label for="owner-attitude">Atitude de Dono</label>
      </div>

      <label class="recommendation-page" for="model-recommendation" >Escreva sua mensagem aqui:</label>
      <input class="recommendation-page" id="model-recommendation">

      <button class="recommendation-page" id="submit-recommendation">Enviar</button>
    </div>
    `
    recommendationForm.innerHTML += modalTemplate
  })


  return rootElement;
};