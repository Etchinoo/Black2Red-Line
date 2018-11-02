let containerx = document.getElementById('containerX');

window.onload =function loop(){
for (let i = 0; i < 256;++i) {
    containerx.innerHTML += "<div class='divX' onclick ='RGB("+i+")'></div>";
    var divX = document.getElementsByClassName('divX')[i];
    divX.style.backgroundColor  += "rgb("+i+",0,0)";
    }
}
function RGB(i){
    alert("Rgb"+" "+i+",0,0");
    }