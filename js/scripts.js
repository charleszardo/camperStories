$(document).ready(function(){
	var stories = []
	
	var camperNewsAPI = "http://www.freecodecamp.com/news/hot";
	
	function createDiscussLink(title) {
		var base = "http://www.freecodecamp.com/news/";
		return base + title.split(" ").join("-");
	}
	
	function createUserLink(uname) {
		return "http://www.freecodecamp.com/" + uname;
	}
	
	function truncateHeadline(headline, len) {
		len = len || 20;
		if (headline.length > 20) {
			headline = headline.substring(0, len) + "...";
		}
		return headline;
	}
	
	function addStory(item) {
  	var author = item.author,
				uname = author.username,
				userLink = createUserLink(uname),
				headline = truncateHeadline(item.headline),
				image = (item.image || author.picture),
				link = item.link,
				rank = item.rank,
				discuss = item.storyLink,
				discussLink = createDiscussLink(discuss),
				date = new Date(item.timePosted),
				date = date.toDateString();
				
		var html = "<div class='story-container'>" +
				"<div class='user-image'><a href='" + link + "' target='_blank'><img src='" + image + "'></a></div>" +
				"<div class='user-info'>" +
				"<div class='headline'><a href='" + link + "' target='_blank'>" + headline + "</a></div>" +
				"<div class='author'><a href='" + userLink + "' target='_blank'>by - " + uname + "</a></div>" +
				"<div class='like-container'>" +
				"<div class='like'><p><span class='heart'>&#9829;</span>&nbsp;" + rank + "</p></div>" +
				"<a href='" + discussLink + "' target='_blank'><button class='discuss'>Discuss</button></a>" +
				"</div>" +
				"<div class='date'><p>Posted on: " + date + "</p></div>" +
				"</div></div>"
				
		$("#stories").append(html);
	}
	
	function checkStories() {
		$.getJSON( camperNewsAPI, {
		    format: "json"
		  }).done(function( data ) {
		      data.forEach(function(item) {
						var headline = item.headline;
						if (stories.indexOf(headline) === -1) {
							stories.push(headline);
							addStory(item);
						}
		      });
		    });
	}
	
	checkStories();
	setInterval(checkStories, 1000);
});
