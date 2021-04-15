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

export const UsersData = () => {
  return firebase.firestore().collection('users').get()
  .then((queryReview) => queryReview.docs);
};

export const ForgotPassword = (email) => {
  const auth = firebase.auth();
  auth.sendPasswordResetEmail(email).then(function() {
    alert('Email enviado. Por favor olhe sua caixa de emails.')
  }).catch(() => {
    alert('Ops, algo deu errado. Por favor tente mais tarde.')
  });
}

export const createCard = async(userToId, recommendationType, recommendationText, attitudeSafra ) => {
  const user = firebase.auth().currentUser;
  
  const date = new Date();

  let userFrom = await firebase.firestore().collection('users')
  .where('id', '==', user.uid).get().then((query) => {
    let loggedUser = [];
    query.forEach((userLog) => {
      loggedUser = userLog.data();
    })
    return loggedUser;
  });

  let userTo = await firebase.firestore().collection('users')
  .where('id', '==', userToId).get().then((query) => {
    let loggedUser = [];
    query.forEach((userLog) => {
      loggedUser = userLog.data();
    })
    return loggedUser;
  });
  
  console.log('logado', userFrom);
  console.log('para', userTo);
  console.log('recType', recommendationType);
  console.log('recText', recommendationText);
  console.log('recAtti', attitudeSafra);

  firebase.firestore().collection('cards').add({
    user_from: {
      name: userFrom.name,
      user_id: userFrom.id,
      role: userFrom.role
    },
    user_to: {
      name: userTo.name,
      user_id: userTo.id,
      role: userTo.role
    },
    attitude_Safra: attitudeSafra,
    recommendation: recommendationType,
    text: recommendationText,
    createdAt: date.toLocaleString('pt-BR'),
  })
};

export const getCard = (filter) => {
  let db = firebase.firestore().collection('cards');
  const recommendationType = [
    'Inspiração no Projeto',
    'Atitudes Safra',
    'Diferença no dia-a-dia'
  ];

  if (filter) {
    if (recommendationType.includes(filter)) {
      db = firebase.firestore().collection('cards').where('recommendation', '==', filter)
    }
  }

  return db.get().then((queryReview) => queryReview.docs);
};