var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	// preload the video
	video.preload = "auto";
	// turn off looping
	video.loop = "false"
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// play video
	video.play();
	// update volume information
	document.querySelector("#volume").innerHTML = document.getElementById("slider").value()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	// pause video
	video.pause();
})

