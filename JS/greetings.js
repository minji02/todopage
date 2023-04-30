const logingForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting =document.querySelector("#greeting");
const todo = document.querySelector("#todo");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

// const link = document.querySelector("a");

function onLoginSubmit(event) { //첫 번째 인자는 event로 작성하는 것이 관행
    event.preventDefault();
    logingForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `${username}'s space`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event);
// } 

// link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    //show the form
    logingForm.classList.remove(HIDDEN_CLASSNAME);
    logingForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
}