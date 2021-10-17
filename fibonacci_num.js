
function cache(fn) {
    const memo = new Map();
    return function (...args) {
        let key = args.length + args.join("+");
        if (memo.has(key)) {
            console.log(`Cached ${memo.get(key)}`)
            return memo.get(key);
        } else {
            let result = fn.apply(this, args);
            memo.set(key, result)
            console.log(`Calculation ${memo.get(key)}`)
            return result;
        }
    };
}


function findFibonacci(num) {

    if (num == 0) {
        return 0;
    }

    let first = 0;
    let second = 1;
    let third = first + second;

    while (third <= num) {
        first = second;
        second = third;
        third = first + second;
    }

    result = (Math.abs(third - num)
        >= Math.abs(second - num))
        ? second
        : third;

    return result;
};

const cachedFibonacci = cache(findFibonacci);

cachedFibonacci(50)
cachedFibonacci(60)
cachedFibonacci(60)
cachedFibonacci(0)
cachedFibonacci(0)
