//API
import {getApiData} from './host.js';
import { arrayToString, isoStringToLocaleDateString } from "./parse.js";

const response = await getApiData({pathUrl: 'events'})

console.log(response)


// //RETORNANDO NOS CARDS
// const card = document.querySelector("evento card p-5 m-3");

// const responseEvents = await getApiData({ pathUrl: "events" });
// console.log(responseEvents);

// responseEvents.forEach((item) => {
//   article.innerHTML += `<article>
//     ${responseEvents.indexOf(item) + 1}</article>
//     <h2>${item.name}</h2>
//     <h4>${item.attractions}</h4>
//     <p>${item.description}</p>
//        </article>`;
// });

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