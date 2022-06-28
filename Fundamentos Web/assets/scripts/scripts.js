

/*
JS é Case Sensetive

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: 
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtnome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }
}

function validaEmail() {
    let txtemail = document.querySelector('#txtemail')
    if(email.value.indexOf('@')==1){
        txtemail.innerHTML = "E-mail válido"
        txtemail.style.color = 'green'
    }else{
        txtemail.innerHTML = "E-mail inválido"
        txtemail.style.color = 'red'
    }
}