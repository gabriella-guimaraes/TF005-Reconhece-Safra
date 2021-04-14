import { onNavigate } from '../../utils/history.js';

export const Login = () => {
const rootElement = document.createElement('div');
rootElement.className = "container-div"
rootElement.innerHTML = `
  <img class="logoSafra" src="img/logo_safra_reconhece.png" alt="Logo Safra"/>
    <h2>Login</h2>
    <form action="">
      <div class="input-field">
        <input type="text" name="username" id="username" placeholder="Insira seu email">
        <div class="underline"></div>
      </div>
      <div class="input-field">
        <input type="password" name="password" id="password" placeholder="Insira sua senha">
          <div class="underline"></div>
      </div>
        <input type="submit" id="submit" value="Entrar">
    </form>
    <span>Esqueceu a senha?</span>
    <p>Não tem conta?<button id="btnCadastro">Cadastre-se</button></p>
    
    `;

const email = rootElement.querySelector('#username');
const password = rootElement.querySelector('#password');
const registerBtn = rootElement.querySelector('#btnCadastro');
const submit = rootElement.querySelector('#submit');

submit.addEventListener('click', () => {
  console.log(email.value);
  console.log(password.value);

})


registerBtn.addEventListener('click', () => {
  onNavigate('/register');
})

return rootElement;
};