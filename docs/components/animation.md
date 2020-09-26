---
title: Animation
---

By animating chart data you can add smooth interactions to make your chart interactive. You can add entrance animation when the chart or hover/focus animations when a user interacts with the data.

A number of built-in animations are provided but like other CSS frameworks, you can add your own custom CSS effects to any element.

## Entrance Animation

### Wrapper Animation

soon...

### Chart Bars Animation

soon...

### Pie Chart Animation

soon...

## Hover Effects

### Annotation Hover Effects

A nice interaction is when the user hovers over an annotation and it grows.

```css
.annotation:hover,
.annotation:focus {
    transform: scale(1.1);
}
```

### Legend Hover Effects

Legend hover effects can include a subtle motion of the entire legend:

```css
.legend {
    transition-duration: 0.6s;
}
.legend:hover,
.legend:focus {
    background-color: rgba(0, 0, 0, 0.1);
    transform: translateX(-1em);
}
```

Or a simple growing effect for each individual label:

```css
.legend > li:hover,
.legend > li:focus {
    transform: scale(1.1);
}
```
