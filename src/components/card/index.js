export const Card = (card) => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="card" style="background-color: yellow">
  <div class="img-user">
    <img src="https://thispersondoesnotexist.com/image" style="width:60px">
  </div>      
  <div class="cardInfo"> 
    <p class="texto-card"> De: ${card.user_from.name}</p>
    <p class="texto-card"> Para: </p>
    <p class="texto-card"> Mensagem: </p> 
  </div>
  </div>
  `;
  return rootElement;
}