const objectToParams = (search = {}) => {
    const value = Object.entries(search)
        .reduce(
            (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
            Object.keys(search).length ? '?' : ''
        )
        .replace(/&$/, '');
    return value;
};

export default objectToParams;
