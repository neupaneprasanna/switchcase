console.log("Currency Converter");

let Currency = parseFloat(prompt("enter the nepali currency"));
let Converter = prompt("in which country's currency would you like to convert?");
let final;
let sign;
switch (Converter) {
    case  "australia":
        {
            final = Currency * 0.012;
            sign = "AUD";
            break;
        }

    case "america":
        {
            final = Currency * 0.0074;
            sign = "USD"
            break;
        }

    case  "canada":
        {
            final = Currency * 0.0104;
            sign = "CAD"
            break;
        }

    case "quatar":
        {
            final = Currency * 0.03;
            sign = "QAR"
            break;
        }

    case "saudi arabia":
        {
            final = Currency * 0.0277;
            sign = "SAR"
            break;
        }
    default:
        {
            final = "invalid";
            sign = ""
        }
}

console.log(final);

alert(`As suggested by you, ${Currency} NRS is converted to ${final} ${sign}.`);