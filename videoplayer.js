//getting the items we need from the dom
const video = document.getElementById('video-screen');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timesstamp');

// play and pause video using html 5 prebuilt video functionality paused and play
function pauseOrPlay(){
    if(video.paused){
        video.play();
    } else if(video.play){
        video.pause();
    }
}

// update play icon 
function updatePlayIcon(){
    if(video.paused){
        play.firstElementChild.classList.replace('fa-pause', 'fa-play');
    } else if(video.play){
        play.firstElementChild.classList.replace('fa-play', 'fa-pause');
    }
}
// Event listeners 
video.addEventListener('click', pauseOrPlay);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
play.addEventListener('click', pauseOrPlay);