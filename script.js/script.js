console.log("Hello!")
let euroElement = document.querySelector(".js-euro")
let plnElement = document.querySelector(".js-pln")
let formElement = document.querySelector(".js-form")
let resultElement = document.querySelector(".js-result")
let currencyElement = document.querySelector(".js-currency")


let euroRate = 4.52;
let usdRate = 4.24;
let poundRate = 5.29;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let pln = plnElement.value;
    let result = resultElement.value;

    console.log(pln)
    console.log(` PLN: ${plnElement.value}`)

    switch (currency) {
        case "EUR":
            result = pln / euroRate;
            break;
        case "USD":
            result = pln / usdRate;
            break;
        case "GBP":
            result = pln / poundRate;
            break;


    }


    console.log(result)
    resultElement.innerHTML = `${pln} PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;

});
