function getEvents() {
  let endpoint = "https://soundgarden-api.vercel.app/events";
  fetch(endpoint)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        function verificaId(data){
            if (data.id != null)
            console.log(data.id)
        };

    // tentativa de formatar a data
    //    const option = {
    //     year: 'numeric',
    //     month: 'numeric',
    //     day: 'numeric'
    //    }
    //    const locale = 'pt-br'
    //    date = new Date(data.scheduled).toLocaleDateString( locale, option)
    //    console.log(date)

        let html = "";

        data.forEach((data) => {
        let htmlSegment = `<article id=${data._id} class="evento card p-5 m-3">
        <h2>${data.name}</h2> - <h2>${data.scheduled}</h2>
        <h4>${data.attractions}</h4>
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
