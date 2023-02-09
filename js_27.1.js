async function greater_than_10(n) {
    n = Math.random() * 100;
    return new Promise((res, rej) => {
            if (n > 10) {
                res();
            } else {
                rej();
            }
        })
        .then(() => {
            console.log("num : greater than 10");
        })
        .catch(() => {
            console.log("num : an Err");
        });
}

console.log(greater_than_10());