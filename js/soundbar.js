document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.querySelector(".audio-player");
  const playPauseButton = document.querySelector(".play-pause");
  const soundbar = document.getElementById("soundbar");
  const intro = document.getElementById("intro");
  const beforeLogin = document.getElementById("before-login");
  const afterLogin = document.getElementById("after-login");

  const ost1 = "music/frieren_ost1.mp3";
  const ost2 = "music/frieren_ost2.mp3";
  let currentTrack = ost1; // 초기 트랙 설정
  let userInteracted = false; // 사용자 상호작용 여부 확인

  // 초기화: 현재 트랙 설정 및 위치 복원
  const initializeAudio = () => {
    audioPlayer.src = currentTrack;

    // 저장된 위치 가져오기
    const savedTime = localStorage.getItem("audioCurrentTime");
    if (savedTime) {
      audioPlayer.currentTime = parseFloat(savedTime); // 위치 복원
    }

    audioPlayer.volume = 0.5; // 볼륨 설정
    updatePlayPauseIcon();
    soundbar.classList.remove("hidden"); // 초기 사운드바 표시
  };

  // 재생/일시정지 버튼 아이콘 상태 업데이트
  const updatePlayPauseIcon = () => {
    if (audioPlayer.paused) {
      playPauseButton.classList.remove("fa-pause");
      playPauseButton.classList.add("fa-play");
    } else {
      playPauseButton.classList.remove("fa-play");
      playPauseButton.classList.add("fa-pause");
    }
  };

  // 트랙 변경 함수
  const switchTrack = (newTrack) => {
    if (currentTrack !== newTrack) {
      currentTrack = newTrack;
      audioPlayer.src = currentTrack;

      // 저장된 위치 초기화
      localStorage.removeItem("audioCurrentTime");

      audioPlayer
        .play()
        .catch((err) => console.error("오디오 재생 오류:", err));
      updatePlayPauseIcon();
    }
  };

  // 로그인 상태에 따른 트랙 설정
  const handleLoginState = () => {
    if (!beforeLogin.classList.contains("hidden")) {
      switchTrack(ost1); // #before-login 상태에서 ost1 재생
    } else if (!afterLogin.classList.contains("hidden")) {
      switchTrack(ost2); // #after-login 상태에서 ost2 재생
    }
  };

  // intro가 화면에 나타날 때 클릭 이벤트 처리
  intro.addEventListener("click", () => {
    if (!userInteracted) {
      userInteracted = true;
      audioPlayer
        .play()
        .catch((err) => console.error("오디오 재생 오류:", err));
      updatePlayPauseIcon();
    }
  });

  // #before-login에서 사용자 상호작용 감지
  beforeLogin.addEventListener("click", () => {
    if (!userInteracted) {
      userInteracted = true; // 상호작용 감지
      audioPlayer
        .play()
        .catch((err) => console.error("오디오 재생 오류:", err));
      updatePlayPauseIcon();
    }
  });

  // 재생/일시정지 버튼 클릭 이벤트
  playPauseButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
      audioPlayer
        .play()
        .catch((err) => console.error("오디오 재생 오류:", err));
    } else {
      audioPlayer.pause();
    }
    updatePlayPauseIcon();
  });

  // 음악 재생 시간 저장
  audioPlayer.addEventListener("timeupdate", () => {
    localStorage.setItem("audioCurrentTime", audioPlayer.currentTime);
  });

  // 오디오 이벤트: 재생/일시정지 시 아이콘 상태 업데이트
  audioPlayer.addEventListener("play", updatePlayPauseIcon);
  audioPlayer.addEventListener("pause", updatePlayPauseIcon);

  // 로그인 이벤트: #before-login -> #after-login
  document.querySelector(".login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    beforeLogin.classList.add("hidden");
    afterLogin.classList.remove("hidden");
    handleLoginState();
  });

  // 초기화 호출
  initializeAudio();
  handleLoginState();
});
