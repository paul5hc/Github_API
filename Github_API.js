var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'X'
})

github.users.getFollowingForUser({
  username: 'paul5hc'
}, function (err, res) {
  if (err) throw err
  //var keys = Object.keys(res.data);
  console.log("\n*****Following:*****")
  for (x=0; x<res.data.length; x++){
    console.log(res.data[x].login)
  }
  console.log("Number of Following: " + (res.data.length))
})

github.users.getFollowersForUser({
  username: 'paul5hc'
}, function (err, res) {
  if (err) throw err
  //var keys = Object.keys(res.data);
  console.log("\n*****Followers*****")
  for (x=0; x<res.data.length; x++){
    console.log(res.data[x].login)
  }
  console.log("Number of Followers: " + (res.data.length))
})

github.repos.getAll({
  username: 'paul5hc'
}, function (err, res) {
  if (err) throw err
  //var keys = Object.keys(res.data);
  console.log("\n*****Repositories*****")
  for (x=0; x<res.data.length; x++){
    console.log(res.data[x].name)
  }
  console.log("Number of Repositories: " + (res.data.length))
})

github.repos.getCommits({
  owner: 'paul5hc',
  repo: 'Github_API'
}, function (err, res) {
    if (err) throw err
    for (x=0; x<res.data.length; x++){
      console.log(res.data[x].commit.message)
    }
})
