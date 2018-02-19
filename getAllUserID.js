
//get test user list
var _ = require("underscore");
var userList = require('./users.json');
var fs = require('fs');
userIDs = [];
var done = _.after(userList.length, function(){
		console.log(JSON.stringify(userIDs));
});
_.each(userList, function(user, index){
    userIDs.push(user.userID);
		done();
});
