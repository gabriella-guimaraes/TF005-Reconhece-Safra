export const Card = (card) => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="card" style="background-color: yellow">
  <div class="img-user">
    <img src="https://thispersondoesnotexist.com/image" style="width:60px">
  </div>      
  <div class="cardInfo">
    <h2>${card.recommendation}</</h2> 
    <p class="texto-card"> De: ${card.user_from.name}</p>
    <p class="texto-card"> Para: ${card.user_to.name}</p>
    <p class="texto-card"> Mensagem: ${card.text}</</p>
    <p class="texto-card"> Criado em: ${card.createdAt}</</p> 
  </div>
  </div>
  `;
  return rootElement;
}