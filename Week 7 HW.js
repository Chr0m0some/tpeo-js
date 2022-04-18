var carList = [];

var model = "hyundai";
var color = "black";
var year = 2019;
var mpg = 36;
var id = 1;

function Car(model, color, year, mpg, id){
    this.model = model;
    this.color = color;
    this.year = year;
    this.mpg = mpg;
    this.id = id;
}

function getCarsBetweenIds(idMin, idMax){
    var carBetweenIds = [];

    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; j++){
            carList[i][j].color = "blue";
            if((carList[i][j].id >= idMin) && (carList[i][j].id <= idMax)){
                carBetweenIds.push(carList[i][j]);
            }
        }
    }
    return(carBetweenIds);
}

for(var i = 0; i < 10; i++){
    carList[i] = [];
    for(var j = 0; j < 10; j++){
        carList[i][j] = new Car(model, color, year, mpg, id);
        id++;
    }
}

console.log(getCarsBetweenIds(4, 28));
console.log(getCarsBetweenIds(1, 100));
console.log(getCarsBetweenIds(35, 72));