$(document).ready(function(){
	var camperNewsAPI = "http://www.freecodecamp.com/news/hot";

	$.getJSON( camperNewsAPI, {
	    format: "json"
	  }).done(function( data ) {
	      data.forEach(function(item) {
	      	var author = item.author,
							uname = author.username,
							headline = item.headline,
							image = (item.image || author.picture),
							link = item.link,
							rank = item.rank,
							discuss = item.storyLink,
							date = item.timePosted;
	      });
	    });
		
			$("#news").append("<h2>hi</h2>");
			$("#news").append("<h2>bye</h2>");
});
