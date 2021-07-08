// HTML Variables
var checkbox = $("input[name=checkbox]"); // Grabs all of the checkboxes
var submitBtn = $(".submitStyle"); // Detects when submit is clicked
var aside2 = $('.aside2');
var foodFilter = $('#foodFilter');
var eventFilter = $('#eventFilter');
var hotelFilter = $('#hotelFilter')
var foodBtn = $('#foodBtn');
var activitiesBtn = $('#activitiesBtn');
var hotelBtn = $('#hotelBtn');
var searchBtn = $('#search');
var checkFilter;
var userLocation = $('#userLocation')
var city;

var filters = []; // An array for the filters to be put in to

aside2.slideUp(0);
foodFilter.slideUp(0);
eventFilter.slideUp(0);
hotelFilter.slideUp(0);
searchBtn.slideUp(0);

checkbox.click('change', function () {
    if (this.checked) {
        $(this).parent().css('background', '#E88C31');
        console.log($(this).val());

        if ($.inArray($(this).val(), filters) == -1) {
            filters.push($(this).val());
            console.log(filters);
            console.log($.inArray($(this).val(), filters));
        }

        else {
            console.log("Already In!");
        }

    }

    else {
        filters.splice(filters.indexOf($.inArray($(this).val(), filters)), 1);
        console.log(filters);
        $(this).parent().css('background', '#225B94');
    }
});


searchBtn.click(function () {
    var send =
    {
        check: checkFilter,
        filter: filters.toString(),
        name: city
    }
    console.log(send);
    localStorage.setItem("check", JSON.stringify(send));
})


submitBtn.click(function () {
    aside2.slideDown();
    city = userLocation.val();
})

foodBtn.click(function () {
    eventFilter.slideUp("slow");
    hotelFilter.slideUp("slow");
    searchBtn.slideDown();
    setTimeout(function () {
        searchBtn.slideDown();
        foodFilter.slideDown();
    }, 600)
    checkFilter = 0;
    console.log(checkFilter);
    filters = [];
})

activitiesBtn.click(function () {
    foodFilter.slideUp("slow");
    hotelFilter.slideUp("slow");
    searchBtn.slideDown();
    setTimeout(function () {
        searchBtn.slideDown();
        eventFilter.slideDown();
    }, 600)
    checkFilter = 1;
    console.log(checkFilter);
    filters = [];
})

hotelBtn.click(function () {
    foodFilter.slideUp("slow");
    eventFilter.slideUp("slow");
    setTimeout(function () {
        searchBtn.slideDown();
        hotelFilter.slideDown();
    }, 600)
    checkFilter = 2;
    console.log(checkFilter);
    filters = [];
})