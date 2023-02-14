window.onload=function(){
var noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function() {
    noBtn.style.position = "absolute";
    var h = window.innerHeight;
    var w = window.innerWidth;

    var n = Math.random()
    noBtn.style.top += h*n + 'px';
   // console.log(h*n);
    noBtn.style.right = w*n + 'px';
    console.log(noBtn.style.right);
});

var yesBtn = document.getElementById("yesBtn");

yesBtn.onclick = (function(){
    //console.log("le");
    window.location.href='../yes.html'
   
   
   // window.location.href='https://www.youtube.com/watch?v=Q9v7ORAIDss';
})

}