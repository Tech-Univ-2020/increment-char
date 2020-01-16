const fib = (num) => {
    if(num === 0) return [];
    const seq = [0, 1];

    for (let index = 2; index < num; index++) {
        seq.push(seq[index-1] + seq[index-2]);
    }

    return seq;
}

module.exports = fib;