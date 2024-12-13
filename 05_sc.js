console.log("Meal Planner")
const name1 = prompt("enter your name");
const day1 = ["morning", "afternoon", "evening", "night", "unknown"];
const eat = ["biscuit and short lunch", "food cooked in home", "lunch", "food with some cold drinks", "stone"];
let tim = prompt("enter whether it is pm or am").toLowerCase();

let t3;
let meal;
let final;

let a = parseInt(prompt("enter the time"), 10);
switch (true) {
    case (tim === "am"):
        {
            if (a >= 12 && a < 4) {
                t3 = day1[3];
                console.log(t3)
            }
            else if (a >= 4 && a < 10) {
                t3 = day1[0];
                console.log(t3);
            }
            else if (a >= 10 && a < 12) {
                t3 = day1[1];
                console.log(t3);
            }
            break;
        }
    case (tim === "pm"):
        {
            if (a >= 12 && a < 4) {
                t3 = day1[1];
                console.log(t3)
            }
            else if (a >= 4 && a < 10) {
                t3 = day1[2];
                console.log(t3);
            }
            else if (a >= 10 && a < 12) {
                t3 = day1[3];
                console.log(t3);
            }
            break;
        }
    default:
        {
            t3 = day1[4];
            console.log(t3)
            break;
        }
}


if (t3 === day1[0]) {
    meal = eat[0]
}
else if (t3 === day1[1]) {
    meal = eat[1]
}
else if (t3 === day1[2]) {
    meal = eat[2]
}
else if (t3 === day1[3]) {
    meal = eat[3]
}

else {
    meal = eat[4];
}


console.log(meal)

final = `welcome ${name1}. You must be hungry. As suggested by your time table you should eat the ${meal}`;
alert(final);



// console.log("Meal Planner");
// const name1 = prompt("enter your name");
// const day1 = ["morning", "afternoon", "evening", "night", "unknown"];
// const eat = ["biscuit and short lunch", "food cooked in home", "lunch", "food with some cold drinks", "stone"];
// let tim = prompt("enter whether it is pm or am").toLowerCase();
// let t3;
// let meal;
// let final;

// let a = parseInt(prompt("enter the time"), 10);

// switch (true) {
//     case (tim === "am"):
//         if (a >= 12 && a < 4) {
//             t3 = day1[3];
//             console.log(t3);
//         } else if (a >= 4 && a < 10) {
//             t3 = day1[0];
//             console.log(t3);
//         } else if (a >= 10 && a < 12) {
//             t3 = day1[1];
//             console.log(t3);
//         }
//         break;
//     case (tim === "pm"):
//         if (a >= 12 && a < 4) {
//             t3 = day1[1];
//             console.log(t3);
//         } else if (a >= 4 && a < 10) {
//             t3 = day1[2];
//             console.log(t3);
//         } else if (a >= 10 && a < 12) {
//             t3 = day1[3];
//             console.log(t3);
//         }
//         break;
//     default:
//         t3 = day1[4];
//         console.log(t3);
//         break;
// }

// if (t3 === day1[0]) {
//     meal = eat[0];
// } else if (t3 === day1[1]) {
//     meal = eat[1];
// } else if (t3 === day1[2]) {
//     meal = eat[2];
// } else if (t3 === day1[3]) {
//     meal = eat[3];
// } else {
//     meal = eat[4];
// }

// console.log(meal);

// final = `welcome ${name1}. You must be hungry. As suggested by your time table you should eat the ${meal}.`;
// alert(final);

