function entrar(){
   let resp = document.getElementById('resp')

   if (resp.value == '2012'){
      $("#acertou").modal('toggle');
   } else {
      $("#errou").modal('toggle');
   }
}

function sair(){
   localStorage.clear()
   window.location.href = "index.html";
}