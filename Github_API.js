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
  var keys = Object.keys(res.data);
  console.log("\nFollowing:")
  for (x=0; x<res.data.length; x++){
    console.log(res.data[x].login)
  }
})

github.users.getFollowersForUser({
  username: 'paul5hc'
}, function (err, res) {
  if (err) throw err
  var keys = Object.keys(res.data);
  console.log("\nFollowers:")
  for (x=0; x<res.data.length; x++){
    console.log(res.data[x].login)
  }
})
