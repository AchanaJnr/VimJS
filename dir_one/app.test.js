// CodeSaitama

// Function for getting the current date. Formatted...
let getTodayDate = function(){
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	day.toString().length > 1 ? day = day : day = '0' + day

	return `${day}/${month}/${year}`;
}

// Keypress event to check for digits and dot input...

document.querySelector('.numbers').addEventListener('keypress', (evt) => {
	let evt_value = this.value;
	evt_value = evt_value.replace(/[^\d].+/, "");
	if((evt.which < 48 || evt.which > 57)){
		evt.preventDefault();
	}
});


function numberToMoney(value){
	nf = new Int.NumberFormat(standard, 
	{minimumFractionDigits: dec, maximumFractionDigits: 2});
	return nf.format(Number(value) ? value : 0.00);

}
