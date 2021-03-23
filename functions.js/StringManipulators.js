//capitalize words
function ucwords(str) {
    return str ? str.toLowerCase()
        .replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (f) => f.toUpperCase()) : '';
}