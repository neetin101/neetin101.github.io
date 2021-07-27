const roles = ["Coding Enthusiast.", "Full Stack Developer.", "CSE UnderGrad Student."];
const colrs = ['white', 'red', 'green', 'yellow', 'aqua'];

var x = document.getElementById("roles");
var curr = 0;

setInterval(() => {
    x.innerHTML = roles[curr];
    curr++;
    if(curr > 2)
        curr = 0;
}, 1500);


var ele = document.getElementById("km-link");
var col = 0;

setInterval(() =>{
    if(col > 4)
        col = 0;
    ele.style.color = colrs[col];
    col++;
}, 200);
