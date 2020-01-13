// Code Saitama

// Function to format money
function moneyFormat(value, standard, dec = 0) {
    nf = new Intl.NumberFormat(standard, {
        minimumFractionDigits: dec,
        maximumFractionDigits: 2
    });
    return nf.format(Number(value) ? value : 0.00);
};

let moneyNum = 254000
console.log(moneyFormat(moneyNum, 'en', 1));

//let codeGenerator = (str, len) => `${str}-${Math.random().toString(36).substr(2, len).toUpperCase()}`;

console.log(codeGenerator('GH', 5));

function codeGenerator(str, len){
    return `${str}-${Math.random().toString(36).substr(2, len).toUpperCase()}`
}