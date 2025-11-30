function findExpression(n) {
    let res = [];
    const rec = (i = 1) => {
        if (i === n) return true;
        if (i * 2 <= n && rec(i * 2) && i + 4 !== n) {
            res.unshift(mul2);
            return true;
        } else if (i + 4 <= n && rec(i + 4)) {
            res.unshift(add4);
            return true;
        }
        return false;
    }
    res = [...res.reverse()];
    res = (rec()) ? res : undefined;
    if (res) {res.unshift("1")};
    return (res) ? res.join(" ") : undefined;
}