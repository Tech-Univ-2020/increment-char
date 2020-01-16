const increment = (ch) => {
    const i = (parseInt(ch, 36) + 1 ) % 36;
    return (!i * 10 + i).toString(36);
}

module.exports = increment;