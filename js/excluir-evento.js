/* Local hoste da API  "JS USANDO UM HOST"*/
import { deleteApiData, getById } from "./host.js";

const form = document.querySelector("form");
const inputNome = document.querySelector("#nome");
const inputPoster = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

const id = new URLSearchParams(window.location.search).get("id");

const response = await getById({ pathUrl: "events", id: id });

inputNome.value = response.name;
inputPoster.value = response.poster;
inputAtracoes.value = response.attractions;
inputDescricao.value = response.description;
inputData.value = response.scheduled.slice(0, 16);
inputLotacao.value = response.number_tickets;

form.onsubmit = async (event) => {
  event.preventDefault();

  const response = await deleteApiData({ pathUrl: "events", id: id });

  if (response.status == 204) {
    alert("Evento excluido com sucesso!!");
    window.location.href =
      window.location.pathname == "/SoundGarden/excluir-evento.html"
        ? `${window.location.origin}/SoundGarden/admin.html`
        : `${window.location.origin}/admin.html`;
  }
};
