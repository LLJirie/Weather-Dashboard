
var day = moment();


// $("#moment").text(day);
$("#moment").text(moment().format("(MMM/D/YYYY)"));

       var APIkey="f9d06868bafd4c49eafce461023e2479";
       var cityInput = {"Austin" "Chicago" "New York" "Orlando" "San Francisco" "Seattle" "Denver" "Atlanta"}

      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid=  + f9d06868bafd4c49eafce461023e2479";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
                
          console.log(response);
          console.log(queryURL)
          $(".city").html(response.name);
          
          $(".temperature").text(response.main.temp);
          $(".humidity").text(response.main.humidity);
          $(".wind-speed").text(response.main.temp);
          $(".uvIndex").text(response.wind.speed);
        })     

    // var =f9d06868bafd4c49eafce461023e2479

    // api.openweathermap.org/data/2.5/forecast?q={city name},{US}

  

    // var userInputCity = 
    // for (i = 0; i<cityChoices.length; i++)
    // console.log()