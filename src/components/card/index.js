export const Card = (card) => {
  const rootElement = document.createElement('div');
  rootElement.className = "container-card";
  rootElement.innerHTML = `
  <div class="card">
    <div class="title">
      <h2 class="title"> Reconhecido por: ${card.recommendation}</</h2>
    </div>
    <div class="img-user">
      <img class="img-user-logged" src="https://thispersondoesnotexist.com/image" />
    </div>      
    <div class="cardInfo"> 
      <p class="text-card-from-to"> De: ${card.user_from.name}</p>
      <p class="text-card-from-to"> Para: ${card.user_to.name}</p>
      <p class="text-card"> Mensagem: ${card.text}</p>
      <p class="text-card"> Criado em: ${card.createdAt}</p> 
    </div>
  </div>
  `;
  return rootElement;
}