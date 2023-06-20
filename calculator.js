let calculations = JSON.parse(localStorage.getItem('calculations')) ||
'';
//display calculations when page first load
 displayCalculations();


const updateCalculations = (input) => {
 calculations = calculations + input;  // this is just adding two strings, not calculations
 displayCalculations();
 //storing data
 localStorage.setItem('calculations', JSON.stringify(calculations));
}

function displayCalculations () {
document.querySelector('.js-preview')
 .innerHTML = calculations;
}