const is = {
    num: (arg) => /[0-9]/.test(arg),
    nan: (arg) => isNaN(arg),
    str: (arg) => typeof arg === "string",
    bool: (arg) => typeof arg === "boolean",
    undef: (arg) => typeof arg === "undefined",
    def: (arg) => typeof arg !== "undefined",
    arr: (arg) => Array.isArray(arg),
    obj: (arg) => Object.prototype.toString.call(arg) === "[object Object]",
    fun: (arg) => Object.prototype.toString.call(arg) === "[object Function]",
    truthy: (arg) => arg ? true : false,
    falsy: (arg) => !arg ? true : false
    
}