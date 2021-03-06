// <-------------- MOBILE MENU -------------->

const mobileNav = document.getElementsByClassName('mobile-nav');
const popUpNav = document.getElementsByClassName('nav');

for (let i = 0; i < mobileNav.length; i++) {

  mobileNav[i].addEventListener("click", openMobileMenu);

  function openMobileMenu(){
  if(popUpNav[i].style.display === "block"){
    popUpNav[i].style.display = "none";
  } else{
    popUpNav[i].style.display = "block";
  }
}
}

// <-------------- CONTACT ICONS: RIGHT: OPEN -------------->

const iconsRight = document.getElementsByClassName('iconsRight');
const iconsBoxInd = document.querySelectorAll('.box');

for (let i = 0; i < iconsRight.length; i++) {
  for(let j = 0; j < iconsBoxInd.length; j++){

  iconsBoxInd[j].addEventListener("mouseover", openRightIcons);

  function openRightIcons(){
  if(iconsBoxInd[j].style.width === "175px"){
    iconsBoxInd[j].style.right = "0px"; 
  } else{
    iconsBoxInd[j].style.right = "0px";
  }
}
}
}
// <-------------- CONTACT ICONS: RIGHT: CLOSE -------------->

for (let i = 0; i < iconsRight.length; i++) {
  for(let j = 0; j < iconsBoxInd.length; j++){

  iconsBoxInd[j].addEventListener("mouseout", closeRightIcons);

  function closeRightIcons(){
  if(iconsBoxInd[j].style.width === "175px"){
    iconsBoxInd[j].style.right = "175px";
  } else{
    iconsBoxInd[j].style.right = "-125px";
  }
}
}
}
// <-------------- FAQ DROPDOWN SECTION -------------->

const question = document.getElementsByClassName('question');
const plusIcon = document.querySelectorAll('#plus');
const questionOf = document.querySelectorAll('.question');

for (let i = 0; i < question.length; i++) {
  
  question[i].addEventListener("click", faqAnswers);  
  function faqAnswers() {
  
    let content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
      plusIcon[i].textContent = "+";
      questionOf[i].style.background = "#000";
    } else {
      content.style.display = "block";
      plusIcon[i].textContent = "-";
      questionOf[i].style.background = "#141414";
    }
  }
}