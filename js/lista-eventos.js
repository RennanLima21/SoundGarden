import { arrayToString, isoStringToLocaleDateString } from "./parse.js";

function getEvents() {
  let endpoint = "https://soundgarden-api.vercel.app/events";
  fetch(endpoint)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        let html = "";

        data.forEach((data) => {
        let htmlSegment = `<article id=${data._id} class="evento card p-5 m-3">
        <h2>${data.name} - ${isoStringToLocaleDateString(data.scheduled)}</h2>
        <h4>${arrayToString(data.attractions)}</h4>
        <p>${data.description}</p>
        <a href="#" class="btn btn-primary">reservar ingresso</a>
        </article>`;

        html += htmlSegment;

        });
        const eventsContainer = document.querySelector("#events-container");
        eventsContainer.innerHTML = html;
    });

}
getEvents()
