let containerx = document.getElementById('containerX');
// let divX = document.querySelector(".divX");

for (let index = 0; index < 256;++index) {
    let divX = document.createElement('div');
        divX.classList = 'divX';
        containerx.appendChild(divX);
        var colorX = "(" + index + ", 0, 0)";    
}
let divX = document.querySelector(".divX");

document.querySelector(".divX").addEventListener('click', function displayColor() {
    alert(colorX);
 } );
