var data = require("../data.json");

exports.addFriend = function(request, response) { 
	response.render('index.handlebars', data);  

	var newFriend = {
		'name' : request.query.name,
		'description' : request.query.description,
		'imageURL' : 'https://picsum.photos/400/400'
	};

	data.friends.push(newFriend);
}