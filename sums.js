function sums(n) {
    if (n === 0 || 1) return [];
    let res = [];
    let mArr = [];
    let exists = new Set();
    let rec = (c = 0) => {
        if (c > n) return;
        for (let i = 1; i < n; i++) {
            if (mArr.reduce((acc, ele) => acc + ele, 0) === n && !exists.has([...mArr].sort().join(""))) {
                exists.add([...mArr].sort().join(""));
                res.push([...mArr]);
            };
            mArr.push(i);
            rec(c+1);
            mArr.pop();
        }
    }
    rec();
    return res;
}