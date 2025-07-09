const filterList = document.querySelector(".filter");
const fliterButtons = document.querySelectorAll(".filter-btn")
const cards = document.querySelectorAll(".card")

fliterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        console.log(filter);

        updateActiveButton(e.target);

        filterCards(filter);

    })
})

function updateActiveButton (newButton) {
    
    filterList.querySelector('.active').classList.remove('active');

    newButton.classList.add('active');

}

function filterCards(cardFilter) {
    cards.forEach((card) => {
        const cardCatagory = card.getAttribute('data-catagory');

        if (cardFilter === 'all' || cardFilter === cardCatagory) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    })

    
}

function openOverlay1() {
    document.getElementById("overlay1").style.display = "block";
}
function closeOverlay1() {
    document.getElementById("overlay1").style.display = "none";
}

function openOverlay2() {
    document.getElementById("overlay2").style.display = "block";
}
function closeOverlay2() {
    document.getElementById("overlay2").style.display = "none";
}