function goforit(listOfNeighbours) {
    listOfNeighbours = [
        ["Canada", "Mexico"],
        ["Spain"],
        ["Norway", "Sweden", "Russia"]
    ];

    let i = 0;
    while (i < listOfNeighbours.length) {
        let j = 0;
        while (j < listOfNeighbours[i].length) {
            console.log(`Neighbour: ${listOfNeighbours[i][j]} `);
            j++;

        }
        i++;

    }
}
goforit();
// for loop is better  
// less code less possibilities of errors