// filter function 
// array.filter(callbackfunction);
//return is must while using this function

const numbers = [1,3,2,6,4,8];

const isEven = function (num){
    return num % 2 ==0 ;

}

const evenNumbers  = numbers.filter(isEven);

console.log(evenNumbers);// [2, 6, 4, 8]  <---- GIVE NEW ARRAY


//---------------------


const evenNumbers1 = numbers.filter((number)=>{
    return number % 2 === 0;
});

console.log(evenNumbers1);// [2, 6, 4, 8]