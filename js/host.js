export const BASE_URL = 'https://soundgarden-api.vercel.app/';

export const getApiData = async ({ pathUrl }) => {
  const URL = pathUrl ? `${BASE_URL}/${pathUrl}` : BASE_URL; // ternário

  const response = await fetch(URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return await response.json();
};

export const postApiData = async ({ pathUrl, body }) => {
  const URL = pathUrl ? `${BASE_URL}${pathUrl}` : BASE_URL;

  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });

  return await response.json();
};

export const putApiData = async ({ pathUrl, body }) => {
  const URL = pathUrl ? `${BASE_URL}${pathUrl}` : BASE_URL;

  const response = await fetch(URL, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });

  return await response.json();
};
