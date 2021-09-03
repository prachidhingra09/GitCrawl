import gitInfo from "./index.js";

gitInfo.getRepo("prachidhingra09").then(obj => {  
    console.log(obj)
}).catch(err => {
    console.log(err)
})
