var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'X'
})


/******************************************************************************
github.users.getFollowingForUser({
  username: 'paul5hc'
}, function (err, res) {
  if (err) throw err
  console.log("\n*****Following:*****")
  /*for (x=0; x<res.data.length; x++){
    console.log((x+1) + " " + (res.data[x].login))
  }
  console.log("Number of Following: " + (res.data.length))
})

github.users.getFollowersForUser({
  username: 'paul5hc'
}, function (err, res) {
  if (err) throw err
  console.log("\n*****Followers*****")
  /*for (x=0; x<res.data.length; x++){
    console.log((x+1) + " " + (res.data[x].login))
  }
  console.log("Number of Followers: " + (res.data.length))
})
*******************************************************************************/

github.repos.getAll(
{
  username: 'paul5hc'
}, function (err, res) {
  if (err) throw err
  var repoArray = new Array(res.data.length)
  var sizeArray = new Array(res.data.length)
  var commitsArray = new Array(res.data.length)
  //console.log("\n********Repos********\n")
  for (x=0; x<res.data.length; x++){
    console.log((res.data[x].name) + ": " + (res.data[x].size) + "kb")
    repoArray[x] = res.data[x].name
    sizeArray[x] = res.data[x].size
    github.repos.getCommits({
      owner: 'paul5hc',
      repo: repoArray[x]
    }, function (err, res1)
    {
        if (err) throw err
        console.log("\n********COMMITS********\n")
      //  var keys = Object.keys(res.data[0])
      //  console.log("\n" + keys + "\n")

        commitsArray[x] = res1.data.length
        console.log("Number of Commits: " + commitsArray[x])
    })
  }
  console.log("\nNumber of repos = " + (x))

  })



/*github.repos.getCommits({
  owner: 'paul5hc',
  repo:  'Github_API'
}, function (err, res) {
    if (err) throw err
    var keys = Object.keys(res.data);
    console.log(res.data[0])
    /*for (x=0; x<res.data.length; x++){
      console.log((x+1) + " " + (res.data[x].commit.message))
    }
})*/

/*************************************************************************************************************/

/*github.repos.getAll({
  username: 'paul5hc'
}, function (err, res) {
  if (err) throw err
  var keys = Object.keys(res.data[0]);
  //console.log("\n*****Repositories*****")
  console.log(res.data[5])
})*/

/*github.gists.getCommits({
  id: 25330735
}, function (err, res) {
if (err) throw err
//var keys = Object.keys(res.data[0]);
console.log(res)
})*/
