const allBtn = document.getElementsByClassName('select-bnt')
let seatCount = 0;



for (const button of allBtn) {

    button.addEventListener('click', function (e) {


        button.style.color = '#ffffff'
        button.style.backgroundColor = '#1DD100'
        button.disabled = true;

        seatCount = seatCount + 1;

        const seatName = e.target.innerText;


        const selectSeatContainer = document.getElementById('select-seat-container');

        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = seatName;

        // seat VS price
        const p2 = document.createElement('p');
        p2.innerText = ('Economoy');

        const p3 = document.createElement('p');
        p3.innerText = ('500');


        div.appendChild(p);
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

        // seats-left down
        const seatsLeft = document.getElementById('seats-left').innerText;
        const convertedSeatsLeft = parseInt(seatsLeft)
        document.getElementById('seats-left').innerText = convertedSeatsLeft - 1;


        selectSeatContainer.appendChild(div);

        // total price     
        const totalPrice = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt(totalPrice)
        const totalSum = convertedTotalPrice + 500;
        setInnerText('total-price', totalSum);



        // grand total price
        const grandTotal = document.getElementById('grand-total').innerText;
        const convertedGrandTotalPrice = parseInt(grandTotal)
        const grandTotalSum = convertedGrandTotalPrice + 500;

        setInnerText('grand-total', grandTotalSum);
        setInnerText('seatCount', seatCount);
    })
}


//  coupon code button 
document.getElementById('copupon-input').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const couponBtn = document.getElementById('copupon-btn');
    if (text === 'NEW15' || text === 'Couple 20') {
        couponBtn.removeAttribute('disabled');
    }
    else {
        couponBtn.setAttribute('disabled', true);
    }

})

// next-bnt disable 

document.getElementById('phone-number').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteBtn = document.getElementById('next-bnt');
    if (this.value.length > 10 || text === allBtn) {
        // ----------------------------------------------------
        // if (text === 'number' || text === '20') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }

})

// ###############################################

// $$$$$$$$$$$$$$$$$$$
// document.getElementsByClassName("select-bnt").addEventListener("click", function () {
// 
//     deleteBtn.removeAttribute('disabled') ,false;
// });

/* document.getElementById("phone-number").addEventListener("input", function () {
   
    if (this.value.length > 10) {

        document.getElementById("next-bnt").disabled = false;
    } else {

        document.getElementById("submitButton").disabled = true;
    }
}); */

// $$$$$$$$$$$$$$$$$$$

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

/* 
function grandTotalSum(category){
    // setInnerText('total-price', totalSum);
    const totalCost = document.getElementById('total-price').innerText;
    const convertedTotalCost = parseInt(totalCost);
    console.log(typeof  convertedTotalCost, 'wowowowowowow')

    if(category == 'NEW15'){
        // setInnerText('grand-total'),convertedTotalCost - 100;
        const fastcoupon = convertedTotalCost + 
        setInnerText('grand-total'),convertedTotalCost -100;
    }
    else{
        setInnerText('grand-total'),convertedTotalCost
    }
}  */

function success() {
    const headerContainer = document.getElementById("header-section");
    headerContainer.classList.add('hidden');

    const mainContainer = document.getElementById("main-container");
    mainContainer.classList.add('hidden');

    const modalSection = document.getElementById("modal-section");
    modalSection.classList.remove('hidden');


}
