function flat(arr, n = 1, res = []) {
    for (let v of arr) {
        if (n > 0 && Array.isArray(v)) flat(v, n-1, res);
        else res.push(v);
    }
    return res;
}

console.log([1, 2, [5, 7, [15, 87], 9], 7].flat(2));
console.log(flat([1, 2, [5, 7, [15, 87], 9], 7], 18));
