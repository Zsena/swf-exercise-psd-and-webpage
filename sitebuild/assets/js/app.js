// Add active class to the current card (highlight it)
var cardsRow = document.getElementById("cardsRow");
var cards = cardsRow.getElementsByClassName("card");
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
