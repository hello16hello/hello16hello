
var callBackGetSuccess = function(data) {
    var element = document.getElementById("zone_meteo");
   return element.innerHTML =  "<table> <tr><th> <h3 style='color:blue;' class='text-center' >current weather for : " + data.name +    ","  + data.sys.country + "</h3></th></tr>"
      +"<tr> <td><h3>Weather :" + data.weather[0].main+ "</h3></td></tr>"
   +"<tr><td><h3>Desciption : <img src='http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png'> "+ data.weather[0].description+"</h3></td></tr>"
   +"<tr><td><h3>Temperature :" + data.main.temp + " &deg C</td></tr></h3>" 
  +"<tr><td><h3 > Humidity: "+ data.main.humidity +"% </h3> </td></tr>"
  +"<tr><td><h3> Max. Temperature :"+ data.main.temp_max +"&deg C</h3></td></tr>"
  +"<tr><td><h3>Min. Temperature :"+ data.main.temp_min +"&deg C</h3></td></tr>"
  +"<tr><td><h3> Wind Speed :"+ data.wind.speed +"m/s</h3></td></tr>"
  +"<tr><td><h3 >Wind Direction :"+ data.wind.deg +"&deg</h3></td></tr>";
          
"</table>"
}

function buttonClickGET() {
  var query = document.getElementById("queryLoc").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });
}
