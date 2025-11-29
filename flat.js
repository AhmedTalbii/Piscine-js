function flat(arr, n = 1, res = []) {
    for (let v of arr) {
        if (n > 0 && Array.isArray(v)) flat(v, n-1, res);
        else res.push(v);
    }
    return res;
}