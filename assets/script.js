//Food API https://developer.foursquare.com/docs/build-with-foursquare/categories/

var requestUrlFood = 'https://api.foursquare.com/v2/venues/search?client_id=RTRUVKESRURB2RGWGGYSRQUJBXQDMZ2EPCM4IT33LQYPF505&client_secret=00ATNEY1RY15L0KKZ0P41ML22E4KUV5GCEW0LAPPJ5GZKG5R&v=20210706&near=austin&intent=browse&radius=10000&limit=10&categoryId=4d4b7105d754a06374d81259';
fetch(requestUrlFood)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        /// Name of business
      console.log(data.response.venues[0].name)})

    ///Events API- category id https://developer.foursquare.com/docs/build-with-foursquare/categories/

      var requestUrlEvents = 'https://api.foursquare.com/v2/venues/search?client_id=RTRUVKESRURB2RGWGGYSRQUJBXQDMZ2EPCM4IT33LQYPF505&client_secret=00ATNEY1RY15L0KKZ0P41ML22E4KUV5GCEW0LAPPJ5GZKG5R&v=20210706&near=austin&intent=browse&radius=10000&limit=10&categoryId=4d4b7104d754a06370d81259';
      fetch(requestUrlEvents)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        //This drills down to specific location
      console.log(data.response.venues[3].location)}) 