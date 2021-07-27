const quoteText = document.getElementById("quote");
const button = document.getElementById("next");
function fetchQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => (quoteText.innerHTML = data.content));
}
fetchQuote();
button.addEventListener("click", fetchQuote);
