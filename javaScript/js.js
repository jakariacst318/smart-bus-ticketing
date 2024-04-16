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
        p3.innerText = ('550');


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
        const totalSum = convertedTotalPrice + 550;
        setInnerText('total-price', totalSum);



        // grand total price
        const grandTotal = document.getElementById('grand-total').innerText;
        const convertedGrandTotalPrice = parseInt(grandTotal)
        const grandTotalSum = convertedGrandTotalPrice + 550;

        // next button  number input
        document.getElementById('phone-number').addEventListener('keyup', function (event) {
            const text = event.target.value;
            const nextBtn = document.getElementById('next-bnt');
            if (this.value.length > 10 || text === button) {
                nextBtn.removeAttribute('disabled');
            }
            else {
                nextBtn.setAttribute('disabled', true);
            }

        })



        setInnerText('grand-total', grandTotalSum);
        setInnerText('seatCount', seatCount);
    })
}

const clickButtons = document.getElementsByClassName("select-bnt");
const submitButton = document.getElementById("copupon-btn");
let clickCount = 0;

for (let i = 0; i < clickButtons.length; i++) {
    clickButtons[i].addEventListener("click", function () {
        clickCount++;
        if (clickCount === 4) {
            submitButton.disabled = false;
        }
    });
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
// discount show --------------------------------------------------------------------------


//  coupon code
function grandTotalcostCoupon() {

    const couponCodeInput = document.getElementById('copupon-input').value;
    const totalPrice = document.getElementById('total-price').innerText;

    const convertedTotalPrice = parseInt(totalPrice)
    const discount = convertedTotalPrice * 0.15;
    const discountCouple = convertedTotalPrice * 0.20;


    // discount  show  star
    document.getElementById("copupon-btn").value;
    document.getElementById("discount-container").innerText = "Discount Amount: "  + discount;
    // discount  show end

    if (couponCodeInput == 'NEW15') {
        setInnerText('grand-total', convertedTotalPrice - discount);
    }
    else if (couponCodeInput === 'Couple 20') {
        setInnerText('grand-total', convertedTotalPrice - discountCouple)
    }
    else if (couponCodeInput) {
        alert('Invalid Coupon Code')
    }
    else {
        setInnerText('grand-total', convertedTotalPrice)
    }

}


//  next button click / modal open
function success() {
    const headerContainer = document.getElementById("header-section");
    headerContainer.classList.add('hidden');

    const mainContainer = document.getElementById("main-container");
    mainContainer.classList.add('hidden');
    const footerContainer = document.getElementById("footer-section");
    footerContainer.classList.add('hidden');

    const modalSection = document.getElementById("modal-section");
    modalSection.classList.remove('hidden');


}

