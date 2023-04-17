
let today = new Date();
let month = today.getMonth() + 1;
if (month < 10){
    month = `0${month}`;
}
let day = today.getDate();
if (day < 10) {
    day = `0${day}`;
}
let year = today.getFullYear();
//console.log(`simple date is ${month}/${day}/${year}`);
let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();
//console.log(`simple time is ${hour}:${minute}:${seconds}`);
let todayFormatted = `${month}/${day}/${year} ${hour}:${minute}:${seconds}`;
//console.log(todayFormatted);


let todayTime = new Date()
let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(today);
let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(today);
let da = new Intl.DateTimeFormat('en', { day: '2-digit'}).format(today);
let hh = new Intl.DateTimeFormat('en', { hour: 'numeric'}).format(today);
let mm = new Intl.DateTimeFormat('en', { minute: '2-digit'}).format(today);
let ss = new Intl.DateTimeFormat('en', { second: '2-digit'}).format(today);
let todaysDate = `${mo}/${da}/${ye} ${hh}:${mm}:${ss}`;
console.log(`today is:  ${todaysDate}`)

// function getNextMonth(month){
//     let monthNum = parseInt(month);
//     let nextMonth;
//     if (monthNum === 12){
//         nextMonth = "01";
//     }

// }

function getToday(){
    let today = new Date();
    let month = today.getMonth() + 1;
    if (month < 10){
        month = `0${month}`;
    }
    let day = today.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let year = today.getFullYear();
    //console.log(`simple date is ${month}/${day}/${year}`);
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    if (seconds < 10 ) {
        seconds = `0${seconds}`
    }
    if (minute < 10) {
        minute = `0${minute}`
    }
    if (hour < 10) {
        hour = `0${hour}`
    }
    //console.log(`simple time is ${hour}:${minute}:${seconds}`);
    let todayFormatted = `${month}/${day}/${year} ${hour}:${minute}:${seconds}`;
    return todayFormatted;
}

console.log(getToday());

function getDepartureDate(){
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    let month = tomorrow.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`
    }
    let day = tomorrow.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let year = tomorrow.getFullYear();
    //console.log(`simple date is ${month}/${day}/${year}`);
    let hour = tomorrow.getHours();
    let minute = tomorrow.getMinutes();
    let seconds = tomorrow.getSeconds();
    if (seconds < 10 ) {
        seconds = `0${seconds}`
    }
    if (minute < 10) {
        minute = `0${minute}`
    }
    if (hour < 10) {
        hour = `0${hour}`
    }
    //console.log(`simple time is ${hour}:${minute}:${seconds}`);
    let tomorrowFormatted = `${month}/${day}/${year} ${hour}:${minute}:${seconds}`;
    return tomorrowFormatted;
}

console.log(getDepartureDate());

function getReturnDate(){
    let returnDate = new Date();
    returnDate.setDate(today.getDate()+5);
    let month = returnDate.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`
    }
    let day = returnDate.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let year = returnDate.getFullYear();
    //console.log(`simple date is ${month}/${day}/${year}`);
    let hour = returnDate.getHours();
    let minute = returnDate.getMinutes();
    let seconds = returnDate.getSeconds();
    if (seconds < 10 ) {
        seconds = `0${seconds}`
    }
    if (minute < 10) {
        minute = `0${minute}`
    }
    if (hour < 10) {
        hour = `0${hour}`
    }
    //console.log(`simple time is ${hour}:${minute}:${seconds}`);
    let returnDateFormatted = `${month}/${day}/${year} ${hour}:${minute}:${seconds}`;
    return returnDateFormatted;
}

console.log(getReturnDate());