# GitCrawl

Its a package to retrieve the github details of any user or organization created using node.js 


## Usage

1. Install the package to your project using the following command

~~~~ {.html}
npm install gitcrawl
~~~~

1. Import the package in your project

~~~~ {.html}
import gitInfo from 'gitcrawl';
~~~~

* `gitInfo.getUserInfo("abc")` is the function to get general info of any user **abc**.

* `gitInfo.getRepos("prachidhingra09")` is the function to get all repositories of any user **abc**.

* `gitInfo.getFollowers("prachidhingra09")` is the function to get all followers of a user **abc**.

* `gitInfo.getOrgDetail("xyz")` is the function to get any organization details of any organization **xyz**.

* `gitInfo.getOrgRepos("xyz")` is the function to get all repositories of any organization **xyz**.

> Built By: `prachidhingra09`
