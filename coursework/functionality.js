

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



document.getElementById("jokers-tour").addEventListener("mouseover", highlight);
document.getElementById("jokers-tour").addEventListener("mouseout", delight);

document.getElementById("season-4").addEventListener("mouseover", highlight);
document.getElementById("season-4").addEventListener("mouseout", delight);

document.getElementById("no-Joe").addEventListener("mouseover", highlight);
document.getElementById("no-Joe").addEventListener("mouseout", delight);

document.getElementById("suits").addEventListener("mouseover", highlight);
document.getElementById("suits").addEventListener("mouseout", delight);

document.getElementById("Q-meme").addEventListener("mouseover", highlight);
document.getElementById("Q-meme").addEventListener("mouseout", delight);

document.getElementById("cats").addEventListener("mouseover", highlight);
document.getElementById("cats").addEventListener("mouseout", delight);

document.getElementById("ferret").addEventListener("mouseover", highlight);
document.getElementById("ferret").addEventListener("mouseout", delight);

document.getElementById("larry").addEventListener("mouseover", highlight);
document.getElementById("larry").addEventListener("mouseout", delight);

document.getElementById("sal-glory").addEventListener("mouseover", highlight);
document.getElementById("sal-glory").addEventListener("mouseout", delight);



function highlight1(){
    document.getElementById("jokers-tour").style = "border: solid blue 2px;"
    document.getElementById("season-4").style = "border: solid blue 2px;"
    document.getElementById("no-Joe").style = "border: solid blue 2px;"
    document.getElementById("suits").style = "border: solid blue 2px;"
    document.getElementById("Q-meme").style = "border: solid blue 2px;"
    document.getElementById("cats").style = "border: solid blue 2px;"
    document.getElementById("ferret").style = "border: solid blue 2px;"
    document.getElementById("larry").style = "border: solid blue 2px;"
    document.getElementById("sal-glory").style = "border: solid blue 2px;"

}


function delight() {
    document.getElementById("jokers-tour").style = "border: none";
    document.getElementById("season-4").style = "border: none"
    document.getElementById("no-Joe").style = "border: none"
    document.getElementById("suits").style = "border: none"
    document.getElementById("Q-meme").style = "border: none"
    document.getElementById("cats").style = "border: none"
    document.getElementById("ferret").style = "border: none"
    document.getElementById("larry").style = "border: none"
    document.getElementById("sal-glory").style = "border: none"
}