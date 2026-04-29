const prompt = require("prompt-sync")();
let oppomenthealth = 100;
let playerhealth = 50;


while(oppomenthealth > 0 && playerhealth > 0){
    let attack = prompt("what is your attak")
    
    if(attack.trim() === "punch"){
        console.log("you dealt 10 damage")
        oppomenthealth -= 10;
    } else if(attack.trim() === "kick"){
        console.log("you dealt 20 damage")
        oppomenthealth -= 20;
    } else {
        console.log("wrong input, you lost 10 health")
        playerhealth -= 10;
    }
    
    console.log("your health =", playerhealth)
    console.log("opponent health =", oppomenthealth)
}

console.log("game over")