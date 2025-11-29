function triangle(str, n) {
    let res = "";
    for (let i = 1; i <= n; i++) res += str.repeat(i) + "\n";
    return res.slice(0, -1);
}