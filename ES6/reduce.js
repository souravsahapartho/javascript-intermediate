const numbers = [4, 54, 33, 67, 85, 32];

let sum=0;

for(const num of numbers){
    sum=sum+num;

}
console.log(sum);


const total=numbers.reduce((acc, curr)=>acc+curr)
console.log(total);