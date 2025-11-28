function repeat(str, nbr) {
    let res = "";
    for (let i = 1; i <= nbr; i++) res += str;
    return res;
}

console.log(repeat("hello", 3));