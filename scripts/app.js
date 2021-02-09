document.body.onmousemove = event => {

    mousePositionX = event.clientX;
    mousePositionY = event.clientY;
    positionBackgroundX = (mousePositionX / 10) - 300;
    positionBackgroundY = (mousePositionY / 10) - 100;
    positionTextX = (mousePositionX / 70);
    positionTextY = (mousePositionY / 70);

    let div = document.getElementById("coverSection");
    div.style.backgroundPosition = positionBackgroundX + "px " + positionBackgroundY + "px";
    div.getElementsByTagName("h1")[0].style.left = positionTextX + "px";
    div.getElementsByTagName("h1")[0].style.top = positionTextY + "px";
}

let observer = new IntersectionObserver(function (observables) {
    observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.5) {
            observable.target.classList.add('effect') 
        }
        else{
            observable.target.classList.remove('effect')  
        }
    })
}, {
    threshold: [0.5, 0]
})

let observerArticlesWithoutFirst = new IntersectionObserver(function (observables) {
    observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.5) {
            console.log(observable)
            if (katanas[0].classList.contains('effect')) {
                katanas[0].classList.remove('effect')
            }
            else{
                katanas[0].classList.add('effect')
            }
        }
    })
}, {
    threshold: [0.5, 0]
})

let items = document.querySelectorAll('.imageProfile')

items.forEach(element => {
    observer.observe(element)
});

let katanas = document.getElementsByClassName("katana")
let articlesWithoutFirst = document.querySelectorAll("article:not(#coverSection)")
Array.from(articlesWithoutFirst).forEach(article => {
    observerArticlesWithoutFirst.observe(article)
});


let booksItems = document.querySelectorAll('.book')

booksItems.forEach(element => {
    observer.observe(element)
});

let books = document.getElementsByClassName('book');
const filters = document.getElementsByClassName("filter")
const resumesHistories = document.getElementsByClassName("resumeHistory")
const section = document.getElementsByTagName("section")[0]
Array.from(books).forEach(book => {
    book.onclick = () => {
        if (book.classList.contains('open')) {
            book.classList.remove("open")
            Array.from(filters).forEach((filter, index) => {
                if (index != 0) {
                    filter.classList.remove("active")
                }
            })
            Array.from(resumesHistories).forEach(resumeHistory => {
                resumeHistory.classList.remove("active")
            })
            section.classList.remove("static")
        } else {
            book.classList.add("open")
            Array.from(filters).forEach((filter, index) => {
                if (index != 0) {
                    filter.classList.add("active")
                }
            })
            Array.from(resumesHistories).forEach(resumeHistory => {
                resumeHistory.classList.add("active")
            })
            section.classList.add("static")
        }
    }
})

Array.from(filters).forEach((filter, index) => {
    if (index != 0) {
        filter.onclick = () => {
            Array.from(filters).forEach((filter, index) => {
                if (index != 0) {
                    filter.classList.remove("active")
                }
            })
            section.classList.remove("static")
            Array.from(books).forEach(book => {
                book.classList.remove("open")
            })
            Array.from(resumesHistories).forEach(resumeHistory => {
                resumeHistory.classList.remove("active")
            })
        }
    }
})

window.addEventListener("keydown", function(e) {
    if (filters[1].classList.contains('active')) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }
}, false);