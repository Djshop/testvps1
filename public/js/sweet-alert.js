function sweetAlertConnected() {
    
 
    
    swal({
      title: "Vous n'êtes pas connecté",
      text: "Veuiller vous connecter à votre profil ou vous inscrire pour pouvoir effectuer une commande",
      icon: "warning",
      button: "Connexion",
    })
    .then((redirect) => {
          window.location = "/login";
    });
  
}
function sweetAlertVerified() {
    
 
    
    swal({
      title: "Votre compte n'est pas vérifié",
      text: "Veuiller accéder au mail qui vous a été envoyé à l'inscription pour valider votre compte",
      icon: "warning",
      button: "Ok",
    })
    .then((redirect) => {
      window.location = "/account";
});
  
  
}