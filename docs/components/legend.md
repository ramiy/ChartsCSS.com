---
title: Legend
---

Chart legend display the labels of the data sets appear on a chart.

The chart visualize the data, the legend list the data sets. Therefor the legend is a separate component with a separate HTML tag, usually a `<ul>`. You have the freedom to position the legend wherever you want. Just like any other HTML tag.

Use the `.legend` class to style your chart legend.

```html
<ul class="charts-css legend">
    <li>Label 1</li>
    <li>Label 2</li>
    <li>Label 3</li>
</ul>
```

## Legend Orientation

### Vertical Legend

Use the `.legend-block` class to aligning your chart legend dataset labels vertically.

```html
<ul class="charts-css legend legend-block">
    <li>Label 1</li>
    <li>Label 2</li>
    <li>Label 3</li>
</ul>
```

Usually used to position the legend above or below the chart.

### Horizontal Legend

Use the `.legend-inline` class to aligning your chart legend dataset labels horizontally.

```html
<ul class="charts-css legend legend-inline">
    <li>Label 1</li>
    <li>Label 2</li>
    <li>Label 3</li>
</ul>
```

Usually used to position the legend beside the chart.

## Legend Shape

### Circle

Use the `.legend-circle` class to display a circular shape label.

```html
<ul class="charts-css legend legend-circle">
    <li>Label 1</li>
    <li>Label 2</li>
    <li>Label 3</li>
</ul>
```

### Square

Use the `.legend-square` class to display a square shape label.

```html
<ul class="charts-css legend legend-square">
    <li>Label 1</li>
    <li>Label 2</li>
    <li>Label 3</li>
</ul>
```

### Rectangle

Use the `.legend-rectangle` class to display a rectangular shape label.

```html
<ul class="charts-css legend legend-rectangle">
    <li>Label 1</li>
    <li>Label 2</li>
    <li>Label 3</li>
</ul>
```

### Line

Use the `.legend-line` class to display a line shape label.

```html
<ul class="charts-css legend legend-line">
    <li>Label 1</li>
    <li>Label 2</li>
    <li>Label 3</li>
</ul>
```

## Label Colors

The labels are marked with unique colors, depending on the theme you are using. Changing the colors is as simple as changing an HTML element style.

To change the label color:

```css
.legend { color: #333; }
```

To change the background color of an individual label:

```css
.legend > li:nth-of-type(1)::before { background-color: red; }
.legend > li:nth-of-type(2)::before { background-color: green; }
.legend > li:nth-of-type(3)::before { background-color: blue; }
```

You can be creative and use css gradients or even use animation as your background color.
