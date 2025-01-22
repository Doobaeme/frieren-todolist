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

// 유효하지 않은 입력 차단 로직 (영어, 한글, 특수문자(@, -, _)만 허용, 공백 차단)
function handleInvalidInput(event) {
  const VALID_INPUT_REGEX = /^[a-zA-Z가-힣@_\-]*$/; // 유효성 검사 정규식
  const key = event.key;
  const isValidKey =
    VALID_INPUT_REGEX.test(key) || key === "Backspace" || key === "Delete";

  if (!isValidKey) {
    event.preventDefault();
  }
}

// 캐릭터 이미지 클릭 이벤트
characterImages.forEach((img) => {
  img.addEventListener("click", () => {
    characterImages.forEach((char) => char.classList.remove("selected"));
    img.classList.add("selected");
    localStorage.setItem(CHARACTER_KEY, img.alt);
  });
});

// 로그아웃 기능
function clickLogOut(event) {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(CHARACTER_KEY);
  localStorage.removeItem("todos");
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
  window.location.reload();
}

// 로그인 후 화면 표시
function paintGreetings(username) {
  const selectedCharacter = localStorage.getItem(CHARACTER_KEY);
  if (username.length > 5) {
    greeting.innerText = `용사 ${username}의\n여정 기록...`;
  } else {
    greeting.innerText = `용사 ${username}의 여정 기록...`;
  }
  displayCharacterImage(selectedCharacter);
  logOut.addEventListener("click", clickLogOut);
}

// 초기 상태 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);
let savedCharacter = localStorage.getItem(CHARACTER_KEY);

if (!savedCharacter) {
  savedCharacter = "frieren";
  localStorage.setItem(CHARACTER_KEY, savedCharacter);
}

if (savedCharacter) {
  characterImages.forEach((img) => {
    if (img.alt === savedCharacter) {
      img.classList.add("selected");
    } else {
      img.classList.remove("selected");
    }
  });
}

if (savedUsername === null) {
  beforeContents.classList.remove(HIDDEN_CLASSNAME);
  afterContents.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  loginInput.addEventListener("keydown", handleInvalidInput);
} else {
  beforeContents.classList.add(HIDDEN_CLASSNAME);
  afterContents.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
