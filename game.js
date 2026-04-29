const prompt = require("prompt-sync")();
console.log("welcome to rumble fights. you are up against crackynacky today")
const username=prompt("what do you want your username to be?" )
console.log("welcome", username)
function jackGuy(){
    console.log("your stats are great endurance")
    console.log("suspeactable to crackynacky sneak attaks so watch out")
    console.log("you start with 50 health so be very carefull")
    console.log("lets have some fun and try not to die")
}
jackGuy()

function crackyNacky(){
    console.log("cracky nacky starts with x100 health")
    console.log("cracky nacky deals 20 damge on good hits")
    console.log("cracky nacky has weak endurance so try and wear her out")
    console.log("good luck")
}
crackyNacky()

function attakS(){
    console.log("fist punch deals 20 damage but can backfire and leave you with 20 less health")
    console.log("kick deals 5 damage but is alot more likely to land")
    console.log("strive hit is the most effective but requires you to risk dying to use it")
}
let oppomenthealth = 100;
let playerhealth = 50;
let firstattak = prompt("what is your first attak")
let kick = 20
let punch = 10
if(firstattak .trim() === "punch"){
    console.log("you dealt 10 damage")
oppomenthealth -= 10;
}
else if(firstattak .trim() === "kick"){
    console.log("you dealt 20 damage")
oppomenthealth -=20;
}else {
    console.log("you took too long or input the wrong awnser and lost 20 health")
playerhealth -=10;
}
console.log("your new health =", playerhealth)
console.log("your new opppoment health =",oppomenthealth)