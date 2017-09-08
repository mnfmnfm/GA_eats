

$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax ({
    method: "GET",
    url: "/api/restaurants",
    success: loadRestaurants
  })

//   $.ajax({
//     method: 'GET',
//     url: '/api/restaurants',
//     json: true
//   });
//   .then(function(restaurants){
//     for(let i=0;i<restaurants.length;i++){
//       $('#restaurants').append(renderRestaurant(restaurants[i]));
//     }
//     $('#').submit(function(event){
//       event.preventDefault();
//       var cereal = $(this).serialize();
//       console.log(cereal);
//       $.ajax({
//         method: 'POST',
//         url:'#',
//         data: cereal,
//       })
//       .then(function(data){
//         $('#results').append(renderRestaurant(data));
//       })
//     })
//   })
// })

//Functionality of the domain

$('.create').on('submit', function(e) {
  e.preventDefault();
  var formData = $(this).serialize();
  console.log('formData', formData);
    $.post('/api/restaurants',formData, function(restaurant) {
      console.log('restaurant after POST', restaurant);
    });

})

});

function loadRestaurants(restaurant) {
  restaurant.forEach(function(restaurant){
    renderRestaurant(restaurant);
  });
}

function renderRestaurant(restaurant) {
  console.log("Rendering Restaurants", restaurant);
  var restaurantHtml = (`<div class="jumbotron resShow">
            <img class="imgRest" src="https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F14%2Ff0f9c1fd-615f-42fe-aa62-3ded5a49d228.jpg" alt="restaurant">
            <div style="
              width: auto;
              height: max-content;
            ">
              <div id='String-Data'>
                <ul>
                  <span id="larger">
                    <li style="
                      margin-left: -10px;
                      margin-bottom: 10px;
                    ">Pagan Idol</li>
                  </span>
                  <span id="smaller">
                    <li>375 Bush St, San Francisco</li>
                    <li><em>Tiki Bar</em></li>
                  </span>
                </ul>
              </div>
              <div class='container' style="
                width: auto;
              ">
              <div id="Boolean-data" class="col-sm-6">
                <h4>Features</h4>
                <span class='col-sm-6'>
                  <p>$$ - Price Range</p>
                </span>
                <span class='col-sm-6'>
                  <p>* - Open Late</p>
                </span>
                <span class='col-sm-6'>
                  <p>x - Parking</p>
                </span>
                <span class='col-sm-6'>
                  <p>* - Alcohol</p>
                </span>
              </div>
              <div id="tags" class="col-sm-6">
                <h4>Tags</h4>
                <ul class="inline-list">
                  <span class='col-sm-3'><li>Fun</li></span>
                  <span class='col-sm-3'><li>Crazy</li></span>
                  <span class='col-sm-3'><li>Lotta love</li></span>
                    <span class='col-sm-3'><li>Fun</li></span>
                    <span class='col-sm-3'><li>Crazy</li></span>
                    <span class='col-sm-3'><li>Lotta love</li></span>
              </div>
            </div>
            <div id="tips">
              <h4>Tips</h4>
              <p>"dont go dey suck"</p>
              <p>Anthony Greenwell. December 4th, 2016</p>
            </div>
            </div>
            <button type="button" name="close" class="resButt1 col-sm-2 btn-sm btn-group-sm btn-danger">Delete</button>
          </div>`)
          $('#results').append(restaurantHtml);
}
