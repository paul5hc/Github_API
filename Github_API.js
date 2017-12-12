var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: '32f8a25366b81dd3a982a1e819cc3ca1361489d0'
})

github.users.getFollowingForUser({
  username: 'paul5hc'
}, function (err, res) {
  if (err) throw err
  var keys = Object.keys(res.data);
  console.log("Following:")
  for (x=0; x<res.data.length; x++){
    console.log(res.data[x].login)
  }
})

/*github.users.getFollowersForUser({
  username: 'paul5hc'
}, function (err, res) {
  if (err) throw err
  //console.log(res)
})*/
