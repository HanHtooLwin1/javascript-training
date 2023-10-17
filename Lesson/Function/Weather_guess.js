/*
    App Name - Guess Weather
    If both humidity and cloud level heigher than normal, weather is rain.
    If both humidity and cloud level lower than normal, weather is sunny.
    If humidity is lower and cloud level is heigher than normal normal, weather is cloudy.
    If both humidity and cloud level are normal, weather is fine.
    Normal levels:
    humidity - 50;
    cloud level - 3;
 */

let guessWeather = (humidity, cloudLevel) => {
    let humidityNormalLevel = 50;
    let cloudNormalLevel = 3;

    if (humidity > humidityNormalLevel && cloudLevel > cloudNormalLevel) {
        return "Rain";
    } else if (humidity < humidityNormalLevel && cloudLevel < cloudNormalLevel) {
        return "Sunny";
    } else if (humidity < humidityNormalLevel && cloudLevel > cloudNormalLevel) {
        return "Cloudy";
    }

    return "Fine";
};

let tellMeWeather = (humidity, cloudLevel) => {
    console.log("Weather is " + guessWeather(humidity, cloudLevel));
};

tellMeWeather(60, 4); // Expected Weather -> Rain
tellMeWeather(30, 1); // Expected Weather -> Sunny
tellMeWeather(10, 4); // Expected Weather -> Cloudy