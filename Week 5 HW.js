function Car(model, year, color, mpg){
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}

function Vehicle(car){
    this.car = car;
}

var Car1 = new Car("Honda", 2018, "Gray", 32);
var Car2 = new Car("Ford", 2020, "Red", 28);
var Car3 = new Car("Toyota", 2016, "White", 34);

var Vehicle1 = new Vehicle(Car1);
var Vehicle2 = new Vehicle(Car2);
var Vehicle3 = new Vehicle(Car3);

console.log(Car1.mpg);
console.log(Car2.mpg);
console.log(Car3.mpg);

console.log(Vehicle1.car.mpg);
console.log(Vehicle2.car.mpg);
console.log(Vehicle3.car.mpg);