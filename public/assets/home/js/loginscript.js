const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
container.classList.remove("active");
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function isRegisterPage()
{
    return window.location.pathname.includes("/register")

}

if (isRegisterPage()){
    container.classList.add("active")
}

function isContainerActive()
{
    return container.classList.contains("active")
}