const video = document.querySelector('#video');
const nowTime = document.querySelector('#now-time');
const finalTime = document.querySelector('#final-time');
const progressBar = document.querySelector('#progress-bar');
const volumeIcon = document.querySelector('#volume-icon');   
const volumeSlider = document.querySelector('#radio-volume');
const playButton = document.querySelector('#play-button');
const playIcon = '../assets/video-controls/play-solid.svg';
const pauseIcon = '../assets/video-controls/pause-solid.svg';
const barDiagonal = document.querySelector('#bar-diagonal');


//play/pause button
let isPlaying = false;
playButton.addEventListener('click', () => addPauseAndPlayVideo());
video.addEventListener('click', () => addPauseAndPlayVideo());
function addPauseAndPlayVideo() {
    if (isPlaying) {
        video.pause();
        playButton.src = playIcon;
    } else {
        video.play();
        playButton.src = pauseIcon;
    }
    isPlaying = !isPlaying;
}

//volume Icon
let volumeOn = true;
volumeIcon.addEventListener('click', () => {
    if (volumeOn) {
        //mudar icone pra icone off
        barDiagonal.style.animation = 'growUp 0.5s forwards';
        console.log('volume on');
        volumeOn = false;
        video.muted = true;


    } else{
        //mudar icone pra icone on
        barDiagonal.style.animation = 'lower 0.5s forwards';
        console.log('volume off');
        volumeOn = true;
        video.muted = false;
        
    }
    
});



//volume button slider
volumeSlider.addEventListener('input', () => {
    const volumeVideo = volumeSlider.value;
    updateSliderBackground(volumeSlider, volumeVideo, '#fff', '#ccc');
    video.volume = volumeVideo / 100;
});

function updateSliderBackground(element, percentageBar, leftColor, rightColor) {
    const percentage = `${percentageBar}%`;
    element.style.background = `linear-gradient(to right, ${leftColor} ${percentage}, ${rightColor} ${percentage})`;
};


/*
//video timing
video.addEventListener('loadedmetadata', () => {
    const { minutes, seconds } = returnTime(video.duration);
    finalTime.textContent = `${minutes}:${seconds}`;
    progressBar.max = video.duration;
});
*/

//Load max duration video (ex: 2:51)
loadMaxDurationVideo()
function loadMaxDurationVideo() {
    const { minutes, seconds } = returnTime(video.duration);
    finalTime.textContent = `${minutes}:${seconds}`;
    progressBar.max = video.duration;
}


//return minutes and seconds
function returnTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return { minutes, seconds };
}


//video duration
video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime;
    progressBar.value = currentTime;
    updateSliderBackground(progressBar, (currentTime / video.duration) * 100, '#ff0000', '#ccc');

    const { minutes, seconds } = returnTime(currentTime);
    if (seconds < 10) {
        nowTime.textContent = `${minutes}:0${seconds}`;
    } else{
        nowTime.textContent = `${minutes}:${seconds}`;
    }
});

progressBar.addEventListener('input', () => {
    video.currentTime = progressBar.value;
    updateSliderBackground(progressBar, (progressBar.value / video.duration) * 100, '#ff0000', '#ccc');
});


