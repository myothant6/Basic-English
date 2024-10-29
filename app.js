const button = document.querySelector('#menu-button');
const page = document.querySelector('.menu-profile');

var x = false;

button.onclick = () => {
    if (x) {
        page.classList.remove('menu-animate');
        x = false;
        button.innerHTML = 'menu';
    } else {
        page.classList.add('menu-animate');
        x = true;
        button.innerHTML = 'close';
    }
};


const div = document.querySelectorAll('.day');

onscroll = () => {
    div.forEach(div => {
        let top = scrollY;
        let offset = div.offsetTop - 200;
        let height = div.offsetHeight;
        
        if (top >= offset && top <= offset + height) {
            div.classList.add('animate');
        } else {
            div.classList.remove('animate');
        }
        
    });
};