//*dont for loop the fetch //https://rapidapi.com/apidojo/api/hotels4/-this is the api for hotels.
fetch("https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=1496344&pageSize=25&checkOut=2020-01-15&checkIn=2020-01-08&sortOrder=PRICE&locale=en_US&currency=USD", {
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
}) 