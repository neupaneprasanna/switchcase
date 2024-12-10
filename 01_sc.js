console.log("Day of the Week")

let dayNumber = parseInt(prompt("enter the number to know about the week"));
let dayname;
switch(dayNumber)
{
    case 1:
        {
          dayname = "sunday";
        break;  
        }
    case 2:
        {
          dayname = "monday";
        break;  
        }
    case 3:
        {
          dayname = "tuesday";
        break;  
        }
    case 4:
        {
          dayname = "wednesday";
        break;  
        }
    case 5:
        {
          dayname = "thursday";
        break;  
        }
    case 6:
        {
          dayname = "friday";
        break;  
        }
    case 7:
        {
          dayname = "saturday";
        break;  
        }
    default:
        {
         dayname = "entered day is invalid";  
         break;
        }
         
}

console.log(dayname);
alert(`the number ${dayNumber} represents the ${dayname}.`);




//since the function chapter has not been introduced. If you are familiar with function then use


// function getDayName(dayNumber) {
//     let dayName;
//     switch(dayNumber) {
//         case 0:
//             dayName = "Sunday";
//             break;
//         case 1:
//             dayName = "Monday";
//             break;
//         case 2:
//             dayName = "Tuesday";
//             break;
//         case 3:
//             dayName = "Wednesday";
//             break;
//         case 4:
//             dayName = "Thursday";
//             break;
//         case 5:
//             dayName = "Friday";
//             break;
//         case 6:
//             dayName = "Saturday";
//             break;
//         default:
//             dayName = "Invalid day number";
//     }
//     return dayName;
// }

// // Example usage
// console.log(getDayName(0)); // Output: Sunday
// console.log(getDayName(3)); // Output: Wednesday
// console.log(getDayName(6)); // Output: Saturday
// console.log(getDayName(7)); // Output: Invalid day number



