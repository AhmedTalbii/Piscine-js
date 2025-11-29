function chunk(arr, n) {
    let i = 0, j = n;
    let res = [];
    while (i < arr.length) {
        res.push(arr.slice(i, j));
        i = j;
        if (j + n > arr.length) j = arr.length;
        else j+=n;
    }
    return res;
}