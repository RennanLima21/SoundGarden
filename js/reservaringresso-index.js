const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const btnCloseModal = document.querySelectorAll("#close-modal");
const btnReservar = document.querySelectorAll(".btn-primary");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

btnReservar.forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
btnCloseModal.forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

let fname = document.getElementById('fname')
let femail = document.getElementById('femail')
let form = document.getElementById('modal')

let fname_msg = document.getElementById('msg-vld-lname')
let femail_msg = document.getElementById('msg-vld-lemail')

fname.onblur = function(event){
    if(event.target.value.length < 3){
        fname_msg.textContent = "O valor digitado deve ser de no minimo 3 caracteres";
        fname_msg.style.display =  'block';
    } else{
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




//USO DA API PARA RESERVAS

const formEl = document.querySelector("#modal");

const endpoint = 'https://soundgarden-api.vercel.app/bookings';

formEl.addEventListener("submit", async event => {
        event.preventDefault();
    
        const unReserva = {
           name: fname.value,
           email: femail.value,
           ingressos: fingresso.value
        };
    
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(unReserva)
        });
    
        const data = await response.json();
    
        console.log(data)
    })





