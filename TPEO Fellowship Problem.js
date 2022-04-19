var dogName = "Snoopy";
var dogAge = 1;
var dogList = [];

function Dog(name, age){
    this.name = name;
    this.age = age;
}

for(var i = 0; i < 3; i++){
    dogList.push(new Dog(dogName, dogAge));
    dogAge++;
}

console.log(dogList);