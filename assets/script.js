var userLocationInput; 
var submitBtn = $('#submit');

function searchFood (foodType){
var requestUrlFood = `https://api.foursquare.com/v2/venues/search?client_id=RTRUVKESRURB2RGWGGYSRQUJBXQDMZ2EPCM4IT33LQYPF505&client_secret=00ATNEY1RY15L0KKZ0P41ML22E4KUV5GCEW0LAPPJ5GZKG5R&v=20210706&near=austin&intent=browse&radius=10000&limit=20&categoryId=4d4b7105d754a06374d81259&query=${foodType}`; 
 //query drills down to specific type. Can find under name template literals
fetch(requestUrlFood)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        /// Name of business
    console.log(data.response)
    
    })

}
getAPI();

///Food drill down variables
var foodVenueName = console.log(data.response.venues[0].name)
var foodVenueLocation = console.log(data.response.venues[0].location.formattedAddress)
var venueFoodType = console.log(data.response.venues[8].categories[0].shortName)


//This is the event request URL with appropriate category ID "Arts & Entertainment 4d4b7104d754a06370d81259"

function getEventAPI(){
var requestURL ='https://api.foursquare.com/v2/venues/search?client_id=RTRUVKESRURB2RGWGGYSRQUJBXQDMZ2EPCM4IT33LQYPF505&client_secret=00ATNEY1RY15L0KKZ0P41ML22E4KUV5GCEW0LAPPJ5GZKG5R&v=20210706&near=austin&intent=browse&radius=10000&limit=20&categoryId=4d4b7104d754a06370d81259';
fetch(requestURL)
.then(function (response) {
    return response.json();
    })
    .then(function (data) {
        
      console.log(data.response.venues)
    
    })

}
getEventAPI();


//Event drilldown variables
var activityVenueName = console.log(data.response.venues[0].name);
var activityVenueLocation = console.log(data.response.venues[0].location.formattedAddress);






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
