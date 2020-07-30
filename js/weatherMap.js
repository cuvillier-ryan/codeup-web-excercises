$(document).ready(function () {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.421240,
        lon: -98.497785,
        units: "imperial"
    }).done(function (data) {
        updateWeatherCards(data);
    });


    let updateWeatherCards = function (data) {
        $("#cards").html("");
        for (var i = 0; i < 5; i++) {
            let date = new Date(data.daily[i].dt * 1000);
            console.log(data.daily[i].dt);

            //Temperature
            let lowTemp = data.daily[i].temp.min;
            let highTemp = data.daily[i].temp.max;
            let temperature = lowTemp + '°F / ' + highTemp + '°F';
            //Icon
            let icon = data.daily[i].weather[0].icon;
            //Feels Like
            let feelsLike = data.daily[i].feels_like.day;
            //Humidity
            let humidity = data.daily[i].humidity;
            //Wind
            let wind = data.daily[i].wind_speed;
            //Pressure
            let pressure = data.daily[i].pressure;
            //Description
            let description = data.daily[i].weather[0].description;

            let kingKai = `<div class="card" style="width: 14rem;">
        <div class="card-header">${date.toDateString()}</div>
        <ul class="list-group list-group-flush">
             <li class="list-group-item">${temperature + "<img src='https://openweathermap.org/img/w/" + icon + ".png'>"}</li>
            <li class="list-group-item">${"Description: " + description}</li>
            <li class="list-group-item">${"Humidity: " + humidity}</li>
            <li class="list-group-item">${"Pressure: " + pressure}</li>
        </ul>
    </div>`
            $("#cards").append(kingKai);
        }
    }

    //MAPBOX
    mapboxgl.accessToken = mapboxKey;
    var coordinates = document.getElementById('coordinates');
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.4916, 29.4252],
        zoom: 10
    });
// adds zoom controls on the map.
    map.addControl(new mapboxgl.NavigationControl());

    var marker = new mapboxgl.Marker({
        // draggable: true
    })
        .setLngLat([-98.4916, 29.4252])
        .addTo(map)
        .setDraggable(true);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_APPID,
            lat: lngLat.lat,
            lon: lngLat.lng,
            units: "imperial"
        })
            .done(function (data) {
                updateWeatherCards(data);
                map.flyTo({center: [lngLat.lng, lngLat.lat]})
                map.set
            });
    }

    marker.on('dragend', onDragEnd);
});