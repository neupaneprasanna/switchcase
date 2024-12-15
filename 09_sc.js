console.log("Music Player Controls");

let comd = prompt("enter the command(play, pause, stop, skip, rewind)").toLowerCase();
let sore = ["playing music.....", "pausing music.....", "stoping music......", "skipping music......", "rewinding music....."];
let store;
switch(comd){
    case "play" :
        store = sore[0];
        break;
    case "play" :
        store = sore[1];
        break;
    case "play" :
        store = sore[2];
        break;
    case "play" :
        store = sore[3];
        break;
    case "play" :
        store = sore[4];
        break;
        default :
        store = "nothing";
        break;
}

console.log(`as per your command, I am ${store}`);
alert(`as per your command, I am ${store}`);

