//OOP Practice


// AURORA RPG
console.log("\n***********************AURORA**********************");

let aurora = {
    name: "Aurora",
    strength: 150,
    health: 50,
    xp: 0,
    describe(){
            console.log(`${this.name} has health of ${this.health}, experience of ${this.xp}, and strength of ${this.strength}`);
    }
};


aurora.describe();
// Aurora is harmed by an arrow
aurora.health -= 20;
aurora.describe();
//Aurora equips a strength necklace
aurora.strength += 10;
aurora.describe();
// Aurora learned a new skill
aurora.xp += 15;

aurora.describe();


// DOG 
console.log("\n***********************DOG**********************");

let dog = {
    name: "Echo",
    species: "border collie/heeler",
    size: "50",
    bark(){
        return "Woof!";
    }
};

console.log(`${dog.name} is a ${dog.species} measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


// BANK 
console.log("\n***********************BANK ACCOUNT**********************");
let account = {
    name: "Alex",
    balance: 0,
    credit(x){
        this.balance += x;
    },
    describe(){
        console.log(`owner: ${this.name}, balance: $${this.balance}`);
    }
}

account.describe();
account.credit(170);
account.describe();