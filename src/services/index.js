const saveUserInfo = (user, email, userName, role) => {
  firebase.firestore().collection('users').doc(email)
    .set({
      name: userName,
      id: user.uid,
      role: role,
      email: email
    }, { merge: true });
};

export const createAccount = (userName, email, password, confirmPassword, role) => {
  if (password !== confirmPassword) {
    alert('A senha digitada está diferente em um dos campos');
    return false;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => user)
    .then((loggedUser) => {
      saveUserInfo(loggedUser.user, email, userName, role);
    })
    .catch((error) => {
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