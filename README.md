# Express Weather API

I created this project to learn more about Express and NodeJS in general. Still a simple implementation, but atleast it could improve my understanding on those stuffs.

This service gets it's data from two API:
- [Mapbox](https://www.mapbox.com/) to get information of location from user's query.
- [OpenWeatherMap](https://openweathermap.org/) to get information of weather from location's latitude and longitude, which is obtained from Mapbox's search result.

The API can be accessed from `BASE_URL/api`, with two endpoints available:
1. `/location` to get information about a location based on the `search` parameter. It uses `GET` method.
2. `/weather` to get information about the weather of a location based on the `location` parameter. It uses `GET` method. The data from `/location` endpoint is also available here.

The implementation of this API is available at [What's the Weather?](https://hifra-weather.herokuapp.com/), where I combined this API with VueJS for it's user interface. The API can still be accessed from [the `/api` path](https://hifra-weather.herokuapp.com/api). Do note that this service uses free APIs with limited request allowed, so be wise on using it 🙏.