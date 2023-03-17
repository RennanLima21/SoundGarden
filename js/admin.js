// Date.prototype.toLocaleDateString()
// The toLocaleString method returns a string with a language sensitive representation of the date portion of the Date object that it’s being called on.
import { getApiData } from "./host.js";

const tabela = document.querySelector("tbody");

const responseEvents = await getApiData({ pathUrl: "events" });
const responseBookings = await getApiData({ pathUrl: "bookings" });
console.log(responseEvents);
console.log(responseBookings);

responseEvents.forEach((item) => {
  tabela.innerHTML += `<tr>
    <th scope="row">${responseEvents.indexOf(item) + 1}</th>
    <td>${new Date(item.scheduled).toLocaleDateString("pt-BR")}
      </td>
    <td>${item.name}</td>
    <td>${item.attractions}</td>
    <td>
        <a href="reservas.html?id=${
          item._id
        }" class="btn btn-dark">ver reservas</a>
        <a href="editar-evento.html?id=${
          item._id
        }" class="btn btn-secondary">editar</a>
        <a href="excluir-evento.html?id=${
          item._id
        }" class="btn btn-danger">excluir</a>
    </td>
</tr>`;
});
