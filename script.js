const toPay = document.querySelector("#price");
const numberPeople = document.querySelector("#people");
const choseTip = document.querySelector("select");
const buttonCount = document.querySelector(".count");
const button2 = document.querySelector(".button2");
const info = document.querySelector(".cost-info");
const result = document.querySelector(".cost");
const error = document.querySelector(".error");


    const calculations = () => {
        let wynik = (parseFloat(toPay.value) + (parseFloat(toPay.value) * parseFloat(choseTip.value))) / parseInt(numberPeople.value);
        info.style.display = 'block';
        result.textContent += wynik.toFixed(2);

    }
    
    const buttonFcn = () => {
        // drugi sposób
        if(toPay.value == '' || numberPeople.value == '' || choseTip.value == 0 ) {
            info.style.display = 'none';
            error.textContent = "wypełnij wszystkie pola! ";
        }
        
        else if(result.textContent) { 
            error.style.color = 'green';
            error.textContent = "naciśnij przycisk od nowa ";
            button2.style.display = 'block';
            info.textContent = "";
        }
        
        else {
            calculations();
            error.textContent = "";
        }
    }

    const button2Fcn = () => {
        window.location.reload();
    }
    
    buttonCount.addEventListener("click", buttonFcn);
    button2.addEventListener("click", button2Fcn);


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