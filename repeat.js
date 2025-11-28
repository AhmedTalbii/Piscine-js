function repeat(str, nbr) {
    let res = str;
    for (let i = 2; i <= nbr; i++) res += str;
    return res;
}

console.log(repeat("hello", 3));