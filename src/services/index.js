import { onNavigate } from '../utils/history.js';


const saveUserInfo = (user, email, userName, role) => {
  firebase.firestore().collection('users').doc(email)
    .set({
      name: userName,
      id: user.uid,
      role: role,
      email: email
    }, { merge: true });
};

const saveInfoProfile = (userName) => {
  const userProfile = firebase.auth().currentUser;

  userProfile.updateProfile({
    displayName: userName,
  })
    .then()
    .catch();
};

export const createAccount = (userName, email, password, confirmPassword, role) => {
  if (password !== confirmPassword) {
    alert('A senha digitada está diferente em um dos campos');
    return false;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => user)
    .then((loggedUser) => {
      saveInfoProfile(userName);
      saveUserInfo(loggedUser.user, email, userName, role);
      onNavigate('/feed');
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        alert('E-mail já cadastrado');
      } else if (errorCode === 'auth/invalid-email') {
        alert('E-mail inválido');
      } else if (errorCode === 'auth/weak-password') {
        alert('Senha fraca');
      } else {
        alert('Algo deu errado. Por favor, tente novamente.');
      }
    });

  return true;
};

export const SignIn = (email, password) => {
  if (!email) {
    alert('Por favor, digite o endereço de email.');
  } else if (!password) {
    alert('Por favor, digite sua senha.');
  } else {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        onNavigate('/feed');
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-email') {
          alert('Endereço de email não é válido');
        } else if (errorCode === 'auth/user-disabled.') {
          alert('O usuário correspondente ao e-mail fornecido foi desativado.');
        } else if (errorCode === 'auth/user-not-found') {
          alert('Não há nenhum usuário correspondente ao e-mail fornecido.');
        } else if (errorCode === 'auth/wrong-password') {
          alert('A senha é inválida para o e-mail fornecido ou a conta correspondente ao e-mail não tem uma senha definida.');
        } else {
          alert('Algo deu errado. Por favor, tente novamente.');
        }
      });
  }
};

export const stayLogged = () => {
  return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
};

export const UsersData = () => {
  return firebase.firestore().collection('users').get()
  .then((queryReview) => queryReview.docs);
};

export const CurrentUserName = () => {
  return firebase.auth().currentUser.get();
  // .then((queryReview) => queryReview.docs)
  // return firebase.firestore().collection('users').where('name', '==', firebase.auth().currentUser.name).get()
}

// export const UsersData = () => {
//   return firebase.firestore().collection('users').where('name', '==', firebase.auth().currentUser.name).get()
//   .then((queryReview) => queryReview.docs);
// };

// export const UserProfileInfo = () => {
//   return firebase.auth().currentUser.name;
//   // return firebase.firestore().collection('users').doc(UserInfoUid).get();
// };