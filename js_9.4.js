function steps(n) {
    for (let i = 0; i < n; i++) {
        let mt = '';
        for (let j = 0; j < n; j++) {
            mt += '#';
        }
        console.log(mt);
    }

}
steps(3);