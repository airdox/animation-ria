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

let items = document.querySelectorAll('.imageProfile')

items.forEach(element => {
    observer.observe(element)
});


let booksItems = document.querySelectorAll('.book')

booksItems.forEach(element => {
    observer.observe(element)
});

let books = document.getElementsByClassName('book');
Array.from(books).forEach(book => {
    book.onclick = () => {
        if (book.classList.contains('open')) {
            book.classList.remove("open")
        } else {
            book.classList.add("open")
        }
    }
})