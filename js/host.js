export const BASE_URL = "https://soundgarden-api.vercel.app/";

/* Const metodo GET  */
export async function getApiData({ pathUrl }) {
  const URL = pathUrl ? `${BASE_URL}${pathUrl}` : BASE_URL; // ternario__(Verdae_?)__(Falso_:)

  const response = await fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
}
/* GET byID */ //bookings/event/:eventID
export async function getById({ pathUrl, id }) {
  const URL = pathUrl ? `${BASE_URL}${pathUrl}/${id}` : BASE_URL; // ternario__(Verdae_?)__(Falso_:)

  const response = await fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
}

// POST
/* pathUrl, body (tranformado os argumentos em  {Objeto} para organizar a exibição de acordo com sua necessidade) */
export async function postApiData({ pathUrl, body }) {
  const URL = pathUrl ? `${BASE_URL}${pathUrl}` : BASE_URL;

  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
}


/* Const para PUT (editar evento) VER SE ESTA CERTA */
export async function putApiData({ pathUrl, id, body }) {
  const URL = pathUrl && id ? `${BASE_URL}${pathUrl}/${id}` : BASE_URL;

  const response = await fetch(URL, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
}


/* Const para DELETE (deletar evento)  VER SE ESTA CERTA */
export async function deleteApiData({ pathUrl, id }) {
  const URL = pathUrl && id ? `${BASE_URL}${pathUrl}/${id}` : BASE_URL;

  return await fetch(URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

}
