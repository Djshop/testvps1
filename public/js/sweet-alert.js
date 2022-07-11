function sweetAlertConnected() {
    
 
    
    swal({
      title: "Vous n'êtes pas connecté",
      text: "Veuillez vous connecté a votre profil ou vous inscrire pour pouvoir effectué une commande",
      icon: "warning",
      button: "Connexion",
    })
    .then((redirect) => {
          window.location = "dj-shop-31.fr/login";
    });
  
}
function sweetAlertVerified() {
    
 
    
    swal({
      title: "Votre compte n'est pas vérifié",
      text: "Veuillez accedez au mail qui vous a etais envoyé a l'inscription pour valider votre compte",
      icon: "warning",
      button: "Ok",
    })
  
  
}