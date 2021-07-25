const car = {
    engine: "motor",
    wheel: "rhombus",
    drive: function() {
        console.log("gogogogo");
    } 
}

console.log(car);

const audi =  Object.create(car);

console.log(audi.engine);
 