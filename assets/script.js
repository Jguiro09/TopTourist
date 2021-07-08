var userLocationInput;
var submitBtn = $('#submit');
var check
getFoodAPI();

function getFoodAPI() {

    var requestURL = 'https://api.foursquare.com/v2/venues/search?client_id=RTRUVKESRURB2RGWGGYSRQUJBXQDMZ2EPCM4IT33LQYPF505&client_secret=00ATNEY1RY15L0KKZ0P41ML22E4KUV5GCEW0LAPPJ5GZKG5R&v=20210706&near=austin&intent=browse&radius=10000&limit=20&categoryId=4d4b7105d754a06374d81259';
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            // Event drilldown variables
            var activityVenueName = data.response.venues[0].name;
            var activityVenueLocation = data.response.venues[0].location.formattedAddress[0];
            var activityType = data.response.venues[0].categories[0].shortName;

            // var foodVenueName = $("foodVenueName");
            // var activityVenueLocation = $("#activityVenueLocation");
            // var activityType = $("#activityType");


            for (let index = 0; index < 5; index++) {
                // Event drilldown variables
                var activityVenueName = data.response.venues[index].name;
                var activityVenueLocation = data.response.venues[index].location.formattedAddress[0];
                var activityType = data.response.venues[index].categories[0].shortName;

                var markup = "<tr><td> " + activityVenueName + " </td><td>" + activityVenueLocation + "</td><td>" + activityType + "</td></tr>";
                $("#uservenue").append(markup);



            }

        })
}

function innit() // First function to run when webpage is loaded
{
    checkLocalStorage();
}


function checkLocalStorage() // Checks local storage to inform you on which API we are using
{
    if (check == null) // Checks we havent gotten a decision yet
    {
        check = JSON.parse(localStorage.getItem("check"));
        checkLocalStorage(); // Re-runs the function until we get a proper answer
    } else if (check == 0) { getFoodAPI(); } else if (check == 1) { getEventAPI(); }
}





///Food drill down variables
//var foodVenueName = console.log(data.response.venues[0].name)
//var foodVenueLocation = console.log(data.response.venues[0].location.formattedAddress)
//var venueFoodType = console.log(data.response.venues[0].categories[0].shortName)


//This is the event request URL with appropriate category ID "Arts & Entertainment 4d4b7104d754a06370d81259"

function getEventAPI() {
    var requestURL = 'https://api.foursquare.com/v2/venues/search?client_id=RTRUVKESRURB2RGWGGYSRQUJBXQDMZ2EPCM4IT33LQYPF505&client_secret=00ATNEY1RY15L0KKZ0P41ML22E4KUV5GCEW0LAPPJ5GZKG5R&v=20210706&near=austin&intent=browse&radius=10000&limit=20&categoryId=4d4b7104d754a06370d81259';
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            console.log(data.response.venues)

        })

}








userLocationInput = $('#userLocation').val();



//This is the user location input
//function getAPI() {
//fetch('https://api.foursquare.com/v2/venues/search?client_id=RTRUVKESRURB2RGWGGYSRQUJBXQDMZ2EPCM4IT33LQYPF505&client_secret=00ATNEY1RY15L0KKZ0P41ML22E4KUV5GCEW0LAPPJ5GZKG5R&v=20210706&near=' + userInputLocation + '&intent=browse&radius=10000&limit=20')
// .then(function (response) {
//return response.json();
// })
//.then(function (data) {

//console.log(data.response)

//})
//}





// innit();







//function searchFood (foodType){
//var requestUrlFood = `https://api.foursquare.com/v2/venues/search?client_id=RTRUVKESRURB2RGWGGYSRQUJBXQDMZ2EPCM4IT33LQYPF505&client_secret=00ATNEY1RY15L0KKZ0P41ML22E4KUV5GCEW0LAPPJ5GZKG5R&v=20210706&near=austin&intent=browse&radius=10000&limit=20&categoryId=4d4b7105d754a06374d81259&query=${foodType}`;  //query drills down to specific type. Can find under name template literals
//fetch(requestUrlFood)
//.then(function (response) {
//return response.json();
//})
//.then(function (data) {
/// Name of business
//console.log(data.response)

//})}
//searchFood ("pizza"); //need to stringify could do it in the search input function !! Look up
//console.log(data.response.venues[0].name)

///Events API- category id https://developer.foursquare.com/docs/build-with-foursquare/categories/

//var requestUrlEvents = 'https://api.foursquare.com/v2/venues/search?client_id=RTRUVKESRURB2RGWGGYSRQUJBXQDMZ2EPCM4IT33LQYPF505&client_secret=00ATNEY1RY15L0KKZ0P41ML22E4KUV5GCEW0LAPPJ5GZKG5R&v=20210706&near=austin&intent=browse&radius=10000&limit=10&categoryId=4d4b7104d754a06370d81259';
//fetch(requestUrlEvents)
//.then(function (response) {
//return response.json();
//})
// .then(function (data) {
//This drills down to specific location
//console.log(data.response.venues)**//
//}) 
//console.log(data.response.venues[3].location)