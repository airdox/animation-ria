let books = document.getElementsByClassName('book');
const filters = document.getElementsByClassName("filter")
const resumesHistories = document.getElementsByClassName("resumeHistory")
const section = document.getElementsByTagName("section")[0]


/* Open books effect + Active Filter */

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




/* Filter removed when we want close a book */

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



/* Prevent scroll activation when a book is open */

window.addEventListener("keydown", function(e) {
    if (filters[1].classList.contains('active')) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }
}, false);