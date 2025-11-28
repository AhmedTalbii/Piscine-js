const multiply = (a, b) => (a === 0 || b === 0) ? 0 : (b > 0) ? a + multiply(a, b - 1) : multiply(-a, -b);

const divide = (a, b) => {
    const sign = (a<0)^(b<0) ? -1 : 1;
    a = Math.abs(a);
    b = Math.abs(b);
    let res = 0;
    while (a > 0) {
        a -= b;
        res++;
    }
    return sign*res;
}

const modulo = (a, b) => {
    if (a < 0) return undefined;
    const sign = (a<0) ? -1 : 1;
    a = Math.abs(a);
    b = Math.abs(b);
    while (a >= b) {
        a -= b;
    }
    return sign*a;
};

console.log(modulo(8, 3));