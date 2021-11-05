
//document.getElementById("booknow").addEventListener("click",finalSubmit);
document.getElementById('first-plus-btn').addEventListener("click", function () {
    quantityChange(true, "first-count");
})
document.getElementById('first-minus-btn').addEventListener("click", function () {
    quantityChange(false, "first-count");
})


// economy class event handlar...
document.getElementById('economy-plus-btn').addEventListener("click", function () {
    quantityChange(true, "economy-count");
})

document.getElementById('economy-minus-btn').addEventListener("click", function () {
    quantityChange(false, "economy-count");
}) 
// ticket quantity function 
function quantityChange(isIncrease, id) {
    const input = document.getElementById(id);
    const count = parseInt(input.value);
    let newCount = count;
    if (isIncrease == true) {
        newCount = count + 1;
    }
    if (isIncrease == false && newCount > 0) {
        newCount = count - 1;
    }
    input.value = newCount;
    totalPrice();
}

// total price calculation function...
function totalPrice() {
    const firstCount = document.getElementById('first-count');
    const firstCountNumber = parseInt(firstCount.value);

    const economyCount = document.getElementById('economy-count');
    const economyCountNumber = parseInt(economyCount.value);

    // subtotal price...
    const subTotalPrice = (firstCountNumber * 90) + (economyCountNumber * 68);
    document.getElementById('sub-total').innerText = subTotalPrice;

    // sub total price..
    const vat = subTotalPrice * 0.1;
    document.getElementById('total-vat').innerText = vat;

    // total price...
    const totalTicketPrice = subTotalPrice + vat;
    document.getElementById('total-price').innerText = totalTicketPrice;
}

function afterSubmit(id) {
    document.getElementById(id).value = "";

}

function afterSubmitInnerText(id) {
    document.getElementById(id).value = "0";
}

function finalSubmit(){
    var x = document.getElementById("economy-count").value ;

 alert("Thank you for flying with us");
}