/*Name this external file gallery.js*/

function upDate(previewPic) {
  document.getElementById("image").style.backgroundImage =
    "url('" + previewPic.src + "')";

  document.getElementById("image").style.backgroundSize = "cover";

  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML =
    "Hover over an image below to display here.";
}

function focusEle(element) {
  element.style.borderColor = "red";
}

function blurEle(element) {
  element.style.borderColor = "black";
}

function loading() {
  alert("Page is loaded");
}

function setTabIndex() {
  let imageGallery = document.getElementsByClassName("preview");

  for (let i = 0; i < imageGallery.length; i++) {
    imageGallery[i].tabIndex = i + 1;
    console.log("Image " + (i + 1) + " tabindex: " + imageGallery[i].tabIndex);
    console.log("succuss");
  }
}

window.addEventListener("load", setTabIndex);
