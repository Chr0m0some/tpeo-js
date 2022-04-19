function countUpwardsByThree(){
    var counter = 0;
    for(var i = 0; i < 11; i++){
        console.log(counter);
        counter += 3;
    }
}

function guessMyFavoriteNumber(guess){
    var myFavoriteNumber = 14;
    if(guess == myFavoriteNumber){
        console.log("You guessed my favorite number!");
    }
    else{
        console.log("Try again!");
    }
}

function convertNumberToDay(number){
    switch(number){
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Not a valid day of the week");
    }
}

countUpwardsByThree();

guessMyFavoriteNumber(12);
guessMyFavoriteNumber(25);
guessMyFavoriteNumber(14);

for(var i = 0; i < 7; i++){
    convertNumberToDay(i);
}
