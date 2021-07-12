var searchBtn = $('.submitInfo');
var check;
var city;
var checkIn;
var checkOut;
var adults;
var destination;
// when the button is clicked function:
searchBtn.click(function() {
    check = JSON.parse(localStorage.getItem("check"));
// when you click the city,checkin/out and adults  you should get a response of avalible hotels in the area.
    if (check.check == 2) {
        city = check.name;
        checkIn = check.checkIn;
        checkOut = check.checkOut;
        adults = check.adults;
        getLocationID();
    }
})

function getLocationID() {

    $('.loadingScreen').css('display', 'block');
// here we are gitting the infomation from the Hotel api's 
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
                    // console.log(data);
                    var userLocationInput = (data.data.body.searchResults.results[0].address);
                    // Outputting the search for the results happens here
                    $('.loadingScreen').css('display', 'none');

                    for (let index = 0; index < 5; index++) {
                        var userLocality = (data.data.body.searchResults.results[index].address.locality);
                        var userStreetAddress = (data.data.body.searchResults.results[index].address.streetAddress);
                        var userPostalCode = (data.data.body.searchResults.results[index].address.postalCode);
                        var userRegion = (data.data.body.searchResults.results[index].address.region);
                        var userRatePlan = (data.data.body.searchResults.results[index].ratePlan.price.current);
                        var userHotelName = (data.data.body.searchResults.results[index].name);
                    
                        var markup = "<tr><td>" + userHotelName + "</td><td> " + userStreetAddress + ", " + userLocality + ", " + userRegion + ", " + userPostalCode + " </td><td>" + userRatePlan + "</td></tr>";
                        $('#hotelVenue').append(markup);
                    }
                    // this will be where the searchout puts the infomation 
                    

                   
                })


        });
}





