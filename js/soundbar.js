document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.querySelector(".audio-player");
  const playPauseButton = document.querySelector(".play-pause");
  const prevTrackButton = document.querySelector(".prev-track");
  const nextTrackButton = document.querySelector(".next-track");

  const tracks = ["music/frieren_ost1.mp3", "music/frieren_ost2.mp3"];
  let currentTrackIndex = 0;

  // 초기 설정
  function initializeAudio() {
    audioPlayer.src = tracks[currentTrackIndex];
    audioPlayer.volume = 0.7;
  }
  initializeAudio();

  // 재생/일시정지 토글
  function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.classList.remove("fa-play");
      playPauseButton.classList.add("fa-pause");
    } else {
      audioPlayer.pause();
      playPauseButton.classList.remove("fa-pause");
      playPauseButton.classList.add("fa-play");
    }
  }

  // 이전 곡 재생
  function playPrevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    updateTrack();
  }

  // 다음 곡 재생
  function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updateTrack();
  }

  // 트랙 업데이트
  function updateTrack() {
    audioPlayer.src = tracks[currentTrackIndex];
    audioPlayer.play();
    playPauseButton.classList.remove("fa-play");
    playPauseButton.classList.add("fa-pause");
  }

  // 이벤트 리스너
  playPauseButton.addEventListener("click", togglePlayPause);
  prevTrackButton.addEventListener("click", playPrevTrack);
  nextTrackButton.addEventListener("click", playNextTrack);
});
