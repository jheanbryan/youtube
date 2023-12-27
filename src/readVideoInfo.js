let videoInfoList = [];

async function readJson() {
    await fetch('./src/videoInfo.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            videoInfoList = data;
        })
}
await readJson()
export { videoInfoList };