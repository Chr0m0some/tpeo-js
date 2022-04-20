function reverse(string){
    var buildingString = "";
    for(var i = string.length - 1; i >= 0; i--){
        buildingString = buildingString + string[i];
    }
    console.log(buildingString);
}

function numVowels(string){
    var vowelCount = 0;
    string = string.toLowerCase();
    for(var i = 0; i < string.length; i++){
        if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
            vowelCount++;
        }
    }
    return vowelCount; 
}

function numStringsShorterThanLength(strings, length){
    var numStrings = 0;
    for(var i = 0; i < strings.length; i++){
        if(strings[i].length < length){
            numStrings++;
        }
    }

    return numStrings;
}

reverse("hey");
reverse("peepeepoopoo");
reverse("Hello World");

console.log(numVowels("terrible"));
console.log(numVowels("dating"));
console.log(numVowels("single"));

console.log(numStringsShorterThanLength(["forthright", "pansy"], 4));
console.log(numStringsShorterThanLength(["asldfjs", "sdf", "ksljdfls"], 10));
console.log(numStringsShorterThanLength(["sffsds", "sdf", "sdsdfsdfxcz"], 5));