const allBtn = document.getElementsByClassName('select-bnt')
let seatCount = 0;



for (const button of allBtn) {

    button.addEventListener('click', function (e) {

        button.classList.add("select-seat-bg");
        button.disabled = true;
        seatCount = seatCount + 1;

        
        // const seatName = e.target.childNodes[0];
        const seatName = e.target.innerText;
        
        // console.log( e.target.innerText)
        
        const selectSeatContainer = document.getElementById('select-seat-container');
        // button.classList.add("select-seat-bg");
        // const li = document.createElement('li');

        // const p = document.createElement('p')
        // p.innerText = jsonString;

        // li.appendChild(p)
        // selectSeatContainer.appendChild(li)

        // ###############################################
        const div = document.createElement('div');

        const p = document.createElement('p');
        p.innerText = seatName;

        // CLASS VS PRICE
         const  p2 = document.createElement('p');
         p2.innerText = ('Economoy');

         const  p3 = document.createElement('p');
         p3.innerText = ('500');


        div.appendChild(p);
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);
        selectSeatContainer.appendChild(div);

        // TOTAL PRICE     
        const totalPrice = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt (totalPrice)
        document.getElementById('total-price').innerText = convertedTotalPrice + 500;
        // console.log(typeof convertedTotalPrice, 'ffffffffff')     

        setInnerText('seatCount', seatCount);
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}