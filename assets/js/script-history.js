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
        '<button id=' + index + ' class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full bg-white border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 delete-item-btn" data-index-number=' + index + '>Remove</button>'
    );

    // print to the page
    history.append(tipEventItemEl);

});

function handleRemoveItem(event) {
    // convert button we pressed (`event.target`) to a jQuery DOM object
    let btnClicked = $(event.target);
  
    // get the parent `<div>` element from the button we pressed and remove it
    btnClicked.parent('div').remove();

    // log out index
    let choiceIndex = event.target.id;

    // remove the selected index from the array
    tipEvents = tipEvents.slice(0, choiceIndex).concat(tipEvents.slice(choiceIndex + 1));

    // save in localStorage
    localStorage.setItem('tipEvents', JSON.stringify(tipEvents));
}

// use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
history.on('click', '.delete-item-btn', handleRemoveItem);

// nav links
function navigate(url) {
    window.location.href=url;
}