
function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
        new Date().getMinutes() * 60 + 
        new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    document.querySelector("#seconds").style.transform = `rotate(${(time * 6) + 180}deg)`;
    document.querySelector("#hour").style.transform = `rotate(${(time / 3600 * 30) + 180}deg)`;
    document.querySelector("#minutes").style.transform = `rotate(${(time / 60 * 6) + 180}deg)`;
}, 1000);