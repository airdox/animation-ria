/* Books appear when they are observable */

let booksItems = document.querySelectorAll('.book')

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

booksItems.forEach(element => {
    observer.observe(element)
});