# Animation RIA

Animations CSS in onepage about RIA

## Installation

Install packages and dependencies

```bash
npm install
```

Run & Compile SCSS

```bash
npm run sass
```

## How it works ?

The SCSS will allow us to define the different states of the elements via classes, while Javascript will allow us to manage them with events.

## Javascript Events

### Onload & Timeout

When document is loaded, you do something. In this case here, change state. The timeout is used to delay the execution so as not to chain the execution too quickly.

```javascript
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
        element.classList.add('effect');
    }, 1000);
  });
```

### Onclick

When an element has been clicked, you do something. In this case here, change state.

```javascript
book.onclick = () => {
    element.classList.add('effect');
}
```

### IntersectionObserver

When an element is observable, you do something. In this case here, change state.

```javascript
let observer = new IntersectionObserver(function (observables) {
    observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.5) {
            element.classList.add('effect');
        }
    })
}, {
    threshold: [0.5, 0]
})

Array.from(elements).forEach(element => {
    observer.observe(element)
});
```

## SCSS properties

### Keyframes

Add an animation to an element cut into several pieces according to the percentage of progress over a given time.

```scss
@keyframes animation {
    0% {
        
    }
    50% {
        
    }
    100% {
        
    }
}

.element{
    animation: animation 1s;
}
```

### Transitions

Gives different states with classes

```scss
.element{
    transform: translate(0%, 0%);
    transition: 1s;
    &.effect{
        transform: translate(0%, 50%);
    }
}
```

### 3D

Gives a 3D effect to our element

```scss
.container{
    perspective: 1000px;
}

.element{
    transform-style: preserve-3d;
    backface-visibility: visible;
}
```

### Scroll

When scrolling, the page will reposition itself to the next closest element

```scss
.container{
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
}

.element{
    height: 100vh;
    scroll-snap-align: start;
}
```

## List of SCSS Animations

- Opening
- Slider Effect
- Katana transitions
- Hover books
- Open books

## List of Others Animations

- Background movement (Javascript)