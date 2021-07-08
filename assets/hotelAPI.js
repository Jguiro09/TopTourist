// *dont for loop the fetch //https://rapidapi.com/apidojo/api/hotels4/-this is the api for hotels.
fetch("https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=1496344&pageSize=25&checkOut=2020-01-15&checkIn=2020-01-08&starRatings=2%2C3%2C4&priceMax=500&sortOrder=PRICE&locale=en_US&currency=USD&priceMin=100&guestRatingMin=2", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "26989367ebmshebbb81041a9f28bp12931fjsnb723a42f32f3",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(response => {
return response.json();
})
.then(function (data)
{
console.log(data);
var userLocationInput = (data.data.body.searchResults.results[0].address);
var userRatePlan = (data.data.body.searchResults.results[0].ratePlan.price);
// var userRating = (data.data.body.searchResults.options.choices);

console.log(userLocationInput,userRatePlan);
})







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