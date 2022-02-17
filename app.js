document.getElementById('btn-calculator').addEventListener('click',function(){
    let foodCost =parseFloat (document.getElementById('food-cost').value);
    let rentCost = parseFloat (document.getElementById('rent-cost').value);
    let clothesCost =parseFloat (document.getElementById('clothes-cost').value);

    let totaCost = foodCost+rentCost+clothesCost;
    
    let income = parseFloat (document.getElementById('total-income').value);

    let balance = income - totaCost;
    document.getElementById('total-expenses').innerHTML = totaCost;
    document.getElementById('total-balance').innerHTML = balance;

})

document.getElementById('btn-saving').addEventListener('click', function(){
    let income = parseFloat (document.getElementById('total-income').value);
    let percentage = parseFloat (document.getElementById('percentage').value);

    let savingAmount  = (income*percentage)/100;

    document.getElementById('saving-amount').innerHTML = savingAmount;

    let foodCost =parseFloat (document.getElementById('food-cost').value);
    let rentCost = parseFloat (document.getElementById('rent-cost').value);
    let clothesCost =parseFloat (document.getElementById('clothes-cost').value);
    let totaCost = foodCost+rentCost+clothesCost;
    let balance = income - totaCost;

    let remainingBalance = balance - savingAmount;

    document.getElementById('remain-balance').innerHTML = remainingBalance;

})