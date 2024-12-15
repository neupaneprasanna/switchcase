console.log("Grade Evaluator");

let name2 = prompt("Enter your name");
let roll = parseInt(prompt("Enter your roll number"));
let cmd = prompt("Enter your grade").toLowerCase();

const Grade = ["A+", "A", "B+", "B", "C+", "C", "FAIL", "INVALID"].map(grade => grade.toLowerCase());
const cmt = ["Perfect", "Outstanding", "Good", "Satisfactory", "Acceptable", "Bad", "Not acceptable. So try again"];
let input;

switch (cmd) {
    case Grade[0]:
        input = cmt[0];
        break;
    case Grade[1]:
        input = cmt[1];
        break;
    case Grade[2]:
        input = cmt[2];
        break;
    case Grade[3]:
        input = cmt[3];
        break;
    case Grade[4]:
        input = cmt[4];
        break;
    case Grade[5]:
        input = cmt[5];
        break;
    case Grade[6]:
        input = cmt[6];
        break;
    default:
        input = cmt[7];
        break;
}

console.log(`Hello ${name2}. Your roll number is ${roll}. Regarding your result, you got ${cmd}. So your result is ${input}.`);
alert(`Hello ${name2}. Your roll number is ${roll}. Regarding your result, you got ${cmd}. So your result is ${input}.`);
