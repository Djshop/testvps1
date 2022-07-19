//Page Liste commandes Admin
function goodTransaction() {
   
    document.getElementById("refundTransaction").style.animationName = "opacityDown" ;
    document.getElementById("refundTransaction").style.display = "none" ;
    document.getElementById("cancelTransaction").style.animationName = "opacityDown" ;
    document.getElementById("cancelTransaction").style.display = "none" ;
    document.getElementById("goodTransaction").style.animationName = "opacityUp" ;
    document.getElementById("goodTransaction").style.display = "block" ;


    document.getElementById("refundTransactionBtn").style.backgroundColor = "#20537547" ;
    document.getElementById("cancelTransactionBtn").style.backgroundColor = "#20537547" ;
    document.getElementById("goodTransactionBtn").style.backgroundColor = "#205375" ;
 
    document.getElementById("refundTransactionBtn").style.color = "#efefef" ;
    document.getElementById("cancelTransactionBtn").style.color = "#efefef" ;
    document.getElementById("goodTransactionBtn").style.color = "#F66B0E" ;

    document.getElementById("errorsOrders").style.display = "none" ;
 
    
}
function refundTransaction() {
    document.getElementById("goodTransaction").style.animationName = "opacityDown" ;
    document.getElementById("goodTransaction").style.display = "none" ;
    document.getElementById("cancelTransaction").style.animationName = "opacityDown" ;
    document.getElementById("cancelTransaction").style.display = "none" ;
    document.getElementById("refundTransaction").style.animationName = "opacityUp" ;
    document.getElementById("refundTransaction").style.display = "block" ;


    document.getElementById("goodTransactionBtn").style.backgroundColor = "#20537547" ;
    document.getElementById("cancelTransactionBtn").style.backgroundColor = "#20537547" ;
    document.getElementById("refundTransactionBtn").style.backgroundColor = "#205375" ;
 
    document.getElementById("goodTransactionBtn").style.color = "#efefef" ;
    document.getElementById("cancelTransactionBtn").style.color = "#efefef" ;
    document.getElementById("refundTransactionBtn").style.color = "#F66B0E" ;

    document.getElementById("errorsOrders").style.display = "none" ;
 
    
}
function cancelTransaction() {
    document.getElementById("goodTransaction").style.animationName = "opacityDown" ;
    document.getElementById("goodTransaction").style.display = "none" ;
    document.getElementById("refundTransaction").style.animationName = "opacityDown" ;
    document.getElementById("refundTransaction").style.display = "none" ;
    document.getElementById("cancelTransaction").style.animationName = "opacityUp" ;
    document.getElementById("cancelTransaction").style.display = "block" ;


    
    document.getElementById("goodTransactionBtn").style.backgroundColor = "#20537547" ;
    document.getElementById("refundTransactionBtn").style.backgroundColor = "#20537547" ;
    document.getElementById("cancelTransactionBtn").style.backgroundColor = "#205375" ;
 
    document.getElementById("goodTransactionBtn").style.color = "#efefef" ;
    document.getElementById("refundTransactionBtn").style.color = "#efefef" ;
    document.getElementById("cancelTransactionBtn").style.color = "#F66B0E" ;

    document.getElementById("errorsOrders").style.display = "none" ;

 
    
}
function goodTransactionResponsive() {
   
    document.getElementById("refundTransaction").style.animationName = "opacityDown" ;
    document.getElementById("refundTransaction").style.display = "none" ;
    document.getElementById("cancelTransaction").style.animationName = "opacityDown" ;
    document.getElementById("cancelTransaction").style.display = "none" ;
    document.getElementById("goodTransaction").style.animationName = "opacityUp" ;
    document.getElementById("goodTransaction").style.display = "block" ;


    document.getElementById("refundTransactionBtnResponsive").style.backgroundColor = "#20537547" ;
    document.getElementById("cancelTransactionBtnResponsive").style.backgroundColor = "#20537547" ;
    document.getElementById("goodTransactionBtnResponsive").style.backgroundColor = "#205375" ;
 
    document.getElementById("refundTransactionBtnResponsive").style.color = "#efefef" ;
    document.getElementById("cancelTransactionBtnResponsive").style.color = "#efefef" ;
    document.getElementById("goodTransactionBtnResponsive").style.color = "#F66B0E" ;

    document.getElementById("errorsOrders").style.display = "none" ;
 
    
}
function refundTransactionResponsive() {
    document.getElementById("goodTransaction").style.animationName = "opacityDown" ;
    document.getElementById("goodTransaction").style.display = "none" ;
    document.getElementById("cancelTransaction").style.animationName = "opacityDown" ;
    document.getElementById("cancelTransaction").style.display = "none" ;
    document.getElementById("refundTransaction").style.animationName = "opacityUp" ;
    document.getElementById("refundTransaction").style.display = "block" ;


    document.getElementById("goodTransactionBtnResponsive").style.backgroundColor = "#20537547" ;
    document.getElementById("cancelTransactionBtnResponsive").style.backgroundColor = "#20537547" ;
    document.getElementById("refundTransactionBtnResponsive").style.backgroundColor = "#205375" ;
 
    document.getElementById("goodTransactionBtnResponsive").style.color = "#efefef" ;
    document.getElementById("cancelTransactionBtnResponsive").style.color = "#efefef" ;
    document.getElementById("refundTransactionBtnResponsive").style.color = "#F66B0E" ;

    document.getElementById("errorsOrders").style.display = "none" ;
 
    
}
function cancelTransactionResponsive() {
    document.getElementById("goodTransaction").style.animationName = "opacityDown" ;
    document.getElementById("goodTransaction").style.display = "none" ;
    document.getElementById("refundTransaction").style.animationName = "opacityDown" ;
    document.getElementById("refundTransaction").style.display = "none" ;
    document.getElementById("cancelTransaction").style.animationName = "opacityUp" ;
    document.getElementById("cancelTransaction").style.display = "block" ;


    
    document.getElementById("goodTransactionBtnResponsive").style.backgroundColor = "#20537547" ;
    document.getElementById("refundTransactionBtnResponsive").style.backgroundColor = "#20537547" ;
    document.getElementById("cancelTransactionBtnResponsive").style.backgroundColor = "#205375" ;
 
    document.getElementById("goodTransactionBtnResponsive").style.color = "#efefef" ;
    document.getElementById("refundTransactionBtnResponsive").style.color = "#efefef" ;
    document.getElementById("cancelTransactionBtnResponsive").style.color = "#F66B0E" ;

    document.getElementById("errorsOrders").style.display = "none" ;

 
    
}

