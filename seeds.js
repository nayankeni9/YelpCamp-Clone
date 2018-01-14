var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")
var data = [{
		name: "Heaven's place",
		image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
	},
	{
		name: "New Heaven's place",
		image: "https://farm7.staticflickr.com/6085/6037590541_19248d41f0.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
	},
	{
		name: "Serene Heaven's place",
		image: "https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
	}
]

function seedDB() {
	Campground.remove({}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("removed campgrounds!");
			data.forEach(function(seed) {
				Campground.create(seed, function(err, campground) {
					if (err) {
						console.log(err);
					} else {
						console.log("added data");
						Comment.create({
							text: "This place is great but I wish it had internet",
							author: "Homer"
						}, function(err, comment) {
							if (err) {
								console.log(err);
							} else {
								campground.comments.push(comment._id);
								campground.save();
								console.log("created comments");
							}
						})
					}
				});
			});
		}
	});
}

module.exports = seedDB;