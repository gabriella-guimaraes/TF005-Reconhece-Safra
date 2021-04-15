
export const Tester = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    
    <div class="jss6">
    <div class="jss8"><img class="jss9" src="https://thispersondoesnotexist.com/image" style="height: 200px;
    border-radius: 100px" alt="logo">
    <div class="nomesCargos">
    <h1 id="nameUser">Bem-Vindo(a): Sara Viana Carneiro</h1>
    <h1>Área: Cargo</h1>
    <h1 style="padding-top:30px">Badges Recebidos:</h1>      
    </div>
    </div>
    </div>
    <div class="badges"> 
    <img class="jss9" src="components/tester/imgBadges/badges.png" style="border-radius: 80px; height: 100px" alt="logo">
    <img class="jss9" src="components/tester/imgBadges/badges(5).png" style="border-radius: 80px; height: 100px" alt="logo">
    <img class="jss9" src="components/tester/imgBadges/badges(10).png" style="border-radius: 80px; height: 100px" alt="logo">
    <img class="jss9" src="components/tester/imgBadges/badges(13).png" style="border-radius: 80px; height: 100px" alt="logo">
    <img class="jss9" src="components/tester/imgBadges/badges(16).png" style="border-radius: 80px; height: 100px" alt="logo">
    </div>
   
    `;
  const loadUsers = async () => {
    const user = firebase.auth().currentUser;
    await firebase.firestore().collection('users')
      .where('id', '==', user.uid).get().then((query) => {
        let loggedUser = [];
        query.forEach((userLog) => {
          loggedUser = userLog.data();
        })
        return loggedUser;
      });
  }
  console.log(loadUsers())
  loadUsers();



  return rootElement;
}

