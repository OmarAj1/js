    const string = "The more you know, the more you know that you don't know";
    const arr = string.split(" ");

    console.log(arr[arr.length - 3]);
    console.log(arr[arr.indexOf('you', 3)]);
    console.log(arr[arr.lastIndexOf('you')]);