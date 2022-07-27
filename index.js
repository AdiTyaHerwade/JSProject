let counter = 0;
let firstSelection = "";
let secondSelection = "";
let move = 0;

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        // console.log("true")
        card.classList.add("clicked");
        move += 1;
        moves.innerHTML = "Moves: " + move;
        if (counter === 0) {
            firstSelection = card.getAttribute("animal");
            counter++;
        } else {
            secondSelection = card.getAttribute("animal");
            counter = 0;
            if (firstSelection === secondSelection) {
                const correctCards = document.querySelectorAll(
                    ".card[animal = '" + firstSelection + "']"
                );
                correctCards[0].classList.add("checked");
                correctCards[0].classList.remove("clicked");
                correctCards[1].classList.add("checked");
                correctCards[1].classList.remove("clicked");

            }else{
                const incoreectCards = document.querySelectorAll(".card.clicked");

                incoreectCards[0].classList.add("shake");
                incoreectCards[1].classList.add("shake");

                setTimeout(() => {
                    incoreectCards[0].classList.remove("shake");
                    incoreectCards[0].classList.remove("clicked");
                    incoreectCards[1].classList.remove("shake");
                    incoreectCards[1].classList.remove("clicked");

                }, 800);
             }
        }

        // console.log(firstSelection);
        // console.log(secondSelection);
    })
})
