var i = 0;
function changeHeading(){
  if(i%3 === 0){
    document.getElementById("heading").innerHTML = "Age: 16";
  }
  else if(i%3 === 1){
    document.getElementById("heading").innerHTML = "Interests: Basketball, Art, Reading, and Coding";
  }
  else{
    document.getElementById("heading").innerHTML = "Get to know me!";
  }
  i++;
}
var a = 0;
function hidePic(){
  document.getElementById('myIm2').style.display = "none";

}

function showPic(){
  if(a%2 == 0){
    document.getElementById('myIm2').style.display = "block";
    a++;
  }else{
    document.getElementById('myIm2').style.display = "none";
    a++;
  }
}

function hidePic2(){
  document.getElementById('myIm').style.display = "none";

}
var x = 0;
function showPic2(){
  if(x%2 == 0){
    document.getElementById('myIm').style.display = "block";
    x++;
  }else{
    document.getElementById('myIm').style.display = "none";
    x++;
  }
}

function hidePic3(){
  document.getElementById('Im3').style.display = "none";
}
var y = 0;
function showPic3(){
  if(y%2 == 0){
    document.getElementById('Im3').style.display = "block";
    y++;
  }else{
    document.getElementById('Im3').style.display = "none";
    y++;
  }
}

function hidePic4(){
  document.getElementById('Im4').style.display = "none";
}
var p = 0;
function showPic4(){
  if(p%2 == 0){
    document.getElementById('Im4').style.display = "block";
    p++;
  }else{
    document.getElementById('Im4').style.display = "none";
    p++;
  }
}
var e = 0;
function changePic(){
  if(e%3 == 0){
    // document.getElementById('face').style = "transform:rotate(90deg);";
    document.getElementById('face').src = "pic3.JPG";

    e++;
  }else if(e%3 == 1){
    document.getElementById('face').src = "pic4.JPG";
    e++;
  }else{

    document.getElementById('face').src = "picture.JPG";

    e++;
  }
}
