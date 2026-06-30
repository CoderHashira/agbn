const cards = document.getElementById("cards");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function getScrollAmount() {
    const card = cards.querySelector(".card");
    const gap = parseInt(getComputedStyle(cards).gap);

    return card.offsetWidth + gap;
}

next.addEventListener("click", () => {
    cards.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth"
    });
});

prev.addEventListener("click", () => {
    cards.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth"
    });
});

setInterval(() => {

    if(cards.scrollLeft + cards.clientWidth >= cards.scrollWidth - 5){

        cards.scrollTo({
            left:0,
            behavior:"smooth"
        });

    }else{

        cards.scrollBy({
            left:getScrollAmount(),
            behavior:"smooth"
        });

    }

},4000);