function getThePoint(n) {
    let i = 0;
    while (i < n) {
        i++
    }
    t = i-n;
    return 1-t;
}

function round(n) {
    let gt = getThePoint(n);
    if (n >= 0) {
        if (gt >= 0.5) return n-gt+1;
        else return n-gt;
    } else {
        if (gt >= 0.5) return n-gt-1;
        else return n-gt;
    } 
}

function ceil(n) {

}

function floor(n) {

}

function trunc(n) {

}