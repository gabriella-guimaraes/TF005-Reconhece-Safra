import { createAccount } from '../../services/index.js';

export const Register = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = ` 
  <img class="logoSafra" src="img/logo_safra.png" alt="Logo Safra"/>  
  <main class="container">      
    <fieldset>
        <legend> Cadastre-se. </legend>
        <form class="register">
          <input type="text" id="name" placeholder="Nome" required autocomplete="off">
          <input type="email" id="email" placeholder="Email" required autocomplete="off">
          <input id="passwordFirst" type="password" placeholder="Digite uma senha 6 digitos" required autocomplete="off">
          <input id="passwordSecond" type="password" placeholder="Confirme sua senha" required autocomplete="off">
          <select id="select" class"select">
          <option>Área de atuação</option>
          <option>RH</option>
          <option>Financeiro</option>
          <option>Marketing</option>
          <option>T.I.</option>
          </select>
          <button id="btn">Cadastrar</button>
          <button id="loginBtn">Login</button> 
        </form>
    </fieldset> 
  </main>
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
