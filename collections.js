const arrToSet    = (arr) => new Set(arr);
const arrToStr    = (arr) => arr.join("");
const setToArr    = (set) => [...set];
const setToStr    = (set) => [...set].join("");
const strToArr    = (str) => str.split("");
const strToSet    = (str) => new Set(str.split(""));
const mapToObj    = (map) => Object.fromEntries(map);
const objToArr    = (obj) => [...Object.values(obj)];
const objToMap    = (obj) => new Map(Object.entries(obj));
const arrToObj    = (arr) => new Object.fromEntries(arr.entries());
const strToObj    = (str) => new Object.fromEntries([...str].entries());
const superTypeOf = (val) => {
    if (Array.isArray(val)) return 'Array';
    if (val === null) return 'null';
    if (val === undefined) return 'undefined';
    if (Object.prototype.toString.call(val) === "[object Function]") return 'Function';
    return typeof val;
}