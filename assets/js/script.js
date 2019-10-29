
var day = moment();


// $("#moment").text(day);
$("#moment").text(moment().format("(MMM/D/YYYY)"));

// var APIkey="f9d06868bafd4c49eafce461023e2479";

var cityInput = ["Austin", "Chicago", "New York", "Orlando", "San Francisco", "Seattle", "Denver", "Atlanta"];
//      console.log=(cityInput.length);
function getWeatherData(city) {
  var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=f9d06868bafd4c49eafce461023e2479&q=" + city;

  $.ajax({
    url: fiveDay,
    method: "GET"
  }).then(function (response) {

    console.log(response);
    $("#one").html("City: " + response.name);

    $("#two").text("Temperature" + response.main.temp);
    $("#three").text("Humidity: " + response.main.humidity);
    $("#four").text("Wind Speed: " + response.main.temp);
    $("#five").text("UV Index: " + response.wind.speed);
  })
}
  
  // q={city name},{US}

function getWeatherData(city) {
  var baseURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=f9d06868bafd4c49eafce461023e2479&q=" + city;


  $.ajax({
    url: baseURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);
    $(".city").html("City: " + response.name);

    $(".temperature").text("Temperature:" + response.main.temp);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".wind-speed").text("Wind Speed: " + response.main.temp);
    $(".uvIndex").text("UV Index: " + response.wind.speed);
  })
}

getWeatherData(cityInput[ cityInput.length - 1 ]);

$(document).on("click", ".city-btn", function(){
  getWeatherData($(this).text());
});




        var iconcode = a.weather[0].icon;


        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";


        $('#wicon').attr('src', iconurl);