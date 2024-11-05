const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

let x = false;

button.onclick = () => {
    if (x) {
        button.innerHTML = "menu";
        nav.classList.remove('animate');
        x = false;
    } else {
        button.innerHTML = "close";
        nav.classList.add('animate');
        x = true;
    }
};