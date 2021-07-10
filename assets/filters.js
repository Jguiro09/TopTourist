// HTML Variables
var checkbox = $("input[name=checkbox]"); // Grabs all of the checkboxes
var submitBtn = $(".submitInfo"); // Detects when submit is clicked
var foodBtn = $('#foodBtn');
var activitiesBtn = $('#activitiesBtn');
var hotelBtn = $('#hotelBtn');
var checkFilter;
var userLocation = $('#userLocation')
var city;
var checkIn = $('#checkIn');
var checkOut = $('#checkOut');
var adults = $('#adults');

var filters = []; // An array for the filters to be put in to



window.localStorage.clear();

checkbox.click('change', function () {
    if (this.checked) {
        console.log($(this).val());

        if ($.inArray($(this).val(), filters) == -1) {
            filters.push($(this).val());
            console.log(filters);
            console.log($.inArray($(this).val(), filters));
        }
    }

    else {
        filters.splice(filters.indexOf($.inArray($(this).val(), filters)), 1);
        console.log(filters);
    }
});


submitBtn.click(function () {
    city = userLocation.val();
    if (checkFilter != 2)
        {
            var send =
            {
                check: checkFilter,
                filter: filters.toString(),
                name: city
            }
            console.log(send);
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
        console.log(send);
    }
    
});

foodBtn.click(function () {
    checkFilter = 0;
    console.log("food!")
    console.log(checkFilter);
    filters = [];
});

activitiesBtn.click(function () {
    checkFilter = 1;
    console.log("events!");
    console.log(checkFilter);
    filters = [];
});

hotelBtn.click(function () {
    checkFilter = 2;
    console.log("hotel!");
    console.log(checkFilter);
    filters = [];
});