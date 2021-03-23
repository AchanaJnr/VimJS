//capitalize words
function ucwords(str) {
    return str ? str.toLowerCase()
        .replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (f) => f.toUpperCase()) : '';
}

//generate bankIds when creating new banks
function generateUniqueID() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 15; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

/** Returns true if phone number is in the correct format. */
function validatePhone(data) {
    return (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g).test(data)
}