

function send_form(id, text){
    var getId = document.getElementById(id);
    getId.innerHTML = text;

}

var counter = 2;
function login(){
   
    if(counter % 2 == 0){
        alert("You have been logged in!");
    } else {
        alert("You have been loggout out");
    }
    counter ++;
}



document.getElementById("jokers-tour").addEventListener("mouseover", highlight1);
document.getElementById("jokers-tour").addEventListener("mouseout", delight1);


document.getElementById("season-4").addEventListener("mouseover", highlight2);
document.getElementById("season-4").addEventListener("mouseout", delight2);


document.getElementById("no-Joe").addEventListener("mouseover", highlight3);
document.getElementById("no-Joe").addEventListener("mouseout", delight3);


document.getElementById("suits").addEventListener("mouseover", highlight4);
document.getElementById("suits").addEventListener("mouseout", delight4);


document.getElementById("Q-meme").addEventListener("mouseover", highlight5);
document.getElementById("Q-meme").addEventListener("mouseout", delight5);


document.getElementById("cats").addEventListener("mouseover", highlight6);
document.getElementById("cats").addEventListener("mouseout", delight6);


document.getElementById("ferret").addEventListener("mouseover", highlight7);
document.getElementById("ferret").addEventListener("mouseout", delight7);

document.getElementById("larry").addEventListener("mouseover", highlight8);
document.getElementById("larry").addEventListener("mouseout", delight8);


document.getElementById("sal-glory").addEventListener("mouseover", highlight9);
document.getElementById("sal-glory").addEventListener("mouseout", delight9);



function highlight1(){
    document.getElementById("jokers-tour").style = "border: dotted purple 6px;"

}

function highlight2(){
    document.getElementById("season-4").style = "border: dotted purple 6px;"
}

function highlight3(){
    document.getElementById("no-Joe").style = "border: dotted purple 6px;"
}

function highlight4(){
    document.getElementById("suits").style = "border: dotted purple 6px;"
}

function highlight5(){
    document.getElementById("Q-meme").style = "border: dotted purple 6px;"
}


function highlight6(){
    document.getElementById("cats").style = "border: dotted purple 6px;"
}

function highlight7(){
    document.getElementById("ferret").style = "border: dotted purple 6px;"
}
function highlight8(){
    document.getElementById("larry").style = "border: dotted purple 6px;"
}

function highlight9(){
    document.getElementById("sal-glory").style = "border: dotted purple 6px;"

}






function delight1() {
    document.getElementById("jokers-tour").style = "border: none";
}



function delight2() {
    document.getElementById("season-4").style = "border: none"
}



function delight3() {
    document.getElementById("no-Joe").style = "border: none"
}



function delight4() {
    document.getElementById("suits").style = "border: none"
}


function delight5() {
    document.getElementById("Q-meme").style = "border: none"
}

function delight6() {
    document.getElementById("cats").style = "border: none"
}



function delight7() {
    document.getElementById("ferret").style = "border: none"
}


function delight8() {
    document.getElementById("larry").style = "border: none"
}


function delight9() {
    document.getElementById("sal-glory").style = "border: none"
}


