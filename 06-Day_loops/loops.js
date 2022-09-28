// Iterate 0 to 10 using for loop, do the same using while and do while loop
// for(i = 0; i <= 10; i++){
//     console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 0
// do{
//     console.log(i);
//     i++;
// }
// while(i <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for(i = 10; i >= 0; i--){
//     console.log(i);
// }

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// let i = 10;
// do{
//     console.log(i);
//     i--;
// }
// while(i >= 0);

// Iterate 0 to n using for loop
// let n = 10;
// for(i = 0; i <= n; i++){
//     console.log(i);
// }

// for (let i=0; i < 7; i++) {
//     console.log("#".repeat(i+1))
//   }

// for (let i = 0; i <= 10; i++){
//     console.log(`${i} x ${i} = ${i * i}`);
// }

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++){
    const evenNum = (i % 2 == 0);
    console.log(evenNum);
}