//function which provides message showing the form was sent in the contact us page
function send_form(id, text){
    var getId = document.getElementById(id);
    getId.innerHTML = text;

}


//function which tells the user they have logged in and logged out provided that they put in something 
//for the email and password

var counter = 1;
function login(){
   
    // if(counter % 2 == 0){
    //     alert("You have been logged in!");
    // } else {
    //     alert("You have been loggout out");
    // }
    // counter ++;

    var email = document.forms["sign-in"]["email"].value;
    var password = document.forms["sign-in"]["password"].value;
    if(email == "" || email == "email"){
        alert("To log in, you must have an email address!");
    } else {
        if(password == "" || password == "password") {
            alert("To log in, you must have your password!");
        } 
    }
    
    if(counter%2 == 0 && (email != "" && email != "email") && (password != "" && password != "password" )) {
        alert("You have been logged in");
        
    }
    if(counter % 2 != 0 && (email != "" && email != "email") && (password != "" && password != "password" ) ){
        alert("You have been logged out!");
    }
    counter++;


}


//function which increments the number of list items by 1 by clicking on an image in the merch page
var totalItems = 0;
function incrementList(){
    totalItems++;
    if(totalItems == 1) {
        alert("You have " + totalItems + " item on your crave list");
    } else {
        alert("You have " + totalItems +" items on your crave list");
    }
}




//event listeners for each image in merch page - to be able to click on the images

document.getElementById("t-shirt").addEventListener("click", incrementList);
document.getElementById("purple-t").addEventListener("click", incrementList);
document.getElementById("hoodie").addEventListener("click", incrementList);
document.getElementById("mug").addEventListener("click", incrementList);





//event listeners for each image image in the image gallery - (1) adding decoration outside the image, (2) removing the added decoration, (3) greying out the image
document.getElementById("jokers-tour").addEventListener("mouseover", highlight1);
document.getElementById("jokers-tour").addEventListener("mouseout", delight2);
document.getElementById("jokers-tour").addEventListener("mouseout", grayImage1);



document.getElementById("season-4").addEventListener("mouseover", highlight2);
document.getElementById("season-4").addEventListener("mouseout", delight2);
document.getElementById("season-4").addEventListener("mouseout", grayImage2);


document.getElementById("no-Joe").addEventListener("mouseover", highlight3);
document.getElementById("no-Joe").addEventListener("mouseout", delight3);
document.getElemetnById("no-Joe").adEventListener("mouseout", grayImage3);


document.getElementById("suits").addEventListener("mouseover", highlight4);
document.getElementById("suits").addEventListener("mouseout", delight4);
document.getElementById("suits").addEventListener("mouseout", grayImage4);


document.getElementById("Q-meme").addEventListener("mouseover", highlight5);
document.getElementById("Q-meme").addEventListener("mouseout", delight5);
document.getElementById("Q-meme").addEventListener("mouseout", grayImage5);



document.getElementById("cats").addEventListener("mouseover", highlight6);
document.getElementById("cats").addEventListener("mouseout", delight6);
document.getElementById("cats").addEventListener("mouseout", grayImage6);



document.getElementById("ferret").addEventListener("mouseover", highlight7);
document.getElementById("ferret").addEventListener("mouseout", delight7);
document.getElementById("ferret").addEventListener("mouseout", grayImage7);


document.getElementById("larry").addEventListener("mouseover", highlight8);
document.getElementById("larry").addEventListener("mouseout", delight8);
document.getElementById("larry").addEventListener("mouseout", grayImage8);


document.getElementById("sal-glory").addEventListener("mouseover", highlight9);
document.getElementById("sal-glory").addEventListener("mouseout", delight9);
document.getElementById("sal-glory").addEventListener("mouseout", grayImage9)


//functions which add extra decoration to each image when the user hovers their cousor over it in the image gallery
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



//functions which remove the decoration when the user brings their cursor off it
function delight1() {
    document.getElementById("jokers-tour").style = "border: none";
}

function delight2() {
    document.getElementById("season-4").style = "border: none";
}

function delight3() {
    document.getElementById("no-Joe").style = "border: none";
}



function delight4() {
    document.getElementById("suits").style = "border: none";
}


function delight5() {
    document.getElementById("Q-meme").style = "border: none";
}

function delight6() {
    document.getElementById("cats").style = "border: none";
}


