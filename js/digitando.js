var content = 'Programando des de sempre !';
var text = document.getElementById('text');

var speed = 250;
var cont = 0;

function typeWriter() {
    if (cont < content.length) {
        text.textContent += content.charAt(cont);
        cont++;
        setTimeout(typeWriter, speed);
    } else {
        text.textContent = '';
        cont = 0;
        typeWriter();
    }
}

typeWriter();