// map method -- working like ForEach but make the NEW ARRAY of *return value
//return is must while using map function
// array.map(callbackfunction);
// return new array

const numbers = [3,4,6,1,8];

function myFunc(number){
    return number*number ;   //you should always return here while using map function 
}

const sqNum = numbers.map(myFunc);
console.log(sqNum);   // [9,16,36,1,64]

// OR WE CAN WRITE THE CALLBACK FUNCTION AS :

const sqNum1 = numbers.map(function myFunc1(num){
    return num*num ;
});
console.log(sqNum1);  // <---- GIVE NEW ARRAY