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
							
					var html = "<div class='story-container'>" +
							"<div class='user-image'><img src='" + image + "'></div" +
							"<div class='user-info'>" +
							"<div class='headline'><p>" + headline + "</p></div>" +
							"<div class='author'><p>by - " + uname + "</p></div>" +
							"<div class='like-container'>" +
							"<div class='like'><p>" + rank + "</p></div>" +
							"<div class='discuss'><a href='#'>Discuss</a></div>" +
							"</div>" +
							"<div class='date'><p>" + date + "</p></div>" +
							"</div></div>"
							
					$("#stories").append(html);
	      });
	    });
});