//Page Liste commandes User

function userOrders() {
   
    document.getElementById("userRefunds").style.animationName = "opacityDown" ;
    document.getElementById("userRefunds").style.display = "none" ;
    document.getElementById("userOrders").style.animationName = "opacityUp" ;
    document.getElementById("userOrders").style.display = "block" ;
    document.getElementById("userRefundsBtn").style.backgroundColor = "#20537547" ;
    document.getElementById("userOrdersBtn").style.backgroundColor = "#205375" ;
    document.getElementById("userRefundsBtn").style.color = "#efefef" ;
    document.getElementById("userOrdersBtn").style.color = "#F66B0E" ;
 
    
}
function userRefunds() {
   
    document.getElementById("userOrders").style.animationName = "opacityDown" ;
    document.getElementById("userOrders").style.display = "none" ;
    document.getElementById("userRefunds").style.animationName = "opacityUp" ;
    document.getElementById("userRefunds").style.display = "block" ;
    document.getElementById("userOrdersBtn").style.backgroundColor = "#20537547" ;
    document.getElementById("userRefundsBtn").style.backgroundColor = "#205375" ;
    document.getElementById("userOrdersBtn").style.color = "#efefef" ;
    document.getElementById("userRefundsBtn").style.color = "#F66B0E" ;
 
    
}
function userOrdersResponsive() {
   
    document.getElementById("userRefunds").style.animationName = "opacityDown" ;
    document.getElementById("userRefunds").style.display = "none" ;
    document.getElementById("userOrders").style.animationName = "opacityUp" ;
    document.getElementById("userOrders").style.display = "block" ;
    document.getElementById("userRefundsBtnResponsive").style.backgroundColor = "#20537547" ;
    document.getElementById("userOrdersBtnResponsive").style.backgroundColor = "#205375" ;
    document.getElementById("userRefundsBtnResponsive").style.color = "#efefef" ;
    document.getElementById("userOrdersBtnResponsive").style.color = "#F66B0E" ;
 
    
}
function userRefundsResponsive() {
   
    document.getElementById("userOrders").style.animationName = "opacityDown" ;
    document.getElementById("userOrders").style.display = "none" ;
    document.getElementById("userRefunds").style.animationName = "opacityUp" ;
    document.getElementById("userRefunds").style.display = "block" ;
    document.getElementById("userOrdersBtnResponsive").style.backgroundColor = "#20537547" ;
    document.getElementById("userRefundsBtnResponsive").style.backgroundColor = "#205375" ;
    document.getElementById("userOrdersBtnResponsive").style.color = "#efefef" ;
    document.getElementById("userRefundsBtnResponsive").style.color = "#F66B0E" ;
 
    
}

//Affichage des erreurs et display none quand on navigue entre les onglets de la page 
function errorsDisplayOn() {
    document.getElementById("errorsOrders").style.display = "block" ;
}
function errorsDisplayOff() {
    document.getElementById("errorsOrders").style.display = "none" ;
}