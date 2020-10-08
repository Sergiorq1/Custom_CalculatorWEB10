let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let years = parseFloat(document.getElementById('years').value);
    let tipPercentage = parseFloat(document.getElementById('tip_percentage').value);
    let people = parseFloat(document.getElementById('people').value);

    let computedTip = years / tipPercentage;
    let totalBill = document.getElementById('total_bill').value = years / people + computedTip / people;
    let tipAmount = document.getElementById('tip_amount').value = computedTip;
})