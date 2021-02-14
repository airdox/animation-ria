/* Import modules */

let listImported = [
    'scripts/modules/opening.js',
    'scripts/modules/backgroundMovement.js',
    'scripts/modules/transitionsPages.js',
    'scripts/modules/booksApparitions.js',
    'scripts/modules/booksOpenEffect.js'
]

listImported.forEach(imported => {
    let scriptElement = document.createElement('script');
    scriptElement.src = imported
    document.body.appendChild(scriptElement)
});






/* Slashed Effect Katana On Loader */

document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
        document.body.getElementsByClassName("slashed-effect")[0].classList.remove('effect');
    }, 1000);
    window.setTimeout(function() {
        document.body.getElementsByTagName("section")[0].classList.remove('black');
        document.body.getElementsByTagName("section")[0].classList.add('fading');
        window.setTimeout(function() {
            document.body.getElementsByTagName("section")[0].classList.remove('fading');
        }, 2000);
        window.setTimeout(function() {
            document.body.getElementsByClassName("slash-text")[0].classList.remove('effect');
        }, 1000);
    }, 2000);
  });