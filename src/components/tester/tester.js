
export const Tester = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    
 
<div class="jss6">
<div class="jss8"><img class="jss9" src="components/tester/imgBadges/avatar.png" style="height: 200px; border-radius: 100px; border: 5px solid #fff;
  border-radius: 50%;" alt="logo">
  <div class="nomesCargos">
    <h1 id="nameUser">Bem-Vindo(a): Sara Viana Carneiro</h1>
    <h1>Área: T.I</h1>
    <h1 style="padding-top:30px">Badges Recebidos:</h1>
  </div>
</div>
</div>
<div class="badges">

<img class="jss9" src="components/tester/imgBadges/liderança_5(1).png" style="height: 100px"
  alt="logo">
<img class="jss9" src="components/tester/imgBadges/especialista_sete(1).png" style=" height: 100px"
  alt="logo">
<img class="jss9" src="components/tester/imgBadges/inclusivo_3(1).png" style=" height: 100px"
  alt="logo">
<img class="jss9" src="components/tester/imgBadges/resiliencia_3.png" style="height: 100px; margin-top:10px"
  alt="logo">
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

