// Create a function named slice that works like Array.slice() and String.slice().
// It takes 3 arguments:
// string or array to process.
// starting index.
// optional ending index.


function slice(ele, s, e = ele.length) {
    const n = ele.length;
    s = (s < 0) ? (n + s < 0) ? 0 : n + s : s;
    e = (e < 0) ? n + e : (e > n) ? n : e;
    let isArr = Array.isArray(ele), res = isArr ? [] : "";
    while (s < e) {
        if (isArr) res.push(ele[s]);
        else res += ele[s];
        s++;
    }
    return res;
}
