const todos = [
   {
     id:1,
     text: 'Take out the trash',
     isCompleted: true
   },
   {
     id:2,
     text: 'call the boss',
     isCompleted: true
   }, 
   {
     id:3,
     text: 'play game',
     isCompleted: false
   },
];

// for
for(let i = 0; i <= todos.length; i++){
  console.log(`For Loop Number: ${i}`);
} 

// comparison operators
x = 2 == 2;
x = 2 === '2';
x = 2 != 2 ;
x = 2 !== '2';
x = 2 > 1;
x = 2 < 1;
x = 2 >= 2;
x = 2 <= 1;

let x;
x = 5 + '5';

x = 5 + Number('5');

console.log(x);