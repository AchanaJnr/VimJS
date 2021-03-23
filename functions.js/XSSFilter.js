/**
 * Chidey abin banza.
 * @param {*} toOutput 
 */
 function szPreserver(toOutput) {
    if (typeof (toOutput) === 'string') {
        return toOutput.replace(/\&/g, '&amp;')
            .replace(/\</g, '&lt;')
            .replace(/\>/g, '&gt;')
            .replace(/\"/g, '&quot;')
            .replace(/\'/g, '&#x27');
        //.replace(/\//g, '&#x2F');
    } else {
        return toOutput
    }
}

function banzajs(string) {
    return /<(.*)>/.test(string);
};