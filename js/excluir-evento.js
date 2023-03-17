/* Local hoste da API  "JS USANDO UM HOST"*/
import { getApiData } from "./host.js";
const BASE_URL = "https://soundgarden-api.vercel.app/events";

/* Criando elementos para 'inputs' querySelector */
const form = document.querySelector("form");
const inputNome = document.querySelector("#nome");
const inputPoster = document.querySelector("#poster");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

const id = new URLSearchParams(window.location.search).get("eventId");

/*  Colocar o HOST do GET correto */

// const respose = getApiData

const editResponse = await response.json();
inputNome.value = editResponse.name;
inputPoster.value = editResponse.poster;
inputAtracoes.value = editResponse.atracoes;
inputDescricao.value = editResponse.description;
inputData.value = editResponse.scheduled.slice(0, 16);
inputLotacao.value = editResponse.number_tickets;

form.onsubmit = async (event) => {
  event.preventDefault();

  /* try {    o porque do TRY  E COLOCAR O deleteApiData
    const del = {
        method: "DELETE",
        headers: { "Content-Type" : "application/json" },
        redirect: "follow",
    };
    const response = await fetch(`${URL}/events/${id}`, del);
    if (response.status === 204) {
        alert('Evento excluído com sucesso!');
        window.location.href = "admin.html"
    } */
};
