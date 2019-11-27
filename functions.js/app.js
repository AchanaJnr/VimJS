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
console.log(moneyFormat(moneyNum, 'en', 2));