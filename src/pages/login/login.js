export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <img class="logoSafra" src="img/logo_safra.png" alt="Logo Safra"/> 
  <main class="container">
    <form action="">
      <div class="input-field">
        <input type="text" class="username" id="username" placeholder="Insira seu email">
        <div class="underline"></div>
      </div>
      <div class="input-field">
        <input type="password" class="password" id="password" placeholder="Insira sua senha">
          <div class="underline"></div>
      </div>
      <button id="btnLogin" class="btnLogin">Entrar</button>
    </form>
    <span>Esqueceu a senha?</span>
    <p>Não tem conta?<button id="btnCadastro">Cadastre-se</button></p>
`;
  return rootElement;
};