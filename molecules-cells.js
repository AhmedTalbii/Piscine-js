function RNA(str) {
    const rna = ["G", "C", "T", "A"];
    const dna = ["C", "G", "A", "U"];
    return str.split("").map(e => dna[rna.indexOf(e)]).join("");
}

function DNA(str) {
    const dna = ["C", "G", "A", "U"];
    const rna = ["G", "C", "T", "A"];
    return str.split("").map(e => rna[dna.indexOf(e)]).join("");
}