// // NodeJS +ExpressJS +DB

// // js =>NodeJS => file FIlesystem => server


// // console.log("first")

// console.log(globalThis)
// console.log(document)

// a()
// var a=10;
// var a=()=>{
//     console.log(a);
// }


// const a
// a = 5;
// console.log(a)


// var a="hello"
// a[0]='z'
// a="byee"
// console.log(a)


// console.log(null+1)


let fs = require("fs")


// fs.writeFileSync("index.html","hello fs , we are learng backend")

// fs.writeFile("index.html","hello from async",(err)=>{
//     if(err) throw err;
//     console.log("fs")
// })

// fs.writeFileSync("index.txt","hello FS")
// fs.writeFile("index.txt", "hello from async ", (err) => {
//     if (err) throw err;
//     console.log("file write successfully")
// })


// fs.appendFileSync("index.txt","zxcv")
// fs.appendFile("index.txt", "hello from async ", (err) => {
//     if (err) throw err;
//     console.log("file write successfully")
// })


// fs.renameSync("index.txt","hello.txt")
// fs.rename("index.txt", "indexx.txt ", (err) => {
//     if (err) throw err;
//     console.log("file write successfully")
// })


// fs.unlinkSync("index.html")
// fs.unlink("index.html",(err) => {
//     if (err) throw err;
//     console.log("file write successfully")
// })


// let res =fs.existsSync("index.js")
// console.log(res)
// fs.access("index.js", fs.constants.F_OK, (err) => {
//   console.log(err ? "File does not exist" : "File exists");
// });



// let text = fs.readFileSync("index.txt")
// console.log(text.toString())

// // let text = fs.readFileSync("index.js", "utf8");
// // console.log(text);

fs.readFile("index.js", "utf8", (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log(data); // prints file content
  console.log("Done reading (async)");
});
