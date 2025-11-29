function split(str, s) {
    if (str.length < s.length) return [""];
    let li = 0;
    let res = [];
    for (let i = 0; i < str.length-s.length+1; i++) {
        if (str.slice(i, i+s.length) === s) {
            res.push(str.slice(li, i));
            li = i+s.length;
        }
    }
    if (li <= str.length) res.push(str.slice(li, str.length));
    if (res.every((e) => e.length === 0)) res = res.slice(1);
    if (s.length === 0) return res.slice(1, -1);
    return res;
}

function join(arr, cut) {
    let res = (arr[0]) ? arr[0] : "";
    for (let i = 1 ; i < arr.length; i++) {
        res += cut + arr[i];
    }
    return res;
}
