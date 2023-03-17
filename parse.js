export function stringToArray(string, separator = ", ") {
    return string.split(separator);
}

export function arrayToString(arr, separator = ", ") {
    return arr.join(separator);
}

export function stringToDate(dateString, separator = " ") {
    const dateAndTime = dateString.split(separator);

    const [day, month, year] = dateAndTime[0].split("/");

    const [hours, minutes] = dateAndTime[1].split(":");

    const isoString = ` ${
        year.length < 4 ? "20" + year : year
    }-${month}-${day}T${hours}:${minutes}:00.000z`;

    console.log('string no formato iso:', isoString);

    const date = new Date(isoString);

    console.log('objeto a partir da string iso', date)

    return date;
}

export function isoStringToLocaleDateString(isoString, options = {}) {
    const date = new Date (isoString);

    return date.toLocaleDateString("pt-br", options);
}