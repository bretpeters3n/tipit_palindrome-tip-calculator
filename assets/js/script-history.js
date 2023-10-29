// display tipEvents data on history page
let history = $('#history');
// let history = document.getElementById('history');

let tipEvents = JSON.parse(localStorage.getItem('tipEvents'));
// console.log(tipEvents);
// history.innerText = tipEvents;

tipEvents.forEach(function (tipEvent, index, tipEvents) {

    let tipEventItemEl = $(
        '<div class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
    );

    // for (var i = 0; i < tipEvent.length; i++) {
        tipEventItemEl.text(tipEvent.highLow + ' ' + tipEvent.total);
        
    // }
    // tipEventItemEl.html(tipEvent[index]);

    // add delete button to remove shopping list item
    tipEventItemEl.append(
        '<button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full bg-white border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Remove</button>'
    );

    // print to the page
    history.append(tipEventItemEl);

});


  


// nav links
function navigate(url) {
    window.location.href=url;
}