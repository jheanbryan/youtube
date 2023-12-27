import { videoInfoList } from "./readVideoInfo.js";
const containerVideos = document.querySelector('.container-videos');

export function writeInfoInHtml() {
    console.log(videoInfoList);
    videoInfoList.forEach(videoInfo => {
        console.log(videoInfo);
        createElementHtml(videoInfo);
    });
};


function createElementHtml(videoInfoArray) {
    const info = `
        <div class="card-video">
            <div class="video-cover">
                <img src="${videoInfoArray.videoCover}" alt="video de ${videoInfoArray.channelName}">
                <span class="duration">
                    ${videoInfoArray.videoDuration}
                </span>
            </div>

            <div class="container-info-video">
                <div class="photo-cover">
                    <img src="${videoInfoArray.photoCover}" alt="foto de ${videoInfoArray.channelName}">
                </div>

                <div class="info-video">
                    <span class="title-video">${videoInfoArray.videoTitle}</span>
                    <span class="channel-name">${videoInfoArray.channelName}</span>
                    <span class="views-time">${videoInfoArray.views} visualizações • ${videoInfoArray.time}</span>
                </div>

                <div class="more-info">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
        `;
    containerVideos.innerHTML += info;
};