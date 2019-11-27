// Code Saitama

// Function for todays date...
let dateToday = function() {
    date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;

    day.toString().length > 1 ? day = day : day = `0${day}`;
    year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

console.log(dateToday());