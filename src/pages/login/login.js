export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <main class="container">
        <h2>Login</h2>
        <form action="">
            <div class="input-field">
                <input type="text" name="username" id="username"
                    placeholder="Insira seu email">
                <div class="underline"></div>
            </div>
            <div class="input-field">
                <input type="password" name="password" id="password"
                    placeholder="Insira sua senha">
                <div class="underline"></div>
            </div>
            <input type="submit" value="Continue">
        </form>
        <span>Esqueceu a senha?</span>
        <p>Não tem conta?<button id="btnCadastro">Cadastre-se</button></p>

  `;
  return rootElement;
};