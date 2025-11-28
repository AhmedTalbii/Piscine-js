function indexOf(arr, v, i = 0) {
    while (i < arr.length) {
        if (arr[i] === v) return i;
        i++;
    }
    return -1;
}

function lastIndexOf(arr, v, i = arr.length-1) {
    while (i >= 0) {
        if (arr[i] === v) return i;
        i--;
    }
    return -1;
}

function includes(arr, v) {
    return (indexOf(arr, v) >= 0) ? true : false;
}
