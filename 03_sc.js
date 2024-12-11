console.log("Grocery Store Discount");
let name1 = prompt("Enter your name");
let items = prompt("Tell an item you want to purchase");
let list1 = ["food", "water", "fruit", "vegetable", "dairy", "junk food"];
let amount = parseInt(prompt("Enter the price"));
let prize = ["10%", "20%", "30%", "40%", "50%"];
let prize1 = [10, 20, 30, 40, 50];

let discount = "";
let discount1 = 0;
let final;

// Determine discount based on the item
switch (items) {
    case "food":
        discount = prize[1];
        discount1 = prize1[1];
        break;
    case "water":
        discount = "free";
        discount1 = 0; // No cost for water
        break;
    case "fruit":
        discount = prize[2];
        discount1 = prize1[2];
        break;
    case "vegetable":
        discount = prize[3];
        discount1 = prize1[3];
        break;
    case "dairy":
        discount = prize[4];
        discount1 = prize1[4];
        break;
    case "junk food":
        discount = prize[2];
        discount1 = prize1[2];
        break;
    default:
        discount = "unavailable";
        discount1 = 0;
        break;
}

// Calculate final price
if (discount1 > 0) {
    final = amount - ((discount1 / 100) * amount);
} else {
    final = discount === "free" ? 0 : "N/A";
}

// Output results
console.log(discount);
console.log(discount1);
console.log(final);

// Alert messages
if (items === "water") {
    alert(`${items}s that you have purchased are free. So your total price is Rs 0.`);
} else if (!list1.includes(items)) {
    alert(`${items}s that you have purchased are unavailable.`);
} else {
    alert(`${name1}, you have purchased ${items}. ${items}s that you have purchased get ${discount} discount. So your total price is Rs ${final} with the discount.`);
}
