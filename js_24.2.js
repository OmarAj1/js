class Pokemon {
    constructor(pokemonName, pokemonType,
        pokemonAttackList) {
        this.name = pokemonName;
        this.type = pokemonType;
        this.attackList = pokemonAttackList;
    }
    callPokemon() {
        console.log(`I choose you ${this.name}`);
    }
    Attack(param) {
        console.log(`${this.name} used ${this.attackList[param]}`);
    }
}
const Pokemon1 = new Pokemon("mo", "fire", ["", 'fire arm', 'water damage']);
const Pokemon2 = new Pokemon("lo", "fire", ["", 'fire works', 'water waterfall']);
const Pokemon3 = new Pokemon("ss", "fire", ["", 'ice arm', 'iceAge']);

// Pokemon1.callPokemon();
Pokemon1.Attack(1);