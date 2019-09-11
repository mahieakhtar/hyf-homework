function pickYourClothBasedOnWeather(temperature) {
    if(temperature > 30) {
    return "Lets go to beach with beachwear and shorts"
    } else if (temperature > 20 && temperature < 30){
    return "Lets wear shorts and t-shirts"
    } else if (temperature > 10 && temperature < 20) {
    return "Lets put some jackets, pullover and warm scarfs"
    } else {
    return "Winter jackets and warm layer cloths"
    }
    }
    
    const clothToWear = pickYourClothBasedOnWeather(28);
    console.log(clothToWear);