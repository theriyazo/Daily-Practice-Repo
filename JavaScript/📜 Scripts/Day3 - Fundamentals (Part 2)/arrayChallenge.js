
const bills = [125, 555, 44];
const tips = [];
const total = [];

const calcTip = (bilValue) => {
    if(bilValue >= 50 && bilValue <= 300){
        return bilValue*15/100;
    }
    else {
        return bilValue*20/100;
    }
}
const calcTotal = () =>{
    for(let i=0; i<bills.length; i++){
        total.push(bills[i]+calcTip(bills[i]));
    }
}

for(let i=0; i<bills.length; i++){
    tips.push(calcTip(bills[i]));
}

calcTotal();

console.log(bills);
console.log(tips);
console.log(total);
