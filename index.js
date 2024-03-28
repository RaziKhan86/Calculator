var screen = document.getElementById('screen');
var btn = document.getElementsByClassName('btn');

for (item of btn) {
    item.addEventListener('click', function(e) {
        btnText = e.target.innerText;
        screen.value += btnText;
    });
}

function factorial() {
    var fact = 1;
    var ans = screen.value;
    for (i = 1; i <= screen.value; i++) {
        fact = fact * ans;
        ans--;
    }
    screen.value = fact;
}

function backspace() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function pi() {
    screen.value = 3.14;
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function e() {
    screen.value = 2.71;
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function radian() {
    var radian = screen.value;
    var ans = (radian * 100) / 3.14;
    screen.value = ans;
}

function Degree() {
    var degree = screen.value;
    var ans = (degree * 180) / 3.14;
    screen.value = ans;
}