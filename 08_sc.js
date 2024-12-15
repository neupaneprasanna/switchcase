console.log("Electricity Bill Calculator");

let type = ["residental", "commercial", "industrial",]
const name1 = prompt("enter your name");
let enter = prompt("enter the place you use electricity(residental, commercial, industrial)");
alert("the prize varies form the area you are using the electricity");
let unit = parseFloat(prompt("enter your unit"));
let money = 0;

switch(enter){
    case type[0] : 
    {
        if(unit<= 50)
        {
money = unit * 1000;
break;
        }
       else if(unit<= 150)
        {
money = (unit * 1000) + 2000;
break;
        }
        else if(unit< 250)
        {
money = (unit * 1000) + 4000;
break;
        }
        else if(unit>= 250)
        {
money = (unit * 1000) + 7000;
break;
        }
        else 
        {
money = 0;
break;
        }
    }
    case type[1] : 
    {
        if(unit<= 50)
        {
money = unit * 1500;
break;
        }
       else if(unit<= 150)
        {
money = (unit * 1500) + 2000;
break;
        }
        else if(unit< 250)
        {
money = (unit * 1500) + 4000;
break;
        }
        else if(unit>= 250)
        {
money = (unit * 1500) + 7000;
break;
        }
        else 
        {
money = 0;
break;
        }
    }
    case type[2] : 
    {
        if(unit<= 50)
        {
money = unit * 2000;
break;
        }
       else if(unit<= 150)
        {
money = (unit * 2000) + 2000;
break;
        }
        else if(unit< 250)
        {
money = (unit * 2000) + 4000;
break;
        }
        else if(unit>= 250)
        {
money = (unit * 2000) + 7000;
break;
        }
        else 
        {
money = 0;
break;
        }
    }
}

console.log(money)

alert(`hello ${name1}. Your inputed unit is ${unit}. As you are a ${enter}, your total price for this month is ${money}.`)