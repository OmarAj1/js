const arr = ['hello', 'world', 'hello'];

function words(arr) {
    let newarr = [];
    for (const i = 0; i < arr.length; i++) {
        newarr[i] = arr[i].length;
    }
    console.log(`${newarr}`);
}