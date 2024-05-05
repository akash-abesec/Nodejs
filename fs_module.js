
const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data);
// });console.log("this is a file");


// const a = fs.readFileSync('file.txt')
// console.log(a.toString());
// console.log(a.toString());

// fs.writeFile('file2.txt', "This is a data",()=>{
//     console.log("Written  to the file");
// })

b = fs.writeFileSync('file2.txt', "This is a data2");
console.log(b);
console.log("this is a file");