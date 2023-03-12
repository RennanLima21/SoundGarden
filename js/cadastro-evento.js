/* Local hoste da API */

const BASE_URL = 'https://soundgarden-api.vercel.app/events'

/* Criando elementos para 'inputs' querySelector */
const form = document.querySelector('form')
const inputNome = document.querySelector('#nome')
const inputPoster = document.querySelector('#poster')
const inputAtracoes = document.querySelector('#poster')
const inputDescricao = document.querySelector('#descricao')
const inputData = document.querySelector('#data')
const inputLotacao = document.querySelector('#lotacao')

form.onsubmit = async (event) =>{
  event.preventDefault();


}