// Author: Paul Byrne
// Student Number: 15317444
// Date: 14/12/2017

var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})
var repoArray = []

github.authenticate({
  type: 'oauth',
  token: 'X'
})

github.repos.getAll(
{
  username: 'paul5hc'
}, function (err, res) {
    if (err) throw err
    var sizeArray = new Array(res.data.length)
    var languageArray = new Array(res.data.length)
    var commitsArray = new Array(res.data.length)
    console.log("\n***************************************")
    console.log('\x1b[33m%s\x1b[0m', ("      Repositories, Size, Language       "))
    console.log("***************************************")
    for (var x=0; x<res.data.length; x++){
      console.log((x+1)+ ". " + (res.data[x].name) + ", Size: " + (res.data[x].size) + "kb, Language: " + (res.data[x].language))
      repoArray.push(res.data[x].name)
      sizeArray[x] = res.data[x].size
    }
    console.log("Number of repositories: " + (res.data.length))
  }
)

github.repos.getCommits(
{
  owner: 'paul5hc',
  repo:  'LowestCommonAncestor'
}, function (err, res) {
    if (err) throw err
    console.log("\n***************************************")
    console.log('\x1b[33m%s\x1b[0m', ("   LowestCommonAncestor Commits     "))
    console.log("***************************************")
    for (y=0; y<res.data.length; y++){
      var cutResult = res.data[y].commit.author.date.substring(0, 10)
      message = res.data[y].commit.message
      console.log((y+1) + ". Date: " + cutResult + ", Comment: " + message)
    }
    console.log("Number of commits for LowestCommonAncestor: " + (res.data.length))
  }
)

github.users.getFollowingForUser({
  username: 'paul5hc'
}, function (err, res) {
    if (err) throw err
    console.log("\n***************************************")
    console.log('\x1b[33m%s\x1b[0m', ("               Following               "))
    console.log("***************************************")
    for (x=0; x<res.data.length; x++){
      console.log((x+1) + " " + (res.data[x].login))
    }
    console.log("Number of Following: " + (res.data.length))
  }
)

github.users.getFollowersForUser({
  username: 'paul5hc'
}, function (err, res) {
    if (err) throw err
    console.log("\n***************************************")
    console.log('\x1b[33m%s\x1b[0m', ("               Followers               "))
    console.log("***************************************")
    for (x=0; x<res.data.length; x++){
      console.log((x+1) + " " + (res.data[x].login))
    }
    console.log("Number of Followers: " + (res.data.length))
  }
)
