// function add(num1, num2){
//     console.log(num1+num2);
//     console.log(`${num1}과 ${num2}를 더한 결과입니다.`);
// }
// function subtract(num1, num2){
//     console.log(num1-num2);
//     console.log(`${num1}과 ${num2}를 뺀 결과입니다.`);
// }
// function multiply(num1, num2){
//     console.log(num1*num2);
//     console.log(`${num1}과 ${num2}를 곱한 결과입니다.`);
// }
// function devide(num1, num2){
//     console.log(num1/num2);
//     console.log(`${num1}를 ${num2}로 나눈 결과입니다.`);
// }
// function squared(num1, num2){
//     console.log(num1**num2);
//     console.log(`${num1}를 ${num2}로 제곱한 결과입니다.`);
// }
// function mod(num1, num2){
//     console.log(num1%num2);
//     console.log(`${num1}를 ${num2}로 나누고 남은 결과입니다.`);
// }



// const playerName ='전사';
// const playerLv =10;
// const playerMp =200;
// const playerHp =1000;

// const player ={
//     name: "전사",
//     greet: function() {
//         console.log("내 직업은 전사입니다.");
//     }   
// }



calculater = {
    name: "계산기",
    add: function (num1, num2) {
        return num1+num2;
    },
    subtract: function (num1, num2) {
        if ((num1-num2)<0){
            return -(num1-num2)
        } else {
            return num1-num2;
        }
        
    },
    multiply: function (num1, num2) {
        return num1*num2;
    },
    devide: function (num1, num2) {
        return num1/num2;
    },
    squared: function (num1, num2) {
        return num1**num2;
    },
    mod: function (num1, num2) {
        return num1%num2;
    },
}



// function add(num1, num2){
//     return (num1+num2);
// }
// function subtract(num1, num2){
//     return (num1-num2);
// }
// function multiply(num1, num2){
//     return (num1*num2);
// }
// function devide(num1, num2){
//     return (num1/num2);
// }
// function squared(num1, num2){
//     return (num1**num2);
// }
// function mod(num1, num2){
//     return (num1%num2);
// }