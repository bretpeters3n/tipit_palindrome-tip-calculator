// target input and enter number
let tempTotal = document.getElementById('originalPrice');
tempTotal.value="69";

// target radio button and select it
let tempTipPerc = document.getElementById('tip-20-perc');
tempTipPerc.checked = true;

// target 'Calculate' botton and press is
output();

// nav links
function navigate(url) {
    window.location.href=url;
}


// tip choice acions
function tipChoice(choice) {
    if (choice=='high') {
        // console.log('You chose the high tip');
        let highLow = 'high';
        let total = document.getElementById('hTotal').innerText;
        let tip = document.getElementById('hTip').innerText;
        let tipPerc = document.getElementById('hTipPerc').innerText;
        console.log(highLow + ' ' + total + ' ' + tip + ' ' + tipPerc);
    } else if (choice=='low') {
        // console.log('You chose the low tip');
        let highLow = 'low';
        let total = document.getElementById('lTotal').innerText;
        let tip = document.getElementById('lTip').innerText;
        let tipPerc = document.getElementById('lTipPerc').innerText;
        console.log(highLow + ' ' + total + ' ' + tip + ' ' + tipPerc);
    } else {
        console.log('high or low not caught, error.');
    }
}