export const Feed = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>Feed de recomendações</h1>

      <div class="filterSelect">
        <select name="filter" id="filter">
          <option selected>Filtro</option>
          <option>Inspiração do projeto</option>
          <option>Referência em atitudes Safra</option>        
          <option>Diferença no dia a dia</option>
          <option>Área de atuação</option> 
        </select>     
      </div> 
  `;  
  return rootElement;
};
