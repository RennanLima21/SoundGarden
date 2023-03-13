export const BASE_URL = 'https://soundgarden-api.vercel.app/';

export async function getApiData({ pathUrl }) {
  const URL = pathUrl ? `${BASE_URL}/${pathUrl}` : BASE_URL; // ternario__(Verdae_?)__(Falso_:)

  const response = await fetch(URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return await response.json();
};

/* pathUrl, body (tranformado os argumentos em  {Objeto} para organizar a exibição de acordo com sua necessidade) */
export async function postApiData({ pathUrl, body }) {
  const URL = pathUrl ? `${BASE_URL}${pathUrl}` : BASE_URL;

  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });

  return await response.json();
};

export async function putApiData ({ pathUrl, id, body }) {
  const URL = pathUrl && id ? `${BASE_URL}${pathUrl}/${id}` : BASE_URL;

  const response = await fetch(URL, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });

  return await response.json();
};