function delight7() {
    document.getElementById("ferret").style = "border: none";
}


function delight8() {
    document.getElementById("larry").style = "border: none";
}


function delight9() {
    document.getElementById("sal-glory").style = "border: none";
}


//functions which grey off the image when the user hovrs their cursor off it
function grayImage1(){
    delight1();
    var grayedTour = document.getElementById("jokers-tour");
    grayedTour.style.filter = "grayscale(100%)";
}

function grayImage2(){
    delight2();
    var grayedSeason = document.getElementById("season-4");
    grayedSeason.style.filter = "grayscale(100%)";
}

function grayImage3(){
    delight3();
    var grayedNoJoe = document.getElementById("no-Joe");
    grayedNoJoe.style.filter = "grayscale(100%)";
}


function grayImage4(){
    delight4();
    var grayedSuits = document.getElementById("suits");
    grayedSuits.style.filter = "grayscale(100%)";
}


function grayImage5(){
    delight5();
    var grayedQ = document.getElementById("Q-meme");
    grayedQ.style.filter = "grayscale(100%)";
}


function grayImage6(){
    delight6();
    var grayedCats = document.getElementById("cats");
    grayedCats.style.filter = "grayscale(100%)";
}


function grayImage7(){
    delight7();
    var grayedFerret = document.getElementById("ferret");
    grayedFerret.style.filter = "grayscale(100%)";
}


function grayImage8(){
    delight8();
    var grayedLarry = document.getElementById("larry");
    grayedLarry.style.filter = "grayscale(100%)";
}

function grayImage9(){
    delight9();
    var grayedSal = document.getElementById("sal-glory");
    grayedSal.style.filter = "grayscale(100%)";
}



////event listeners for images in the Jokers page - (1) revealing hidden image when hovering over the original (2) reverting back to the original after hovering away
document.getElementById("q-hidden").addEventListener("mouseover", revealHiddenQImage);
document.getElementById("murr-hidden").addEventListener("mouseover", revealHiddenMurrImage);
document.getElementById("sal-hidden").addEventListener("mouseover", revealHiddenSalImage);
document.getElementById("joe-hidden").addEventListener("mouseover", revealHiddenJoeImage);

document.getElementById("q-hidden").addEventListener("mouseout", returnOriginalQ);
document.getElementById("murr-hidden").addEventListener("mouseout", returnOriginalMurr);
document.getElementById("sal-hidden").addEventListener("mouseout", returnOriginalSal);
document.getElementById("joe-hidden").addEventListener("mouseout", returnOriginalJoe);




//function which changes the image of Q when the user overs their cursor over it
function revealHiddenQImage(){
    document.getElementById("q-hidden").src = "images/qPeterPan.png";
}

//function which changes the image of Murr when the user overs their cursor over it
function revealHiddenMurrImage(){
    document.getElementById("murr-hidden").src = "images/human-pinata.webp";
}

//function which changes the image of Sal when the user overs their cursor over it
function revealHiddenSalImage() {
    document.getElementById("sal-hidden").src = "images/sal-and-tattoo.webp";
}

//function which changes the image of Joe when the user overs their cursor over it
function revealHiddenJoeImage() {
    document.getElementById("joe-hidden").src = "images/wrapped-house.jpg";
}


//function which brings the original image of Q back when the user takes their cursor out of the image
function returnOriginalQ(){
    document.getElementById("q-hidden").src = "images/Q.webp";
}

//function which brings the original image of Murr back when the user takes their cursor out of the image
function returnOriginalMurr(){
    document.getElementById("murr-hidden").src = "images/Murr.webp";
}

//function which brings the original image of Sal back when the user takes their cursor out of the image
function returnOriginalSal() {
    document.getElementById("sal-hidden").src = "images/Sal.webp";
}

//function which brings the original image of Joe back when the user takes their cursor out of the image
function returnOriginalJoe() {
    document.getElementById("joe-hidden").src = "images/Joe.webp";
}




function submit_event() {
    var title = document.forms["events"]["event_title"].value;
    var date = document.forms["events"]["event_date"].value;
    if(title == ""){
        alert("An event must have a title!");
    } 
    else {
        if(date.length == 0) {
            alert("An event must have a date!");
        } else {
            alert("Event submitted! The society will contact you soon!")
        }
    }
}
