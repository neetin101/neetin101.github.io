/*  Carousel    */

var imgLoc = "./../images/proj"
var projLocStrt = "projects/proj";
var projLocEnd = "/index.html";

const labels = ['Food Blog', 'A Sample Invoice', 'Registration Form', 'Travel Blog', 'LOTUS Company Website', 'A Real-time Analog Clock', 'My Portfolio'];

var total = labels.length;
var curr = 1;
var nxt = 2;

var currImg = document.getElementById("curr-img");

function next(){

    curr = nxt;

    nxt++;
    if(nxt > total)
        nxt = 1;

    currImg.src = imgLoc+curr+".png";
    document.getElementById("next-img").src = imgLoc+nxt+".png";
    document.getElementById("carousel-label").innerHTML = labels[curr-1];
    if(curr == 7)
        document.getElementById("curr-link").href = "./../../index.html";
    else
        document.getElementById("curr-link").href = projLocStrt + curr + projLocEnd;
}

function previous(){
    
    nxt = curr;
    
    curr--;
    if(curr < 1)
    curr = total;
    
    currImg.src = imgLoc+curr+".png";
    document.getElementById("next-img").src = imgLoc+nxt+".png";
    document.getElementById("carousel-label").innerHTML = labels[curr-1];
    if(curr == 7)
        document.getElementById("curr-link").href = "./../../index.html";
    else
        document.getElementById("curr-link").href = projLocStrt + curr + projLocEnd;

}


/*  Adding functionality to hover and hold the foreground picture in carousel   */

var timer = setInterval(next, 3000);

function mouseOver(){
    clearInterval(timer);
}
function mouseOut(){
    timer = setInterval(next, 3000);
}


currImg.onmouseover = ()=>{
    clearInterval(timer);
};

currImg.onmouseout = ()=>{
    timer = setInterval(next, 3000);
};

/*  -------------------------------------------------------------------------    */

document.getElementById("sld-bck").addEventListener('click', previous);
document.getElementById("sld-frwd").addEventListener('click', next);
