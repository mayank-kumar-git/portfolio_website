let mainBg = document.querySelector(".main_backgroud");
let leftBg = document.querySelector(".left_parallex_backgroud");
let rightBg = document.querySelector(".right_parallex_backgroud");
let introText = document.querySelector(".hero_intro");
let aboutSec = document.querySelector("#about_section_Id");
let aboutSecWatermark = document.querySelector(".about_section_watermark");
let skillSec = document.querySelector("#skill_section_Id");
let skillSecWatermark = document.querySelector(".skill_section_watermark");
let projectSec = document.querySelector("#project_section_Id");
let projectSecWatermark = document.querySelector(".project_section_watermark");
let servicesSec = document.querySelector("#services_section_Id");
let servicesSecWatermark = document.querySelector(".services_section_watermark");

window.addEventListener("scroll", function () {
  var HeroValue = window.pageYOffset;
  // console.log(HeroValue);
  mainBg.style.transform = "translateY(-" + HeroValue * 0.1 + "px)";
  leftBg.style.transform = "translateY(-" + HeroValue * 1 + "px)";
  rightBg.style.transform = "translateY(-" + HeroValue * 1.5 + "px)";
  introText.style.transform = "translateY(-" + HeroValue * 0.2 + "px)";
  introText.style.opacity = 100 / HeroValue;
  var aboutValue = aboutSec.offsetTop - window.pageYOffset - 80;
  aboutSecWatermark.style.transform =
    "translate(-" + aboutValue * 0.1 + "px, -" + aboutValue * 0.1 + "px)";
  var skillValue = skillSec.offsetTop - window.pageYOffset - 80;
  skillSecWatermark.style.transform =
    "translate(" + skillValue * 0.1 + "px, -" + skillValue * 0.1 + "px)";
  var projectValue = projectSec.offsetTop - window.pageYOffset - 80;
  projectSecWatermark.style.transform =
    "translate(-" + projectValue * 0.1 + "px, -" + projectValue * 0.1 + "px)";
  var servicesValue = servicesSec.offsetTop - window.pageYOffset - 80;
  servicesSecWatermark.style.transform =
    "translate(" + servicesValue * 0.1 + "px, -" + servicesValue * 0.1 + "px)";
});

let centetProfile = document.querySelector(".center_profile_pic");
let leftProfile = document.querySelector(".left_profile_pic");
let rightProfile = document.querySelector(".right_profile_pic");

function aboutParallex() {
  window.addEventListener("scroll", function () {
    // centetProfile.style.transform = "translateY(-"+ (aboutValue*1.2) +"px)";
    leftProfile.style.transform =
      "translateY(-" +
      (window.pageYOffset - leftProfile.getBoundingClientRect().y) * 0.05 +
      "px)";
    rightProfile.style.transform =
      "translateY(-" +
      (window.pageYOffset - rightProfile.getBoundingClientRect().y) * 0.1 +
      "px)";

    console.log(
      "right" +
        (window.pageYOffset - rightProfile.getBoundingClientRect().y) * 0.1
    );
  });
}

const aboutOptions = {
  threshold: "0.2",
};

const aboutAppear = new IntersectionObserver(function (e) {
  if (!e[0].isIntersecting) return;
  else {
    aboutParallex();
  }
}, aboutOptions);

aboutAppear.observe(aboutSec);

// let projectBlueBox1 = document.querySelector(".blue_box1");
// function projectParallex() {
//   window.addEventListener("scroll", function () {
//     projectBlueBox1.style.transform =
//       "translateY(-" +
//       (window.pageYOffset - projectBlueBox1.getBoundingClientRect().y - 1500) *
//         0.05 +
//       "px)";
//     projectSecWatermark.style.transform =
//       "translate(-" + projectValue * 0.1 + "px, -" + projectValue * 0.1 + "px)";
//   });
// }
// const projectOption = {
//   threshold: "0.2",
// };

// const projectAppear = new IntersectionObserver(function (e) {
//   if (!e[0].isIntersecting) return;
//   else {
//     projectParallex();
//   }
// }, projectOption);

// projectAppear.observe(projectSec);
