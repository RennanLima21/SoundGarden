const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")
let closeModalButton = document.querySelector("#close-modal");

const toggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}

let startReserve0 = document.getElementsByClassName("btn btn-primary")[0];

let startReserve1 = document.getElementsByClassName("btn btn-primary")[1];

let startReserve2 = document.getElementsByClassName("btn btn-primary")[2];

let startReserve3 = document.getElementsByClassName("btn btn-primary")[3];

let startReserve4 = document.getElementsByClassName("btn btn-primary")[4];

let startReserve5 = document.getElementsByClassName("btn btn-primary")[5];

[startReserve0, startReserve1, startReserve2, startReserve3, startReserve4, startReserve5, closeModalButton].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
})





let fname = document.getElementById('fname');
let femail = document.getElementById('femail');
let enviar = document.getElementById('enviar');
let form = document.getElementById('modal')

let fname_msg = document.getElementById('msg-vld-lname')
let femail_msg = document.getElementById('msg-vld-lemail')


fname.onblur = function(event){
    if(event.target.value.length < 3){
        fname_msg.textContent = "O valor digitado deve ser de no minimo 3 letras";
        fname_msg.style.display =  'block';
    }   else{
        fname_msg.style.display =  'none';
    }
}

femail.onblur = function(event){
    if(event.target.value.length < 11){
        femail_msg.textContent = "O valor digitado deve ser de no minimo 11 caracteres";
        femail_msg.style.display =  'block';
    } else{
        femail_msg.style.display =  'none';
    }
}

fname.onfocus = function(){
    fname_msg.style.display = 'none';
}

femail.onfocus = function(){
    femail_msg.style.display = 'none';
}

form.onsubmit = function(event){
    if(fname.value.length < 3){
        alert('Preencha os campos de forma adequada')
        event.preventDefault();
}
}

enviar.onclick = function(event){
    if(femail.value.length < 11){
        alert('Preencha os campos de forma adequada')
        event.preventDefault();
}
}




