function if_eq(a,b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
}

module.exports = if_eq;