const mycountry = {
    country: 'jordan',
    capital: 'amman',
    language: 'arabic',
    population: 20,
    neighbours: ['turkey', 'iraq', 'seudi arabia', 'and lebenon'],
    discribe: function() {
        console.log(`${this.country} has ${this.population} people, their main language is ${this.language},they have ${mycountry.neighbours.length} neighbouring countries and a capital called ${this.capital}. `)
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}
mycountry.discribe();