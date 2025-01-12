const beforeContents = document.querySelector("#before-login");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

const afterContents = document.querySelector("#after-login");
const greeting = document.querySelector(".greeting");
const logOut = document.querySelector(".logout_button");

// string(문자)만 포함하는 정의는 대문자로 작성
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 특수문자 및 공백 제한
loginInput.addEventListener("input", function () {
  const regex = /[^a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣._@-]/g;
  this.value = this.value.replace(regex, "");
});

// 로그아웃 기능
function clickLogOut(event) {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(TODOS_KEY);
  window.location.reload();
}

// 로컬스토리지 정보가 없을 경우 폼 입력 출력 기능
function onLoginSubmit(event) {
  event.preventDefault();
  const typedUsername = loginInput.value;
  beforeContents.classList.add(HIDDEN_CLASSNAME);
  afterContents.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, typedUsername);
  paintGreetings(typedUsername);
}

// 로컬스토리지 정보가 있을 경우 h1 출력 기능
function paintGreetings(username) {
  greeting.innerText = `용사 ${username}의 여정 기록...`;
  logOut.addEventListener("click", clickLogOut);
}

// 로컬스토리지 정보 유무 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  beforeContents.classList.remove(HIDDEN_CLASSNAME);
  afterContents.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  beforeContents.classList.add(HIDDEN_CLASSNAME);
  afterContents.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
