
var day = moment();


// $("#moment").text(day);
$("#moment").text(moment().format("(MMM/D/YYYY)"));

// var APIkey="f9d06868bafd4c49eafce461023e2479";

var cityInput = ["Austin", "Chicago", "New York", "Orlando", "San Francisco", "Seattle", "Denver", "Atlanta"];
//      console.log=(cityInput.length);
function getFiveDayWeatherData(city) {
  var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=f9d06868bafd4c49eafce461023e2479&q=" + city;

  $.ajax({
    url: fiveDay,
    method: "GET"
  }).then(function (response) {
    var weather = response.list
    var count = 0;
    for (var i = 0; i < weather.length; i++) {
      
      var element = weather[i];
      if (element.dt_txt.includes("18:00:00")) {
        console.log("#weather-" + count, element);

        $("#weather-" + count).append(
          $("<p>").text(element.dt_txt),
          $("<p>").text("Temp: " + element.main.temp),
          $("<p>").text("Humidity: " + element.main.humidity),
          
        );
        count++;


      }
    }
  })
  // bbb
}

// var imgURL = response.Poster;

// // Creating an element to hold the image
// var image = $("<img>").attr("src", imgURL);

// // Appending the image
// movieDiv.append(image);


function getWeatherData(city) {
  var baseURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=f9d06868bafd4c49eafce461023e2479&q=" + city;


  $.ajax({
    url: baseURL,
    method: "GET"
  }).then(function (response) {

    // console.log(response);
    $(".city").html("City: " + response.name);
    // $(".icon").attr(response.weather.icon)
    console.log(response.weather.icon);
    $(".temperature").text("Temperature:" + response.main.temp);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".wind-speed").text("Wind Speed: " + response.main.temp);
    $(".uvIndex").text("UV Index: " + response.wind.speed);
  })
}

getWeatherData(cityInput[cityInput.length - 1]);

$(document).on("click", ".city-btn", function () {
  getWeatherData($(this).text());
});

getFiveDayWeatherData(cityInput[cityInput.length - 1])




        // var iconcode = a.weather[0].icon;


        // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";


        // $('#wicon').attr('src', iconurl);