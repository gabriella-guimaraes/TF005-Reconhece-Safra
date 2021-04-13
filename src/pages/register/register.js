export const Register = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = ` 
  <img class="logoSafra" src="img/logo_safra.png" alt="Logo Safra"/>  
  <main class="container">      
    <fieldset>
        <legend> Cadastre-se. </legend>
        <form class="register">
                <input type="text" id="nome" placeholder="Nome" required autocomplete="off">
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
        </form>
    </fieldset> 
  </main>
      `;
  return rootElement;
};