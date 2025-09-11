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



// let express = require('express')
// let app = express()

// app.get('/:ani', (req, res) => {
//   let { ani } = req.params
//   res.send(ani)
//   // console.log(req);
//   // res.send(req)
//   // req.send("heee")
// })
// //   app.get("/cat",(req,res)=>{
// //     res.send("cat")
// //     // console.log(req);
// //     // res.send(req)
// //     // req.send("heee")

// //   })


// app.listen(4000, () => {
//   console.log("first")
// })



//   let express=    require("express")
//   let app=     express()

//      app.use((req,res,next)=>{
//         // res.send("mai nhi jane dunga tumhe....")
//         next()

//      }) 
//      app.use((req,res)=>{
//         console.log(req);

//         //  res.send("mai to bilkul  nhi jane dunga tumhe....")


//      })
//      app.get('/',(req,res)=>{
//         res.send("don  no 1")
//      })
//      app.get("/hello",(req,res)=>{
//         res.send("don no 2")
//      })
//      app.get("/about",(req,res)=>{
//         res.send("don no 3")
//      })
//      app.listen(4000,()=>{
//         console.log("server running on 4000");

//      })

//new class 

//  let express=    require("express")
//    let fs=    require("fs")
//       let app=      express()

//       app.get("/",(req,res)=>{
//         res.send("hello from server")
//       })

//       app.get("/create",(req,res)=>{
//            fs.writeFileSync("index.html","happy birthday anya")
//            res.send("file create ")
//       })

//       app.get("/read",(req,res)=>{
//            let data=    fs.readFileSync("index.html")
//            res.send(data.toString())
//       })


//       app.listen(4000,()=>{
//         console.log("sever running on port no 4000");

//       })


// let express = require("express")
// let app = express()
// app.use(express.json())
// let fs = require("fs")
// let arr = [1, 2, 3, 4, 5, 6, 5, 4, 34, 3, 11, 3, 4, 55, 56]

// app.get("/:data", (req, res) => {
//   let { data } = req.params
//   let val = arr.filter((a) => {
//     return data == a

//   })

//   console.log(val);
//   res.send(val)

//   //  /
// })

// app.get('/',(req,res)=>{
//   res.send("hello")

// })
// http://localhost:4000/search?name=anu&&lastname=jain
// app.get("/search",(req,res)=>{
//   let data=   req.query
//   console.log(data);

//  let {a}=   req.params
//  console.log(a);
//   let val=   arr.filter((data)=>{
//       return data==a

//     })
//     res.send(val)

//    npx nodemon start

//  let {ani}=    req.params
//     res.send(ani)
// console.log(req);
// res.send(req)
// req.send("heee")
// })
//   app.get("/cat",(req,res)=>{
//     res.send("cat")
//     // console.log(req);
//     // res.send(req)
//     // req.send("heee")

//   })
//  srverrrrrrr    
// app.get("/",()=>{
//   res
// })
//     app.get("/read",(req,res)=>{
//          let data=  fs.readFileSync('index.txt')
//       res.send(data.toString())
//     })

// app.post("/creat",(req,res)=>{
//      let data=    req.body
//     //  console.log(data);
//     fs.writeFileSync("index.txt",JSON.stringify(data))
//   res.send("hello mai post req hu ")
// })

//     app.delete("/remove",(req,res)=>{
//       fs.unlinkSync("index.txt")
//       res.send("data delet ho chuka haiii")

//     })
// app.post ,app.patch app.delete

//
// app.listen(4000, () => {
//   console.log("server running  on 4000");

// })





// let data={
//     ani:"cat"
// }
// let {ani}=data

// console.log();



//day- 11 sep


let express = require("express")
let app = express()
let fs = require("fs")

app.use(express.json())
app.use(express.urlencoded())



//use for receive data 
app.get('/', (req, res) => {
  let data = fs.readFileSync('hello.txt')
  res.send(data.toString())
  // res.send("hello from get ")
})

// use for send data
app.post('/create', (req, res) => {
  let data = req.body
  // console.log(data);
  console.log(req.body)
  fs.writeFileSync("index.txt", JSON.stringify(data,null,2))
  res.send("hello mai post req hu ")
});


// update a part of data
app.patch('/edit', (req, res) => {
  let dataForEdit = req.body
  fs.appendFileSync('index.txt', dataForEdit.msg)
  res.send("file was updated")
})

// use for delete file
app.delete("/remove", (req, res) => {
  fs.unlinkSync("index.txt")
  res.send("data delet ho chuka haiii")

})

app.listen(4000, () => {
  console.log("server is running on 4000")
})