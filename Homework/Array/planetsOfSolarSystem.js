let planetNameByOrder = (orderNumber) => {
    let planetsOfSolarSystem = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    console.log(planetsOfSolarSystem[orderNumber - 1]);
}

planetNameByOrder(1);