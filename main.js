let txt = "Great code is not just written - it is crafted like art", i = 0

document.addEventListener("load", autoType());

function autoType() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(autoType, 100);
  }

  else {
    setTimeout(() => {
      i = 0;
      document.getElementById("text").innerHTML = "";
      autoType();
    }, 1000);
  }
}