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


// let fs = require("fs")


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

// fs.readFile("index.js", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error:", err);
//     return;
//   }
//   console.log(data); // prints file content
//   console.log("Done reading (async)");
// });


//  Server Creating in node

// let http =require("http")

// let server =http.createServer((req,res)=>{
//   res.send("hello from server")
// })
// server.listen(3000,()=>{
//   console.log("server running on port no 3000")
// })

// console.log(http,"hehe")



// Data of laptop

// let os =require("os")
// console.log(os.type())
// console.log(os.platform())
// console.log(os.arch())
// console.log(os.platform())
// console.log(os.freemem())
// console.log(os.homedir())
// console.log(os.hostname());


// create server with express

// let express =require("express")
// let app =express()

// app.use((req,res,next)=>{
//   // res.send("these are middleware")
//   next()
// })

// app.get('/',(req,res)=>{
//   res.send("hello from express server")
// })
// app.get("/home",(req,res)=>{
//   res.send("hello from homeeeeee ")
// })
// app.get('/about',(req,res)=>{
//   res.send("hello from about section")
// })
// app.listen(4000,()=>{
//   console.log("server running on 4000")
// })







// let fs =require('fs')
// let express =require("express")
// let app =express()

// app.get("/",(req,res)=>{
//   res.send("hello from server")
// })

// app.get('/create',(req,res)=>{
//   fs.writeFileSync('index.html',"hello from writeFileSync")
//   res.send("file created")
// })

// app.get('/read',(req,res)=>{
//   let data =fs.readFileSync('index.html')
//   res.send(data.toString())
// })

// app.get('/append',(req,res)=>{
//   fs.appendFileSync('index.html',"append something")
//   res.send('file appended')
// })

// app.get('/delete',(req,res)=>{
//   fs.unlinkSync('index.html')
//   res.send('delete file')
// })

// app.listen(4000,()=>{
//   console.log('server running on port 4000')
// })



let express = require('express')
let app = express()

app.get('/:ani', (req, res) => {
  let { ani } = req.params
  res.send(ani)
  // console.log(req);
  // res.send(req)
  // req.send("heee")
})
//   app.get("/cat",(req,res)=>{
//     res.send("cat")
//     // console.log(req);
//     // res.send(req)
//     // req.send("heee")

//   })


app.listen(4000, () => {
  console.log("first")
})