var t = document.getElementById("cursor");
var e = document.getElementById("cursor2");

document
  .getElementsByTagName("body")[0]
  .addEventListener("mousemove", function (n) {
    (t.style.left = n.clientX + "px"),
      (t.style.top = n.clientY + "px"),
      (e.style.left = n.clientX + "px"),
      (e.style.top = n.clientY + "px");
  });

function dynamicMouseOver(t) {
  e.classList.add("dynamic_hover_class");
}

function dynamicMouseOut(t) {
  e.classList.remove("dynamic_hover_class");
}
dynamicMouseOut();

for ( var r = document.querySelectorAll(".dynamic_hover_target"), a = r.length - 1; a >= 0; a--) {
    dynamicMouse(r[a]);
}

function dynamicMouse(t) {
  t.addEventListener("mouseover", dynamicMouseOver); t.addEventListener("mouseout", dynamicMouseOut);
}



function staticMouseOver(t) {
  e.classList.add("static_hover_class");
}

function staticMouseOut(t) {
  e.classList.remove("static_hover_class");
}
staticMouseOut();

for ( var r = document.querySelectorAll(".static_hover_target"), a = r.length - 1; a >= 0; a--) {
  staticMouse(r[a]);
}

function staticMouse(t) {
  t.addEventListener("mouseover", staticMouseOver); t.addEventListener("mouseout", staticMouseOut);
}
