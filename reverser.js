function reverse(ele) {
    let iA = Array.isArray(ele), arr = iA ? ele : ele.split("");
    let s = 0, e = ele.length;
    while (s < e) {
        [arr[s], arr[e]] = [arr[e], arr[s]];
        s++;
        e--;
    }
    return iA ? arr : arr.join("");
}