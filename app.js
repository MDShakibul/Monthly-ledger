/* expenses function */
function allCost(expenseFood, expenseRent, expenseClothes){
    let foodCost =parseFloat (document.getElementById(expenseFood).value);
    let rentCost = parseFloat (document.getElementById(expenseRent).value);
    let clothesCost =parseFloat (document.getElementById(expenseClothes).value);

    let totaCost = foodCost+rentCost+clothesCost;

    return totaCost;

}

function getValue(getId){
    return parseFloat (document.getElementById(getId).value);
}


document.getElementById('btn-calculator').addEventListener('click',function(){


    let totalExpenses = allCost('food','rent','clothes');
    let income = getValue('total-income');
    if(!isNaN(totalExpenses) && !isNaN(income) ){
        if(income >= totalExpenses){
            let balance = income - totalExpenses;
            document.getElementById('total-expenses').innerHTML = totalExpenses;
            document.getElementById('total-balance').innerHTML = balance;
        }else{
            document.getElementById('more_expense_error').style.display = "block";
            document.getElementById('input_error').style.display = "none";
        }
    }else{
        document.getElementById('more_expense_error').style.display = "none";
        document.getElementById('input_error').style.display = "block";
    }

    

})

document.getElementById('btn-saving').addEventListener('click', function(){
    let income = getValue('total-income');
    let percentage = getValue('percentage');

    let savingAmount  = (income*percentage)/100;

    document.getElementById('saving-amount').innerHTML = savingAmount;
    let totalExpenses = allCost('food','rent','clothes');
    let balance = income - totalExpenses;

    let remainingBalance = balance - savingAmount;

    document.getElementById('remain-balance').innerHTML = remainingBalance;

})