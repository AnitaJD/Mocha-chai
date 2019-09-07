module.exports = (someString) => {
    let revStr = someString.split('');
    revStr = revStr.reverse().join('');
    return revStr;
}