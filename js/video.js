var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	// preload the video
	video.preload = "auto";
	// turn off looping
	video.loop = "false";
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// play video
	video.play();
	// update volume information
	document.querySelector("#volume").innerHTML = document.getElementById("slider").value + '%'
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	// pause video
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	// set current speed of the video 
	let currSpeed = video.playbackRate;
	// decreases current speed of the video by 10%
	let updatedSpeed = video.playbackRate = currSpeed * 0.9;
	// logs the updated (slowed) speed
	console.log(`Video speed is ${updatedSpeed}`);
});

document.querySelector("#faster").addEventListener("click", function(){
	// get current speed of video 
	let currSpeed = video.playbackRate;
	// increase video by the previous percent descrease
	let updatedSpeed = video.playbackRate = currSpeed/0.9;
	// log updated (increased) speed
	console.log(`Video speed is ${updatedSpeed}`);
});

document.querySelector("#skip").addEventListener("click", function(){
	// gets current video time and adds 10 seconds
	video.currentTime += 10;
	// checks if current time is greater than video duration
	if (video.currentTime > video.duration){
		// if true, starts video at beginning
		video.currentTime = 0;
	}
	// log current time
	console.log(`Current video time is ${video.currentTime}`);
})

document.querySelector("#mute").addEventListener("click", function(){
	// checks that button reads "mute"
	if (document.querySelector("#mute").innerHTML == "Mute"){
		// if true, sets video to mute
		video.muted = true;
		// changes button to read unmute
		document.querySelector("#mute").innerHTML = "Unmute";
	// checks that button reads unmute
	} else if (document.querySelector("#mute").innerHTML == "Unmute"){
		// if true, sets video to unmute
		video.muted = false;
		// sets button text back to mute
		document.querySelector("#mute").innerHTML = "Mute";
	};
});

document.querySelector("#slider").addEventListener("input", function(){
	// set video volume to slider value
	video.volume = document.getElementById("slider").value/100;
	// change video volume text
	document.querySelector("#volume").innerHTML = document.getElementById("slider").value + '%';
});

// if vintage button is clicked, add oldSchool styling
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

// if original button is clicked, remove oldSchool styling
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});


