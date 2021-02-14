let katanas = document.getElementsByClassName("katana")
let articlesWithoutFirst = document.querySelectorAll("article:not(#coverSection)")

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

Array.from(articlesWithoutFirst).forEach(article => {
    observerArticlesWithoutFirst.observe(article)
});