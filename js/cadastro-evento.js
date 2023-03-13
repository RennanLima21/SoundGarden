/* Local hoste da API */
import { postApiData } from "./host.js";
const BASE_URL = "https://soundgarden-api.vercel.app/events";

/* Criando elementos para 'inputs' querySelector */
const form = document.querySelector("form");
const inputNome = document.querySelector("#nome");
const inputPoster = document.querySelector("#poster");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

form.onsubmit = async (event) => {
  event.preventDefault();

  /* Const criando novo Evento */
  const novoEvento = {
    /* valores do usuario requeridos pela API */
    name: inputNome.value,
    poster: inputPoster.value,
    attractions: inputAtracoes.value.split(","),
    description: inputDescricao.value,
    scheduled: new Date(inputData.value).toISOString(),
    number_tickets: inputLotacao.value,
  };
  //console.log(novoEvento);

  const response = await postApiData({ pathUrl: "events", body: novoEvento });

  console.log(response);

  /* Alerta de resposta de evento cadastrado e voltando o usuario para admin*/
  if (response) {
    alert("Evento cadastrado com sucesso!");
    window.location.href = "admin.html";

    inputNome.value = "";
    inputPoster.value = "";
    inputAtracoes.value = "";
    inputDescricao.value = "";
    inputData.value = "";
    inputLotacao.value = "";
  }
};
