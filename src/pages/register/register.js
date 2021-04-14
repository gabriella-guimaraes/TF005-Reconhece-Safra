import { createAccount } from '../../services/index.js';

export const Register = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.className = "container-div"
  rootElement.innerHTML = ` 
  <div class="container">
  <img class="logoSafra" src="img/logo_safra_reconhece.png" alt="Logo Safra"/>  
        <form class="register">
        <fieldset>
        <legend> Cadastre-se! </legend>
        <div class="items">
          <input type="text" id="name" placeholder="Nome" required autocomplete="off">
          <input type="email" id="email" placeholder="Email" required autocomplete="off">
          <input id="passwordFirst" type="password" placeholder="Digite uma senha 6 digitos" required autocomplete="off">
          <input id="passwordSecond" type="password" placeholder="Confirme sua senha" required autocomplete="off">
          <select id="select" class="select">
          <option>Área de atuação</option>
          <option>RH</option>
          <option>Financeiro</option>
          <option>Marketing</option>
          <option>T.I.</option>
          </select>
          <button id="btn" class="btn">Cadastrar</button>
        </div>
        </fildset>
        </form>
    </div>
  `;

  const signUpButton = rootElement.querySelector('#btn');

  signUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    const userName = rootElement.querySelector('#name').value;
    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#passwordFirst').value;
    const confirmPassword = rootElement.querySelector('#passwordSecond').value;
    const role = rootElement.querySelector('#select').value;
    createAccount(userName, email, password, confirmPassword, role);
  });

  return rootElement;
};
