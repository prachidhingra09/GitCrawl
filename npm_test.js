import gitInfo from "./index.js";

gitInfo.getUserInfo("prachidhingra09").then(obj => { 
    console.log('------------------------USER INFO----------------------------------'); 
    console.log(obj)
}).catch(err => {
    console.log(err)
})
gitInfo.getRepos("prachidhingra09").then(obj => {  
    console.log('------------------------ALL REPOS----------------------------------');
    console.log(obj)
}).catch(err => {
    console.log(err)
})
gitInfo.getFollowers("prachidhingra09").then(obj => {  
    console.log('------------------------ALL FOLLOWERS-------------------------------');
    console.log(obj)
}).catch(err => {
    console.log(err)
})
gitInfo.getOrgDetail("Tune-Zone").then(obj => {  
    console.log('------------------------ORG DETAIL-------------------------------');
    console.log(obj)
}).catch(err => {
    console.log(err)
})

gitInfo.getOrgRepos("Tune-Zone").then(obj => {  
    console.log('------------------------ORG REPOS-------------------------------');
    console.log(obj)
}).catch(err => {
    console.log(err)
})
gitInfo.getPulls("shenweichen","DeepCTR-Torch").then(obj => {  
    console.log('------------------------PULL REQUESTS-------------------------------');
    console.log(obj)
}).catch(err => {
    console.log(err)
})

