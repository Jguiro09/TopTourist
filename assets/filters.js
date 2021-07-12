var checkbox = $("input[name=checkbox]"); // Grabs all of the checkboxes
var submitBtn = $(".submitInfo"); // Detects when submit is clicked
var foodBtn = $('#foodBtn'); // Detects when the food modal is clicked
var activitiesBtn = $('#activitiesBtn'); // Detects when the activities modal is clicked
var hotelBtn = $('#hotelBtn'); // Detects when the hotel modal is clicked
var checkFilter; // A filter that lets the API knows which one will be used (0 = food, 1 = activities, 2 = hotel)
var userLocation = $('#userLocation'); // Grabs the user location inside HTML
var city; // Assigns the user location city to a variable
var checkIn = $('#checkIn'); // Check in date for the hotel filter
var checkOut = $('#checkOut'); // Check out date for the hotel filter
var adults = $('#adults'); // Number of adults for the hotel filter

var filters = []; // An array for the filters to be put in to



window.localStorage.clear(); // Clears local storage so the filters are reset.

checkbox.click('change', function () {
    if (this.checked) { // IF the selected filter is not inside the array, then it is pushed into the filters array.
        if ($.inArray($(this).val(), filters) == -1) {
            filters.push($(this).val());
        }
    }

    else {
        filters.splice(filters.indexOf($.inArray($(this).val(), filters)), 1); // IF the selected filter is inside the array, then it is removed from the filters array.
    }
});


submitBtn.click(function () { // Puts the user info into the location
    city = userLocation.val();
    if (checkFilter != 2)
        {
            var send =
            {
                check: checkFilter,
                filter: filters.toString(),
                name: city
            }
            localStorage.setItem("check", JSON.stringify(send));
        }

    else if (checkFilter == 2) 
    {
        var send = 
        {
            check: checkFilter,
            name: city,
            checkIn: checkIn.val(),
            checkOut:checkOut.val(),
            adults: adults.val()
        }
        localStorage.setItem("check", JSON.stringify(send));
    }
    
});

foodBtn.click(function () {
    checkFilter = 0;
    filters = [];
});

activitiesBtn.click(function () {
    checkFilter = 1;
    filters = [];
});

hotelBtn.click(function () {
    checkFilter = 2;
    filters = [];
});