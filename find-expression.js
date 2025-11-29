function findExpression(n) {
    let res = "1";
    const rec = (i = 1) => {
        if (i === n) return true;
        if (i * 2 <= n && rec(i * 2)) {
            res += " "+add4;
            return true;
        }
        if (i + 4 <= n && rec(i + 4)) {
            res += " "+mul2;
            return true;
        }
        return false;
    }
    return (rec()) ? res : undefined;
}
