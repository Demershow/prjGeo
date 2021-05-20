// This is a JavaScript file

$(document).on("click", "#alerta", function(){
  
  navigator.notification.alert("Minha mensagem", null,"Aviso!", "Aceito")
});


$(document).on("click", "#Confirm", function(){
  function confirm (buttonIndex){
  if(buttonIndex==1){
    navigator.notification.alert("Escolheu a opção A");
  }else{
navigator.notification.alert("Escolheu a opção B");
  }

  }
  navigator.notification.confirm("Escolha entre A ou B", confirm,"Escolha:", ['A','B']);
});

$(document).on("click", "#bip", function(){
  
 navigator.notification.beep(3);
});

$(document).on("click", "#vibrar", function(){
  
 navigator.vibrate(4000)

});

function mostraMapa(lat, long){
   L.mapquest.key = 'cFKtazYc2G6FNy8y5cS3GkhgGdCXo0HD';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });
      map.addControl(L.mapquest.control());
}
$(document).on("click", "#local", function(){
  var onSuccess = function(position) {
    mostraMapa(position.coords.latitude, position.coords.longitude)
      };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});