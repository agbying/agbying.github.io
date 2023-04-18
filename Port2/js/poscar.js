// I will be creating a different pen with touch support but right // now I have no time for it due to school

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");
const modal0 = document.querySelectorAll(".modal0");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
	current = number;
	prev = current - 1;
	next = current + 1;

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
		modal0[i].classList.remove("modal-target0");
		slides[i].classList.remove("prev");
		slides[i].classList.remove("next");
	}

	if (next == 5) {
		next = 0;
	}

	if (prev == -1) {
		prev = 4;
	}

	slides[current].classList.add("active");
	modal0[current].classList.add("modal-target0");
	slides[prev].classList.add("prev");
	slides[next].classList.add("next");
}
// Change The Picture and Associated Element Color when Color Options Are Clicked.
/*$(".product-colors span").click(function () {
	$(".product-colors span").removeClass("active");
	$(this).addClass("active");
	$(".active").css("border-color", $(this).attr("data-color-sec"))
	$("body").css("background", $(this).attr("data-color-primary"));
	$(".content h2").css("color", $(this).attr("data-color-sec"));
	$(".content h3").css("color", $(this).attr("data-color-sec"));
	$(".container .imgBx").css("background", $(this).attr("data-color-sec"));
	$(".container .details button").css("background", $(this).attr("data-color-sec"));
	$(".imgBx img").attr('src', $(this).attr("data-pic"));
  });*/






// I will be creating a different pen with touch support but right // now I have no time for it due to school

const slider1 = document.querySelector(".items1");
const slides1 = document.querySelectorAll(".item1");
const button1 = document.querySelectorAll(".button1");
const modal1 = document.querySelectorAll(".modal1");

let current1 = 0;
let prev1 = 4;
let next1 = 1;

for (let i = 0; i < button1.length; i++) {
	button1[i].addEventListener("click", () => i == 0 ? gotoPrev1() : gotoNext1());
}

const gotoPrev1 = () => current1 > 0 ? gotoNum1(current1 - 1) : gotoNum1(slides1.length - 1);

const gotoNext1 = () => current1 < 4 ? gotoNum1(current1 + 1) : gotoNum1(0);

const gotoNum1 = number1 => {
	current1 = number1;
	prev1 = current1 - 1;
	next1 = current1 + 1;

	for (let i = 0; i < slides1.length; i++) {
		slides1[i].classList.remove("active1");
		modal1[i].classList.remove("modal-target1");
		slides1[i].classList.remove("prev1");
		slides1[i].classList.remove("next1");
	}

	if (next1 == 5) {
		next1 = 0;
	}

	if (prev1 == -1) {
		prev1 = 4;
	}

	slides1[current1].classList.add("active1");
	modal1[current1].classList.add("modal-target1");
	slides1[prev1].classList.add("prev1");
	slides1[next1].classList.add("next1");
}
// Change The Picture and Associated Element Color when Color Options Are Clicked.
/*$(".product-colors span").click(function () {
	$(".product-colors span").removeClass("active1");
	$(this).addClass("active");
	$(".active").css("border-color", $(this).attr("data-color-sec"))
	$("body").css("background", $(this).attr("data-color-primary"));
	$(".content h2").css("color", $(this).attr("data-color-sec"));
	$(".content h3").css("color", $(this).attr("data-color-sec"));
	$(".container .imgBx").css("background", $(this).attr("data-color-sec"));
	$(".container .details button").css("background", $(this).attr("data-color-sec"));
	$(".imgBx img").attr('src', $(this).attr("data-pic"));
  });*/











// I will be creating a different pen with touch support but right // now I have no time for it due to school

const slider2 = document.querySelector(".items2");
const slides2 = document.querySelectorAll(".item2");
const button2 = document.querySelectorAll(".button2");
const modal2 = document.querySelectorAll(".modal2");

let current2 = 0;
let prev2 = 4;
let next2 = 1;

for (let i = 0; i < button2.length; i++) {
	button2[i].addEventListener("click", () => i == 0 ? gotoPrev2() : gotoNext2());
}

const gotoPrev2 = () => current2 > 0 ? gotoNum2(current2 - 1) : gotoNum2(slides2.length - 1);

const gotoNext2 = () => current2 < 4 ? gotoNum2(current2 + 1) : gotoNum2(0);

const gotoNum2 = number2 => {
	current2 = number2;
	prev2 = current2 - 1;
	next2 = current2 + 1;

	for (let i = 0; i < slides2.length; i++) {
		slides2[i].classList.remove("active2");
		modal2[i].classList.remove("modal-target2");
		slides2[i].classList.remove("prev2");
		slides2[i].classList.remove("next2");
	}

	if (next2 == 5) {
		next2 = 0;
	}

	if (prev2 == -1) {
		prev2 = 4;
	}

	slides2[current2].classList.add("active2");
	modal2[current2].classList.add("modal-target2");
	slides2[prev2].classList.add("prev2");
	slides2[next2].classList.add("next2");
}
// Change The Picture and Associated Element Color when Color Options Are Clicked.
/*$(".product-colors span").click(function () {
$(".product-colors span").removeClass("active2");
$(this).addClass("active");
$(".active").css("border-color", $(this).attr("data-color-sec"))
$("body").css("background", $(this).attr("data-color-primary"));
$(".content h2").css("color", $(this).attr("data-color-sec"));
$(".content h3").css("color", $(this).attr("data-color-sec"));
$(".container .imgBx").css("background", $(this).attr("data-color-sec"));
$(".container .details button").css("background", $(this).attr("data-color-sec"));
$(".imgBx img").attr('src', $(this).attr("data-pic"));
});*/











// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      var captionText = document.getElementById("modal-caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
   }
});
