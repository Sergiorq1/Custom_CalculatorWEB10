let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let years = parseFloat(document.getElementById('years').value);
    let months = parseFloat(document.getElementById('months').value);
    let days = parseFloat(document.getElementById('days').value);

    let daysAlive = document.getElementById('days-alive').value = (years*365) + (months*12) + days
    let secondsAlive = document.getElementById('seconds-alive').value = (years*31,536,000) + (months*2,592,000) + (days*86400)
})