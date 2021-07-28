var expanded = true;
var curr = 2;   //  current menu no. active

function contract(){
    expanded = false;
    document.getElementById("exp-sign").innerHTML = "v";
    var nn = document.getElementsByClassName("sub-edu");
    var sz = nn.length;
    for(var i=0; i<sz; i++)
        nn[i].classList.add("hiddn");
}

function expand(){
    expanded = true;
    document.getElementById("exp-sign").innerHTML = "^";
    var nn = document.getElementsByClassName("sub-edu");
    var sz = nn.length;
    for(var i=0; i<sz; i++)
        nn[i].classList.remove("hiddn");
}

function togEdu(){
    if(expanded)
        contract();
    else
        expand();
}


function ClearRightBox(){
    var nn = document.getElementsByClassName("cont");
    var sz = nn.size();
    for(var i=0; i<sz; i++)
        nn[i].style.display = "none";
}


function togEdu1()
{
    if(curr == 2)
        return;
    
    document.getElementById("edu1").classList.add("selected");
    document.getElementById("cont-1").style.display = "block";
    
    if(curr == 5){
        document.getElementById("skil").classList.remove("selected");
        document.getElementById("edu").classList.add("selected");
        document.getElementById("cont-4").style.display = "none";
        document.getElementById("head-txt").textContent = "Academics";
    }
    else{
        document.getElementById("edu"+(curr-1)).classList.remove("selected");
        document.getElementById("cont-" + (curr-1)).style.display = "none";
    }

    curr = 2;
}

function togEdu2()
{
    if(curr == 3)
        return;
    
    document.getElementById("edu2").classList.add("selected");
    document.getElementById("cont-2").style.display = "block";
    
    if(curr == 5){
        document.getElementById("skil").classList.remove("selected");
        document.getElementById("edu").classList.add("selected");
        document.getElementById("cont-4").style.display = "none";
        document.getElementById("head-txt").textContent = "Academics";
    }
    else{
        document.getElementById("edu"+(curr-1)).classList.remove("selected");
        document.getElementById("cont-" + (curr-1)).style.display = "none";
    }

    curr = 3;
}

function togEdu3()
{
    if(curr == 4)
        return;
    
    document.getElementById("edu3").classList.add("selected");
    document.getElementById("cont-3").style.display = "block";
    
    if(curr == 5){
        document.getElementById("skil").classList.remove("selected");
        document.getElementById("edu").classList.add("selected");
        document.getElementById("cont-4").style.display = "none";
        document.getElementById("head-txt").textContent = "Academics";
    }
    else{
        document.getElementById("edu"+(curr-1)).classList.remove("selected");
        document.getElementById("cont-" + (curr-1)).style.display = "none";
    }

    curr = 4;
}

function togSkil()
{
    if(curr == 5)
        return;

    document.getElementById("head-txt").textContent = "Skillset";
    var nn = document.getElementsByClassName("cont");
    for(var i=0; i<nn.length; i++)
        nn[i].style.display = "none";
    document.getElementById("cont-4").style.display = "block";
    

    document.getElementById("edu").classList.remove("selected");
    document.getElementById("edu"+(curr-1)).classList.remove("selected");
    document.getElementById("skil").classList.add("selected");

    curr = 5;
}

document.getElementById("edu").addEventListener('click', togEdu);
document.getElementById("edu1").addEventListener('click', togEdu1);
document.getElementById("edu2").addEventListener('click', togEdu2);
document.getElementById("edu3").addEventListener('click', togEdu3);
document.getElementById("skil").addEventListener('click', togSkil);


/*  Toggle function for Programming Languages Section   */

var htog1_open = true;

function htog1(){
    document.getElementById("tab-prog").classList.toggle("hiddn");
    if(htog1_open){
        htog1_open = false;
        document.getElementById("htog1-sign").innerHTML = "&or;";
    }
    else{
        htog1_open = true;
        document.getElementById("htog1-sign").innerHTML = "&and;";
    }
}

document.getElementById("htog-1").addEventListener('click', htog1);

//  -------------------------------------------------------------------



/*  Toggle function for Technologies Section   */

var htog2_open = true;

function htog2(){
    document.getElementById("tab-tech").classList.toggle("hiddn");
    if(htog2_open){
        htog2_open = false;
        document.getElementById("htog2-sign").innerHTML = "&or;";
    }
    else{
        htog2_open = true;
        document.getElementById("htog2-sign").innerHTML = "&and;";
    }
}

document.getElementById("htog-2").addEventListener('click', htog2);

//  -------------------------------------------------------------------



/*  Toggle function for Operating Systems Section   */

var htog3_open = true;

function htog3(){
    document.getElementById("tab-ops").classList.toggle("hiddn");
    if(htog3_open){
        htog3_open = false;
        document.getElementById("htog3-sign").innerHTML = "&or;";
    }
    else{
        htog3_open = true;
        document.getElementById("htog3-sign").innerHTML = "&and;";
    }
}

document.getElementById("htog-3").addEventListener('click', htog3);

//  -------------------------------------------------------------------







