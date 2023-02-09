function sortWords(arrOfStrs) {
    return arrOfStrs.sort();
}

function makeAllCaps(arrOfStrs) {
    sortWords(arrOfStrs)
    return new Promise((resolve, reject) => {
        let newarr = arrOfStrs.map(element => {
            if (element === '') {
                reject(new Error('no enough letters'));
            } else {
                let stletter = element.charAt(0).toUpperCase();
                let rest = element.slice(1);
                return stletter + rest;
            }
        });
        resolve(newarr);
    });
}
result = makeAllCaps(["omar", "omar", 'a']);

result.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error.message);
});