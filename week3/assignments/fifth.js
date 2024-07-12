const readline=require("readline-sync")

function checker(marks){
    let mark= Math.round(marks);

    if (mark >= 90) {
        return "A";
    } else if (mark >= 80 && mark <= 89) {
        return "B";
    } else if (mark >= 70 && mark <= 79) {
        return "C";
    } else if (mark >= 60 && mark <= 69) {
        return "D";
    } else if (mark >= 50 && mark <= 59) {
        return "E";
    } else if (mark >= 0 && mark <= 49) {
        return "Failed";
    } else {
        return "Invalid";
    }
}

const mark=Number.parseFloat(readline.question("enter the mark of the student"))
let result=checker(mark)
console.log(result)