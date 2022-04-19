function sumOfSquareAreas(a, b){
    var sum = Math.pow(a, 2) + Math.pow(b, 2);
    return sum;
}

function gradeCalculator(homeworkAvg, quizAvg, examAvg){
    var overallGrade = (homeworkAvg * .10) + (quizAvg * .15) + (examAvg * .75); 
    return overallGrade;
}

console.log(sumOfSquareAreas(9, 3));
console.log(sumOfSquareAreas(4, 8));
console.log(sumOfSquareAreas(5, 20));

console.log(gradeCalculator(94, 86, 92));
console.log(gradeCalculator(84, 90, 98));
console.log(gradeCalculator(45, 70, 84));