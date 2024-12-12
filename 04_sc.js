console.log("Traffic Light System");
let a = prompt("enter the light(red, green, yellow)");
let light1 = ["yellow", "green", "red"];
let light;
let prec;

switch(a){
    case "red" :
        {
            light = "stop";
            prec = "you are putting your life in danger";
            break;
        }
        case "yellow": 
        {
            light = "prepare to move or stop";
            prec = "be ready to move";
            break;
        }
        case "green": 
        {
            light = "move";
            prec = "go fast as you can";
            break;
        }
        default: 
        {
            light = "invalid";
            break;
        }
    }

        if(!light1.includes(a))
        {
            alert("you have inputed invalid traffic light");
        }
        else{
            console.log(light);
        alert(`please ${light}.${prec}`);
        }



