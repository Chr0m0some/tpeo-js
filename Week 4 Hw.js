function powersOfThree(){
    var myFavoritePowerOfThree = Math.pow(3, 4);
    for(var i = 0; i < 10; i++){
        var currentPowerOfThree = Math.pow(3, i);
        console.log(currentPowerOfThree);
        if(currentPowerOfThree == myFavoritePowerOfThree){
            console.log("This is my favorite power of three!");
        }
    }
}

function everyTenSeconds(){
    var intervalKey = setInterval(console.log, 10000, "Hello World!");
    setTimeout(clearInterval, 130000, intervalKey);
}

setTimeout(powersOfThree, 3000);
everyTenSeconds();