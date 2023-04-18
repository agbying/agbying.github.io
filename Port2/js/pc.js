// set up text to print, each item in array is new line
var aText = new Array(
  "Fonts"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}


typewriter();

//var textareaValue = document.getElementById('textArea story2').value


function msgSend1() {
  // Grab to inserted value of input
  var Eingabe = document.getElementById("story1").value;
  document.getElementById("output1").innerHTML = (Eingabe);
}

function msgSend2() {
  // Grab to inserted value of input
  var Eingabe = document.getElementById("story2").value;
  document.getElementById("output2").innerHTML = (Eingabe);
}

function msgSend3() {
  // Grab to inserted value of input
  var Eingabe = document.getElementById("story3").value;
  document.getElementById("output3").innerHTML = (Eingabe);
}