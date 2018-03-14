var name_array = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"] ;
var folder = "slides";
var current = 0;
var path = " "
var next_slide = document.getElementById('next_slide');
var prew_slide = document.getElementById('prew_slide');
var target = document.images.namedItem("target");


function check_array_range ()
{
  var length = name_array.length ;
  if (current < 0){
    current = length - 1 ;
  }
  else {
    if (current >= length ) {
      current = 0 ;
    }
  }
}

function path_calc () {
  path = folder+"/"+name_array[current];
}

 function next() {
  current ++;
  check_array_range();
  path_calc();
  $('#target').fadeOut(1500);
  setTimeout (() => {  target.src = path; },1500); 
  $('#target').fadeIn(1500);
}

function prew() {
  current --;
  check_array_range();
  path_calc();
  $('#target').fadeOut(1500);
  setTimeout (() => {  target.src = path; },1500);
  $('#target').fadeIn(1500);
}

next_slide.addEventListener("click",next);
prew_slide.addEventListener("click",prew);
