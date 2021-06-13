
let form = document.getElementById("form");

form.onsubmit = function(e){
    let email = document.getElementById('email').value
    if (!email.includes('.') || !email.includes('@')){
        e.preventDefault()
        alert('El email introducido no es válido.')
        }
	}
  

function finalizar(){
    alert('Tu cuenta se ha creado correctamente.')
}