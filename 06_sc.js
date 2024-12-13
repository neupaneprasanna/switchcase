console.log("Weather Advice")
let name1 = prompt("enter your name");
let weather = prompt("enter the weather");
let weather1 = ["sunny", "rainy", "snowy", "cloudy"];
let cloth = ["thin and comfortable clothes", "rain coat or bring umbrella", "warm clothes", "thick clothes as it may rain"];
let a;
switch(weather){
    case weather1[0] : 
    {
a = cloth[0];
break;
    }
    case weather1[1] : 
    {
a = cloth[1];
break;
    }
    case weather1[2] : 
    {
a = cloth[2];
break;
    }
    case weather1[3] : 
    {
a = cloth[3];
break;
    }

    default : 
    {
        a = "nothing";
    }
}

console.log(a)
alert(` Hello ${name1}. It is ${weather} outside. So, try to wear ${a}.`)