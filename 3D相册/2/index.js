let wrap = document.querySelector(".wrap");
window.onload = function(){
    let lis = document.querySelectorAll("li");
    let deg = 360/lis.length;
    for(var i = 0;i<lis.length;i++){
        lis[i].style.transform = "rotateY("+deg*i+"deg) translateZ(350px)";
        lis[i].style.transition = "all 1s";
        lis[i].style.transitionDelay = i*0.1 + "s";
    }
}
document.onmousedown = function(e){
    var downclientX = e.clientX;
    var downclientY = e.clientY;
    this.onmousemove = function(e){
        var moveClientX = e.clientX;
        var moveClientY = e.clientY;
        var moveX = parseInt((moveClientX - downclientX)/5);
        var moveY = parseInt((moveClientY - downclientY)/20);
        wrap.style.transform = "rotateX("+moveY+"deg) rotateY("+moveX+"deg)";
        console.log(wrap)
    }
    this.onmouseup = function(){
        this.onmousemove = null;
        this.onmouseup = null;
        downclientX = 0;
        downclientY = 0;
    }
}
