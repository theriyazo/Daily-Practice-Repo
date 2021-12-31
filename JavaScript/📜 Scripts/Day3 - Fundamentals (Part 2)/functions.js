

const userbirthYear = prompt("Enter Your Birth Year");
const userName = prompt("Enter your first name")

const yearsUntilRetairment = (birthYear, firstName) => {
    const age = calcAge(birthYear);

    if(age <= 60){
        return `${firstName} retaiers in ${remainingYears(age)} years`; //template literal
    }
    else{
        return `${firstName} retaired in ${retierdYear(age)}!`;
    }
}

function retierdYear(age){
    return 2021- (age - 60);
}
function calcAge(birthYear){
    return 2021 - birthYear;
}
function remainingYears(age){
    return 60-age;
}

console.log(yearsUntilRetairment(userbirthYear, userName));