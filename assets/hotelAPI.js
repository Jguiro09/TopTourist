var searchBtn = $('.submitInfo');
var check;
var city;
var checkIn;
var checkOut;
var adults;
var destination;

searchBtn.click(function() {
    check = JSON.parse(localStorage.getItem("check"));

    if (check.check == 2) {
        city = check.name;
        checkIn = check.checkIn;
        checkOut = check.checkOut;
        adults = check.adults;
        getLocationID();
    }
})

function getLocationID() {
    fetch("https://hotels4.p.rapidapi.com/locations/search?query=" + city + "&locale=en_US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "102249a573mshd0539da8137f72cp1b2e01jsn294e7b07840a",
                "x-rapidapi-host": "hotels4.p.rapidapi.com"
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(data.suggestions[0].entities[0].destinationId);
            destination = data.suggestions[0].entities[0].destinationId;
            console.log(destination);

            // *dont for loop the fetch //https://rapidapi.com/apidojo/api/hotels4/-this is the api for hotels.
            fetch("https://hotels4.p.rapidapi.com/properties/list?adults1=" + adults + "&pageNumber=1&destinationId=" + destination + "&pageSize=25&checkOut=" + checkOut + "&checkIn=" + checkIn + "&starRatings=2%2C3%2C4&priceMax=500&sortOrder=PRICE&locale=en_US&currency=USD&priceMin=100&guestRatingMin=2", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "102249a573mshd0539da8137f72cp1b2e01jsn294e7b07840a",
                        "x-rapidapi-host": "hotels4.p.rapidapi.com"
                    }
                })
                .then(response => {
                    return response.json();
                })
                .then(function(data) {
                    console.log(data);
                    var userLocationInput = (data.data.body.searchResults.results[0].address);


                    for (let index = 0; index < 5; index++) {
                        var userLocality = (data.data.body.searchResults.results[index].address.locality);
                        var userStreetAddress = (data.data.body.searchResults.results[index].address.streetAddress);
                        var userPostalCode = (data.data.body.searchResults.results[index].address.postalCode);
                        var userRegion = (data.data.body.searchResults.results[index].address.region);
                        var userRatePlan = (data.data.body.searchResults.results[index].ratePlan.price.current);
                        var userHotelName = (data.data.body.searchResults.results[index].name);
                        // var userHotelAddress = (data.data.body.searchResults.results[0].address.locality)

                        var markup = "<tr><td>" + userHotelName + "</td><td> " + userStreetAddress + ", " + userLocality + ", " + userRegion + ", " + userPostalCode + " </td><td>" + userRatePlan + "</td></tr>";
                        $('#hotelVenue').append(markup);
                    }
                    // var userRating = (data.data.body.searchResults.options.choices);

                    console.log(userLocationInput, userRatePlan);
                })


        });
}





// var requestUrlAddress = "https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=1496344&pageSize=25&checkOut=2020-01-15&checkIn=2020-01-08&sortOrder=PRICE&locale=en_US&currency=USD", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "26989367ebmshebbb81041a9f28bp12931fjsnb723a42f32f3",
// 		"x-rapidapi-host": "hotels4.p.rapidapi.com"
// fetch(requestUrlAddress)
// .then(response => {
// 	// return response.json();
// 	// })
// 	// .then(function (data)
// 	// {
// 	// console.log(data);
// }) 




// var requestUrlPrice
// var requestUrlGuest