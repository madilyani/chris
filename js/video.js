const video = document.querySelectorAll(".video");
const videoOuter = document.getElementById("videoOuter");
const videoPlay = document.querySelectorAll(".videoPlay");
videoPlay.forEach((playBtn) => {
  onPlay(playBtn);
});
function onPlay(playBtn) {
  playBtn.addEventListener("click", function (e) {
    videoItem = e.target.parentElement.lastElementChild;
    if (videoItem.paused) {
      playBtn.classList.add("paused");
      videoOuter.classList.add("paused");
      videoItem.play();
    } else {
      playBtn.classList.remove("paused");
      videoOuter.classList.remove("paused");
      videoItem.pause();
    }
    // console.log(videoItem);
  });
}
