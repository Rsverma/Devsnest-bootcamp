var bookCount = 0;
var remainCount = 36;
var container = document.getElementById("box-container");
for (var i = 0; i < 36; i++) {
  var div = document.createElement("div");
  div.classList.add("box");
  container.appendChild(div);
}
container.onclick = (e) => {
  var box = e.target;
  if (box.classList.contains("box")) {
    var booked = document.getElementById("booked");
    var remain = document.getElementById("remain");
    if (box.classList.contains("box-clicked")) {
      box.classList.remove("box-clicked");
      booked.innerHTML = --bookCount;
      remain.innerHTML = ++remainCount;
    } else {
      box.classList.add("box-clicked");
      booked.innerHTML = ++bookCount;
      remain.innerHTML = --remainCount;
    }
  }
};
