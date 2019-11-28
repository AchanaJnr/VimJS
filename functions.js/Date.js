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

// Invoked dateToday Function
console.log(dateToday());

// Function to check for date range...
let daysDifference = function(dateOne, dateTwo){
  strOne = dateOne.split('/'), strTwo = dateTwo.split('/');
  diff = new Date(strTwo[0], strTwo[1], strTwo[2]).setHours(12) - new Date(strTwo[0], strTwo[1], strTwo[2]).setHours(12);
  return Math.round(diff / 8.64e7);
}

// Invoked daysDifference Function
console.log(daysDifference(dateToday(), dateToday()))
