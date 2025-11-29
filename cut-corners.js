function getThePoint(n) {
    n = Math.abs(n);
    let i = 0, s = 10000000000000000;
    while (s >= 1) {
        if (i + s <= n) i += s;
        else s /= 10;
    }
    return n-i;
}

function round(n) {
    let gt = getThePoint(n);
    if (n >= 0) {
        if (gt >= 0.5) return n-gt+1;
        else return n-gt;
    } else {
        if (gt <= 0.5) return n+gt;
        else return n+gt-1;
    }
}

function ceil(n) {
    let gt = getThePoint(n);
    if (n > 0) return n-gt+1;
    else return n+gt;
}

function floor(n) {
    let gt = getThePoint(n);
    if (n >= 0) return n-gt;
    else return n+gt-1;
}

function trunc(n) {
    let gt = getThePoint(n);
    return (n >= 0) ? n-gt : n+gt;
}