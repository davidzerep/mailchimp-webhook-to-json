'use strict';
module.exports = (body) => {
    const mapping = body.split('&').reduce((prev, curr) => { //convert to key value with dot notation keys
        const pair = curr.split('=');
        const replaceChars = { "[": ".", "]": "" };
        const key = decodeURIComponent(pair[0]).replace(/\[|\]/g, match => replaceChars[match]);
        const value = decodeURIComponent(pair[1]).replace("+", " ");
        prev[key] = value;
        return prev;
    }, {});

    //converts dot notation keys to nested object
    return Object.entries(mapping).reduce((o, [k, v]) => setValue(o, k, v), {});
}

function setValue(object, path, value) {
    let keys = path.split('.');
    let last = keys.pop();

    keys.reduce((o, k) => o[k] = o[k] || {}, object)[last] = value;
    return object;
}