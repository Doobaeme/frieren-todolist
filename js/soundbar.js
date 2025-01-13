document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.querySelector(".audio-player");
  const playPauseButton = document.querySelector(".play-pause");
  const prevTrackButton = document.querySelector(".prev-track");
  const nextTrackButton = document.querySelector(".next-track");
  const soundbar = document.getElementById("soundbar");
  const intro = document.getElementById("intro");

  const tracks = ["music/frieren_ost1.mp3", "music/frieren_ost2.mp3"];
  let currentTrackIndex = 0;
  let userInteracted = false;

  // 초기 설정 및 아이콘 상태 업데이트
  const initializeAudio = () => {
    audioPlayer.src = tracks[currentTrackIndex];
    audioPlayer.volume = 0.5; // 볼륨 50%
    updatePlayPauseIcon();
  };

  // 아이콘 상태 업데이트
  const updatePlayPauseIcon = () => {
    playPauseButton.classList.toggle("fa-pause", !audioPlayer.paused);
    playPauseButton.classList.toggle("fa-play", audioPlayer.paused);
  };

  // 트랙 업데이트 및 자동 재생
  const updateTrack = (direction) => {
    currentTrackIndex =
      (currentTrackIndex + direction + tracks.length) % tracks.length;
    audioPlayer.src = tracks[currentTrackIndex];
    audioPlayer.play();
    updatePlayPauseIcon();
  };

  // #intro가 화면에 나타나면 사운드바 숨기기
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      soundbar.classList.toggle("hidden", entry.isIntersecting);
      if (entry.isIntersecting && userInteracted) audioPlayer.play();
    });
  });
  observer.observe(intro);

  // 사용자 상호작용 감지
  document.addEventListener("click", () => (userInteracted = true), {
    once: true,
  });

  // 이벤트 리스너
  playPauseButton.addEventListener("click", () =>
    audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause()
  );
  prevTrackButton.addEventListener("click", () => updateTrack(-1));
  nextTrackButton.addEventListener("click", () => updateTrack(1));
  audioPlayer.addEventListener("play", updatePlayPauseIcon);
  audioPlayer.addEventListener("pause", updatePlayPauseIcon);

  // 초기화 호출
  initializeAudio();
});
