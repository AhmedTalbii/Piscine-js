const arrToSet    = (arr) => new Set(arr);
const arrToStr    = (arr) => arr.join("");
const setToArr    = (set) => [...set];
const setToStr    = (set) => [...set].join("");
const strToArr    = (str) => str.split("");
const strToSet    = (str) => new Set(str.split(""));
const mapToObj    = (map) => Object.fromEntries(map);
const objToArr    = (obj) => [...Object.values(obj)];
const objToMap    = (obj) => new Map(Object.entries(obj));
const arrToObj    = (arr) => Object.fromEntries(arr.entries());
const strToObj    = (str) => Object.fromEntries([...str].entries());
const superTypeOf = (val) => {
    if (Array.isArray(val)) return 'Array';
    if (val === null) return 'null';
    if (val === undefined) return 'undefined';
    if (Object.prototype.toString.call(val) === "[object Function]") return 'Function';
    if (Object.prototype.toString.call(val) === "[object Map]") return 'Map';
    if (Object.prototype.toString.call(val) === "[object Set]") return 'Set';
    if (Object.prototype.toString.call(val) === "[object Object]") return 'Object';
    let res = typeof val;
    return res[0].toUpperCase() + res.slice(1).toLowerCase();
}
