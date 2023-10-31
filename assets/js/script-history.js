// display tipEvents data on history page
let history = $('#history');
// let history = document.getElementById('history');

let tipEvents = JSON.parse(localStorage.getItem('tipEvents'));
// console.log(tipEvents);
// history.innerText = tipEvents;

tipEvents.forEach(function (tipEvent, index, tipEvents) {

    // translate Date into human readable display time
    let date = new Date();
    // let beforeDateDisplayable = tipEvent.eventDate;
    let beforeDateDisplayable = date;
    let dateDisplayable = beforeDateDisplayable.getMonth() + '/' + beforeDateDisplayable.getDate() + '/' + beforeDateDisplayable.getFullYear();

    // <li class="splide__slide block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
    //     <div class="flex justify-between">
    //         <div>
    //             <p id="lTotal" class="text-base uppercase font-bold text-purple-600 pt-1">$69.96</p>
    //         </div>
    //         <div>
    //             <p id="lTip" class="text-xs uppercase text-purple-600 pt-2">10/30/2023</p>
    //         </div>
    //         <div>
    //             <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full bg-white border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onclick="tipChoice('low');">Edit</button>
    //         </div>
    //     </div>
    // </li>

    let tipEventItemEl = $(
        `<li class="splide__slide block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 mb-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">`
    );
        

    // add delete button to remove shopping list item
    tipEventItemEl.append(
        `<div class="flex justify-between">
            <div>
                <p id="lTotal" class="text-base uppercase font-bold text-purple-600 pt-1">` + tipEvent.total + `</p>
            </div>
            <div>
                <p id="lTip" class="text-xs uppercase text-purple-600 pt-2">` + dateDisplayable + `</p>
            </div>
            <div>
                <button id=` + index + ` class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full bg-white border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 delete-item-btn" data-index-number=` + index + `>Remove</button>
            </div>
        </div>`
    );

    // print to the page
    history.append(tipEventItemEl);

});

function handleRemoveItem(event) {
    // convert button we pressed (`event.target`) to a jQuery DOM object
    let btnClicked = $(event.target);

    // log out index
    let choiceIndex = event.target.id;

    // remove the selected index from the array
    // tipEvents = tipEvents.slice(0, choiceIndex).concat(tipEvents.slice(choiceIndex + 1));
    tipEvents = tipEvents.slice(0, choiceIndex).concat(tipEvents.slice(choiceIndex+1))

    // save in localStorage
    localStorage.setItem('tipEvents', JSON.stringify(tipEvents));

    // get the parent `<li>` element from the button we pressed and remove it
    btnClicked.parent('div').parent('div').parent('li').remove();
}

// use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
history.on('click', '.delete-item-btn', handleRemoveItem);

// nav links
function navigate(url) {
    window.location.href=url;
}