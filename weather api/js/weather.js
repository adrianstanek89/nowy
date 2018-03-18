$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getForecast();
    });
    
});

function getForecast(){
    var city = $("#inputCity").val();
    var days = $("#submitCity").val();
    
    if(city != ''){
        
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + "&units=metric" + "&cnt=" + days + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                console.log(data);
                
                var divek = '';
                
                var header = '<div class="blue" role="alert"><h4>Pogoda dla miasta: ' + data.city.name + ', ' + data.city.country + '</h4></div>'
                
                for(var i = 0; i < data.list.length; i++){
                    divek += ' <div class="col-xl-2 d-inline-block border rounded top col-center-block">';
                    
                    divek +=  '</br>'+"<img src='http://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png'>";
                    divek +=  "</br>Temp min: "+data.list[i].temp.min + "&deg;C";
                    divek +=  "</br>Temp max: "+data.list[i].temp.max + "&deg;C";
                    divek +=  "</br>Cisnienie: "+data.list[i].pressure + "hpa";
                    divek +=  "</br> Wilgotnosc: "+data.list[i].humidity + "%";
                    divek +=  "</br>Pred wiatru: "+data.list[i].speed + "m/s";
                   
                    
                    divek+= '</div>';
                }
                
                $("#weather").html(divek);
                $("#header").html(header);
                
                $("#inputCity").val('');
                $("#submitCity").val('');
                
            }
            
            
        });
        
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
    
}

