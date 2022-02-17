/* expenses function */
function allCost(expenseFood, expenseRent, expenseClothes) {
  let foodCost = parseFloat(document.getElementById(expenseFood).value);
  let rentCost = parseFloat(document.getElementById(expenseRent).value);
  let clothesCost = parseFloat(document.getElementById(expenseClothes).value);

  if ((foodCost >= 0 || isNaN(foodCost)) && (rentCost >= 0 || isNaN(rentCost)) && (clothesCost >= 0 || isNaN(clothesCost))) {
    let totaCost = foodCost + rentCost + clothesCost;
    return totaCost;
  } else {
    return -1;
  }
}

function getValue(getId) {
  return parseFloat(document.getElementById(getId).value);
}

document
  .getElementById("btn-calculator")
  .addEventListener("click", function () {
    let totalExpenses = allCost("food", "rent", "clothes");
    let income = getValue("total-income");
    /* income validation */
    if (!isNaN(totalExpenses) && !isNaN(income)) {
      if (totalExpenses != -1 && income > 0) {
        if (income >= totalExpenses) {
          let balance = income - totalExpenses;
          document.getElementById("total-expenses").innerHTML = totalExpenses;
          document.getElementById("total-balance").innerHTML = balance;
          document.getElementById("more_expense_error").style.display = "none";
          document.getElementById("negative_error").style.display = "none";
          document.getElementById("input_error").style.display = "none";
        } else {
          document.getElementById("more_expense_error").style.display = "block";
          document.getElementById("input_error").style.display = "none";
          document.getElementById("negative_error").style.display = "none";
        }
      } else {
        document.getElementById("more_expense_error").style.display = "none";
        document.getElementById("negative_error").style.display = "block";
        document.getElementById("input_error").style.display = "none";
      }
    } else {
      document.getElementById("more_expense_error").style.display = "none";
      document.getElementById("negative_error").style.display = "none";
      document.getElementById("input_error").style.display = "block";
    }
  });
 

/*   saving section */
document.getElementById("btn-saving").addEventListener("click", function () {
  let income = getValue("total-income");
  let percentage = getValue("percentage");
       
  let totalExpenses = allCost("food", "rent", "clothes");


/* saving validation */
  if (!isNaN(percentage)) {
    if (percentage >= 0) {
      let savingAmount = (income * percentage) / 100;


      let balance = income - totalExpenses;

      let remainingBalance = balance - savingAmount;

      if (remainingBalance >= 0) {
        document.getElementById("saving-amount").innerHTML = savingAmount;
        document.getElementById("remain-balance").innerHTML = remainingBalance;

        document.getElementById("more_saving_error").style.display = "none";
        document.getElementById("percentage_negative_error").style.display = "none";
        document.getElementById("percentage_input_error").style.display = "none";
      } else {
        document.getElementById("more_saving_error").style.display = "block";
        document.getElementById("percentage_negative_error").style.display = "none";
        document.getElementById("percentage_input_error").style.display = "none";
      }
    } else {
      document.getElementById("more_saving_error").style.display = "none";
      document.getElementById("percentage_negative_error").style.display = "block";
      document.getElementById("percentage_input_error").style.display = "none";
    }
  } else {
    document.getElementById("more_saving_error").style.display = "none";
    document.getElementById("percentage_negative_error").style.display = "none";
    document.getElementById("percentage_input_error").style.display = "block";
  }


});
