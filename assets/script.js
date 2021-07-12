//Variable for user's input
var userLocationInput;
//variable to check which API you're using
var check;
//variable for user "activity" filter options"
var filterOptions;
var searchBtn = $('.submitInfo');

//calling foursquare places API with food key
function getFoodAPI() {
    var requestURL = 'https://api.foursquare.com/v2/venues/search?client_id=RTRUVKESRURB2RGWGGYSRQUJBXQDMZ2EPCM4IT33LQYPF505&client_secret=00ATNEY1RY15L0KKZ0P41ML22E4KUV5GCEW0LAPPJ5GZKG5R&v=20210706&near=' + userLocationInput + '&intent=browse&radius=10000&limit=20&categoryId=' + check.filter;
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for (let index = 0; index < 5; index++) {
                // food drilldown variables
                var foodVenueName = data.response.venues[index].name;
                var foodVenueLocation = data.response.venues[index].location.formattedAddress.toString();
                var venueFoodType = data.response.venues[index].categories[0].shortName;

                var markup = "<tr><td> " + foodVenueName + " </td><td>" + foodVenueLocation + "</td><td>" + venueFoodType + "</td></tr>";
                $("#foodVenue").append(markup);

            }
        })
}


searchBtn.click(function() {
    {
        check = JSON.parse(localStorage.getItem("check"));
        userLocationInput = check.name;
        filterOptions = check.filter;
        if (check.check == 0)

        { getFoodAPI(); } else if (check.check == 1)

        { getEventAPI(); }
    }
})

//This is the event request URL with appropriate category ID "Arts & Entertainment 4d4b7104d754a06370d81259"

function getEventAPI() {
    var requestURL = 'https://api.foursquare.com/v2/venues/search?client_id=RTRUVKESRURB2RGWGGYSRQUJBXQDMZ2EPCM4IT33LQYPF505&client_secret=00ATNEY1RY15L0KKZ0P41ML22E4KUV5GCEW0LAPPJ5GZKG5R&v=20210706&near=' + userLocationInput + '&intent=browse&radius=10000&limit=20&categoryId=' + check.filter;
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            for (let index = 0; index < 5; index++) {
                // activity drilldown variables
                var activityVenueName = data.response.venues[index].name;
                var activityVenueLocation = data.response.venues[index].location.formattedAddress.toString();
                var activityType = data.response.venues[index].categories[0].shortName;

                var markup = "<tr><td> " + activityVenueName + " </td><td>" + activityVenueLocation + "</td><td>" + activityType + "</td></tr>";
                $("#eventVenue").append(markup);
            }
            //console.log(data.response.venues)
        })

}