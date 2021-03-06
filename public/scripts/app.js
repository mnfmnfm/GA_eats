$(document).ready(function() {
  $.ajax ({
    method: "GET",
    url: "/api/restaurants",
    success: loadRestaurants
  })

  //Functionality of the domain

  $('.create').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.post('/api/restaurants',formData, function(restaurant) {

      $('.create')[0].reset();
      renderRestaurant(restaurant);
    });
    $('.creMod').fadeOut(500);
    loadRestaurants(restaurant);
  });
  $('#closeCreateForm').on('click', function(e) {
    $('.creMod').fadeOut(500);
  });

  $('#results').on('click', '.resButt1', function(e) {
    var id = $(this).closest('.restaurant').data('restaurant-id');
    $(this).closest('.restaurant').fadeOut(500);
    $.ajax({
      url: '/api/restaurants/' + id,
      method: 'DELETE',
      success: function(result){
        $('[data-restaurant-id=' + restaurantId +']')
      },
    });
  });

  $('.optButt').on('click', function(){
    $('.creMod').fadeIn(500);
  });



function loadRestaurants(restaurant) {
  restaurant.forEach(function(restaurant){
    renderRestaurant(restaurant);
  });
};

});
var map;
function initMap() {
  var ga = {lat: 37.791, lng: -122.401};
   map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 37.791, lng: -122.401}
  });
}
function renderRestaurant(restaurant) {


  var marker = new google.maps.Marker({
    position: {
      lat:  restaurant.latitude,
      lng: restaurant.longitude,
    },
    map: map
  });


  var restaurantHtml = (`<div class="jumbotron resShow restaurant" data-restaurant-id=${ restaurant._id}>
  <img class="imgRest" src="https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F14%2Ff0f9c1fd-615f-42fe-aa62-3ded5a49d228.jpg" alt="restaurant">
  <div style="
  width: 810px;
  height: max-content;
  ">
  <div id='String-Data'>
  <ul>
  <span id="larger">
  <li style="
  margin-left: -10px;
  margin-bottom: 10px;
  ">${restaurant.name}</li>
  </span>
  <span id="smaller">
  <li>${restaurant.address}</li>
  <li><em>${restaurant.typeOfFood}</em></li>
  </span>
  </ul>
  </div>
  <div class="col-sm-12 holdThis" style="
  max-width: inherit;
  ">
  <div id="Boolean-data" class="col-sm-6">
  <h4>Features</h4>
  <span class='col-sm-6'>
  <p>${restaurant.price} - Price Range</p>
  </span>
  <span class='col-sm-6'>
  <p>${restaurant.lateNight} - Open Late</p>
  </span>
  <span class='col-sm-6'>
  <p>${restaurant.parking} - Parking</p>
  </span>
  <span class='col-sm-6'>
  <p>${restaurant.servesAlcohol} - Serves Alcohol</p>
  </span>
  </div>
  <div id="tags" class="col-sm-6">
  <h4>Tags</h4>
  <ul class="inline-list"><span class='col-sm-12'><li>${restaurant.tags}</li></span></ul>
  </div>
  </div>
  </div>
  <button type="button" name="close" class="resButt1 col-sm-2 btn-sm btn-group-sm btn-danger">Delete</button>
  </div>`)
  $('#results').append(restaurantHtml).fadeIn(600);
};
