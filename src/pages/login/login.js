import { onNavigate } from '../../utils/history.js';
import { SignIn } from '../../services/index.js'

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.className = "container-div"
  rootElement.innerHTML = ` 
    <div class="container">
    <img class="logo-safra" src="img/logo_safra_reconhece.png" alt="Logo Safra"/>
    <form class="login">
        <div class="div-login">
        <input type="text" class="username" id="username" placeholder="Insira seu email">
        <input type="password" class="password" id="password" placeholder="Insira sua senha">
      <button id="submit" class="btnLogin">Entrar</button>
      <div class="buttonLogin">
      <p>Não tem conta?<button class="registerBtn" id="btnCadastro">Cadastre-se</button></p>
      </div>
      <div class="recoverPassword"
      <p>Esqueceu sua senha?<button class="recoverBtn" id="btnCadastro">Clique aqui!</button></p>
      </div> 
      </div>
    </form>
    </div>
`;

  const email = rootElement.querySelector('#username');
  const password = rootElement.querySelector('#password');
  const registerBtn = rootElement.querySelector('#btnCadastro');
  const submit = rootElement.querySelector('#submit');

submit.addEventListener('click', (event) => {
  event.preventDefault()
  console.log(email.value);
  console.log(password.value);
  SignIn(email.value, password.value)
  onNavigate('/feed');
})

  registerBtn.addEventListener('click', () => {
    onNavigate('/register');
  })

  return rootElement;
};