document.getElementById("hi").addEventListener("click", myFunction);
document.getElementById("next").addEventListener("click", nextImg);
document.getElementById("back").addEventListener("click", prevImg);
document.getElementById("box");
document.getElementById("login").addEventListener("click",scroll);
document.getElementById("submit").addEventListener("click",getUserDetails);
document.getElementById("about").addEventListener("click",scrollForAboutUS);

setInterval(nextImg, 2000)
var imageNo = 1;

function myFunction() {
 alert('hi');
}

function changeImage() {
    var image = document.getElementById('box');
    if (image.src.match("iplane.jpg")) {
        image.src = "itrain.jpg";
    }
    else {
        image.src = "iplane.jpg";
    }
}

function nextImg(){
    var image = document.getElementById('box');
    if(imageNo==0) {
        image.src="iplane.jpg";
        imageNo++;
    }
    else if(imageNo===1){
        image.src="itrain.jpg";
        imageNo++;
    }else if(imageNo===2){
        image.src="ibus.jpg";
        imageNo++;
    }else if(imageNo===3){
        image.src="itheatre.jpg";
        imageNo = 0 ;    // image set to zero to loop it 
    }
    
}

function prevImg(){
    var image = document.getElementById('box');
    if (image.src.match("iplane.jpg")) {
        image.src = "itheatre.jpg";
        imageNo--;
    }else if(image.src.match("itrain.jpg")){
        image.src = "iplane.jpg";
        imageNo--;
    }else if(image.src.match("ibus.jpg")){
        image.src = "itrain.jpg";
        imageNo--;
    }else if(image.src.match("itheatre.jpg")){
        image.src = "ibus.jpg";
        //imageNo--;
    }
    
}


function scroll(){
    window.scrollTo(0,300);
    } 

function scrollForAboutUS(){
    window.scrollTo(0,1200);
    } 


 function getUserDetails(){
     
     var x = document.getElementById("iUserEmail").value;
     document.getElementById("check").innerHTML = x;
     /*<h1 class="heading">Make your<br> reservation </h1>
     <h2  class="subheading">with us you can easily book any ticket  you need<br> 
         to travel safely , thanks to our detailed sytem of searching<br> and booking tickets</h2>*/
     
    // x = Document.getElementById("iUserEmail").value;
    //x=Number(document.getElementById("iUserEmail").value);
    //document.getElementById("check").value = 10;
    //.s.s.
}   

