function sum(a) {
    let result = 0;

    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            result += sum(a[i])
        } else {
            result += a[i];
        }
    }
    return result;
}

console.log(sum([1,[11,42,[8, 1], 4, [22,21]]]));