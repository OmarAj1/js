//spain/isreal / egypt / china
const wpop = 7900;
const populations = [500, 300, 600, 1200];

function populationPercentages(populations) {
    const percentages = [];

    function percentageOfWorld1(a, wpop) {
        const res = (a / wpop) * 100;
        return res
    }
    for (let i = 1; i < populations.length; i++) {
        const a = populations[i];
        const ress = percentageOfWorld1(a, wpop);
        console.log(ress);
    }
}
populationPercentages(populations)