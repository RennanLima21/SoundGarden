/* Local hoste da API  "JS USANDO UM HOST"*/
import { getById, putApiData } from "./host.js";

/* Criando elementos para 'inputs' querySelector */
const form = document.querySelector("form");
const inputNome = document.querySelector("#nome");
const inputPoster = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

const id = new URLSearchParams(window.location.search).get("id"); //capturando o id do link
console.log(id);

const response = await getById({ pathUrl: "events", id: id });
console.log(response);

inputNome.value = response.name;
inputPoster.value = response.poster;
inputAtracoes.value = response.attractions;
inputDescricao.value = response.description;
inputData.value = response.scheduled.slice(0, 16);
inputLotacao.value = response.number_tickets;

form.onsubmit = async (event) => {
  event.preventDefault();

  const atualizarEvento = {
    name: inputNome.value,
    poster: inputPoster.value,
    attractions: inputAtracoes.value.split(","),
    description: inputDescricao.value,
    scheduled: inputData.value,
    number_tickets: inputLotacao.value,
  };

  const response = await putApiData({
    pathUrl: "events",
    body: atualizarEvento,
    id: id,
  });

  if (response) {
    alert("Evento Atualizado com sucesso!");
    window.location.href = "admin.html";
  }
};
