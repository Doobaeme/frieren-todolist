const beforeContents = document.querySelector("#before-login");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const characterImages = document.querySelectorAll(".character-img img");
const afterContents = document.querySelector("#after-login");
const leftColumnImages = document.querySelectorAll(
  "#after-login .left-column img"
);

const greeting = document.querySelector(".greeting");
const logOut = document.querySelector(".logout_button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const CHARACTER_KEY = "character";

// 캐릭터 선택 이벤트 리스너 추가
characterImages.forEach((img) => {
  img.addEventListener("click", () => {
    // 기존 선택된 상태 초기화
    characterImages.forEach((char) => char.classList.remove("selected"));

    // 선택한 이미지에 'selected' 클래스 추가
    img.classList.add("selected");

    // 선택한 캐릭터의 alt 값을 저장
    localStorage.setItem(CHARACTER_KEY, img.alt);
  });
});

// 로그아웃 기능
function clickLogOut(event) {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(CHARACTER_KEY);
  window.location.reload();
}

// 캐릭터 이미지 매칭
function displayCharacterImage(character) {
  leftColumnImages.forEach((img) => {
    if (img.alt === character) {
      img.classList.remove(HIDDEN_CLASSNAME);
    } else {
      img.classList.add(HIDDEN_CLASSNAME);
    }
  });
}

// 로그인 처리
function onLoginSubmit(event) {
  event.preventDefault();
  const typedUsername = loginInput.value;
  const selectedCharacter = localStorage.getItem(CHARACTER_KEY);

  if (!selectedCharacter) {
    alert("캐릭터를 선택하세요!");
    return;
  }

  beforeContents.classList.add(HIDDEN_CLASSNAME);
  afterContents.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, typedUsername);
  paintGreetings(typedUsername);
  displayCharacterImage(selectedCharacter);
}

// 로그인 후 화면 표시
function paintGreetings(username) {
  const selectedCharacter = localStorage.getItem(CHARACTER_KEY);
  greeting.innerText = `용사 ${username}의 여정 기록...`;
  displayCharacterImage(selectedCharacter);
  logOut.addEventListener("click", clickLogOut);
}

// 초기 상태 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);
const savedCharacter = localStorage.getItem(CHARACTER_KEY);

if (savedCharacter) {
  characterImages.forEach((img) => {
    if (img.alt === savedCharacter) {
      img.classList.add("selected");
    }
  });
}

if (savedUsername === null) {
  beforeContents.classList.remove(HIDDEN_CLASSNAME);
  afterContents.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  beforeContents.classList.add(HIDDEN_CLASSNAME);
  afterContents.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
