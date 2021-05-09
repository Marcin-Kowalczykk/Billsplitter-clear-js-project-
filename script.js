const toPay = document.querySelector("#price");
const numberPeople = document.querySelector("#people");
const choseTip = document.querySelector("#tip");
const buttonCount = document.querySelector(".count");
const button2 = document.querySelector(".button2");
const info = document.querySelector(".cost-info");
const info2 = document.querySelector('.cost-info2');
const result = document.querySelector(".cost");
const result2 = document.querySelector('.cost2');
const error = document.querySelector(".error");
const lang = document.querySelector("#lang");
// lang elements 
const label = document.querySelectorAll("label");
const tipLabel = document.querySelector("#tipLabel");
const header = document.querySelector('#header');
const header2 = document.querySelector('#header2');

    const calculations = () => {
        let wynik = (parseFloat(toPay.value) + (parseFloat(toPay.value) * parseFloat(choseTip.value))) / parseInt(numberPeople.value);
        info.style.display = 'block';
        result.textContent += wynik.toFixed(2);
        if(lang.value == 'eng') {
            info.style.display = 'none';
            info2.style.display = 'block';
            result2.textContent += wynik.toFixed(2);
        }
    }
    
    const buttonFcn = () => {
        // drugi sposób
        if(toPay.value == '' || numberPeople.value == '' || choseTip.value == 0 ) {
            info.style.display = 'none';
            error.textContent = 'Wypełnij wszystkie pola';
            if(lang.value == 'eng') {
                info2.style.display = 'none';
                error.textContent = "Fill in all fields";
            }
        }
        else if(result.textContent) { 
            error.style.color = 'green';
            error.textContent = 'Naciśnij przycisk "Od nowa" ';
            button2.style.display = 'block';
            info.textContent = "";
            if(lang.value == 'eng') {
                info2.style.display = 'none';
                error.textContent = 'Click button "New"';
            }
        }
        else {
            calculations();
            error.textContent = "";
        }
    }

    const button2Fcn = () => {
        window.location.reload();
    }

    const langSelect = () => {
        if(lang.value == "eng") {
            label[0].textContent = 'Amount to pay: ';
            label[1].textContent = 'Number of people: ';
            tipLabel.textContent = 'Tip to leave: ';
            buttonCount.textContent = 'Calculate' ;
            choseTip[0].textContent = 'Chose tip [%]' ;
            header.textContent = 'Billsplitter';
            header2.textContent = 'Share the bill with your friends';
            button2.textContent = 'New'; 
        }
        else {
            window.location.reload();
        }
    }
    // events
    buttonCount.addEventListener("click", buttonFcn);
    button2.addEventListener("click", button2Fcn);
    lang.addEventListener("input", langSelect);

    // pierwszy sposób
        /*
        if(toPay.value > 0 && numberPeople.value > 0 && choseTip.value > 0 && choseTip.value <= 0.2 ) {
            calculations();
            error.textContent = "";
        }
        else {
            info.style.display = 'none';
            error.textContent += "wypełnij wszystkie pola";
        }
        */



        // trzeba pozmieniac "" na ''