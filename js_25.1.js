const hero = {
    health: 5,
    power: 68,
    getStrength: function() {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    }
}

function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}

// because we are passing a reference to the function itself 
// and since we cant modify whoIsStronger func 
// then we have to use bind() so getStrength func takes this as the "hero" obj
console.log(whoIsStronger(hero.getStrength.bind(hero)));