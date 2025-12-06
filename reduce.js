function reduce(arr, fn) {
    const n = arr.length;
    if (n < 1) throw "error";
    let res;
    for (let i = 0; i < n; i++) res = fn(arr[i], i, arr);
    return res;
}

function reduceRight(arr, fn) {
    const n = arr.length;
    if (n < 1) throw "error";
    let res;
    for (let i = n - 1; i >= 0; i--) res = fn(arr[i], i, arr);
    return res;
}

function fold(arr, fn, start) {
    const n = arr.length;
    if (n < 1) throw "error";
    let res = start;
    for (let i = 0; i < n; i++) res = fn(arr[i], i, arr);
    return res;
}

function foldRight(arr, fn, start) {
    const n = arr.length;
    if (n < 1) throw "error";
    let res = start;
    for (let i = n - 1; i >= 0; i--) res = fn(arr[i], i, arr);
    return res;
}
