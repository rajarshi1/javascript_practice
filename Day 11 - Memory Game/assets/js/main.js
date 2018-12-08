const container = document.querySelector(".container");

var item = [],matched = [];
var counter = 0,firstClick = 0, secondClick = 0;

function createCard() {
    arrOfCard = [];
    for (i = 1, id = 1; i <= 16; i++) {
        let ele = document.createElement("div");
        ele.setAttribute("class", "item");
        ele.setAttribute("data-id", id);
        if (i % 2 == 0) id++;
        arrOfCard.push(ele);
    }
    shuffle(arrOfCard)
}

function shuffle(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    setIcon(array);
}

function setIcon(array) {
    array.forEach(v => {
        let childicon = document.createElement("i")
        childicon.setAttribute("class", "ic");
        switch (v.dataset.id) {
            case '1':
                childicon.setAttribute("class", "fab fa-accessible-icon");
                v.appendChild(childicon);
                break;
            case '2':
                childicon.setAttribute("class", "fas fa-address-book");
                v.appendChild(childicon);
                break;
            case '3':
                childicon.setAttribute("class", "fab fa-android");
                v.appendChild(childicon);
                break;
            case '4':
                childicon.setAttribute("class", "fab fa-apple");
                v.appendChild(childicon);
                break;
            case '5':
                childicon.setAttribute("class", "fas fa-air-freshener");
                v.appendChild(childicon);
                break;
            case '6':
                childicon.setAttribute("class", "fas fa-archway");
                v.appendChild(childicon);
                break;
            case '7':
                childicon.setAttribute("class", "fas fa-anchor");
                v.appendChild(childicon);
                break; 
                var item = document.querySelectorAll('.item');
                item.forEach((v) => v.addEventListener('click', flipBox)); //why is this here??
            case '8':
                childicon.setAttribute("class", "fas fa-adjust");
                v.appendChild(childicon);
                break;
        }
    })
    array.forEach(x => container.appendChild(x));
    addListner();
}


function addListner() {
    item = document.querySelectorAll('.item');
    item.forEach((v) => v.addEventListener('click', flipBox));
    hideUnmatched(item);
}

function flipBox(e) {
    if (matched.includes(e.target.dataset.id) || e.target.classList.contains("ic")) return;
    else {
        if (counter == 0) {
            firstClick = e.target.dataset.id;
            e.target.children[0].style.display = '';
            counter++;
        } else if (counter == 1) {
            secondClick = e.target.dataset.id;
            e.target.children[0].style.display = '';
            counter = 0;

            setTimeout(compare, 500);
        }
    }

    // e.target.children[0].style.display = '';
}



function compare() {
    if (firstClick == secondClick) {
        matched.push(firstClick);
    }
    endGame()
    hideUnmatched();
}

function hideUnmatched(items = item) {
    items.forEach((v) => {
        if (!matched.includes(v.dataset.id)) {
            v.children[0].style.display = 'none';
        }
    })
}

function endGame(){
    if (matched.length >= 8){
        alert('You Won');
    }
}


createCard();