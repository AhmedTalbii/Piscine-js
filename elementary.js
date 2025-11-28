const multiply = (a, b) => (a === 0 || b === 0) ? 0 : (b > 0) ? a + multiply(a, b - 1) : multiply(-a, -b);

const divide = (a, b) => {
    const sign = (a<0)^(b<0) ? -1 : 1;
    a = Math.abs(a);
    b = Math.abs(b);
    let res = 0;
    while (a >= b) {
        a -= b;
        res++;
    }
    return multiply(sign, res);
}

const modulo = (a, b) => {
    const sign = (a<0) ? -1 : 1;
    a = Math.abs(a);
    b = Math.abs(b);
    while (a >= b) {
        a -= b;
    }
    return multiply(sign, a);
};