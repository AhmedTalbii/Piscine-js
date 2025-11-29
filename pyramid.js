function pyramid(str, n) {
    let res = "";
    for (let i = 1; i <= n; i++) res += (" ".repeat(str.length)).repeat(n-i) + str.repeat(i) + str.repeat(i-1) + "\n";
    return res.slice(0, -1);
}