/* Background on hero moved on mouse move */

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