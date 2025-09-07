const numbers=[4,6,5,2,5,7];


//  const doubled=[]
//  for(const num of numbers){
//     const result= num*2;
//     doubled.push(result);

//  }

// const doubleIt=x=>x*2;

// const doubled=numbers.map(doubleIt)

const doubled=numbers.map(x=>x*2);

const fiveTimes=numbers.map(num=>num*5);

const squared=numbers.map(num=>num*num)


const friends=['Javed', 'Sakib', 'Mahafuz'];

const nameLengths=friends.map(name=>name.length)

const firstLetters=friends.map(name=>name[0]);

const result=numbers.map(num=>{
   console.log(num*3);
})

console.log(firstLetters);

console.log(nameLengths);
 
 console.log(doubled);

 console.log(squared);