// Date.prototype.toLocaleDateString()
// The toLocaleString method returns a string with a language sensitive representation of the date portion of the Date object that it’s being called on.

const url = "https://soundgarden-api.vercel.app/bookings"

async function getReservas(){

    let response = await fetch (url)
    let data = await response.json()
    console.log(data)
    console.log(response)
}

getReservas();

