
export const Construction = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = ` 
    <div class="containerPrincipal">
        <div class="navAlert">
            <img class="logoAlert" src="/img/alerta.png" alt="logo">
        </div>
    </div>
    <div class="construcao">
        <h1 class="paragrafoAlert"> Página em Construção </h1>
    </div>
    <div class="responsive-wrap-navbar">
      <i id="icon-nav-feed" class="fas fa-arrow-alt-circle-left" style="color:#ffff"></i>
    
    </div>
 
  `;
    return rootElement;
};
