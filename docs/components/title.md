---
title: Title
---

Chart title is a heading describing the content of the chart.

## Document Headings

Semantically speaking, any content on the page should have a heading describing it. Headings are defined using `<h1>` to `<h6>` tags depending on the document flow, regardless if the content is a chart, a text or some kind of media.

```html
<h2> Heading </h2>
...
Content
...
```

## Table & caption

When displaying data in a `<table>`, use the `<caption>` tag to define the chart title. Captions can be displayed above or below the data.

```html
<table>
    <caption> Title above the chart </caption>
    ...
    <caption> Caption below the chart </caption>
</table>
```

## Figure & figcaption

When using `<figure>` as a wrapper tag to display data, use the `<figcaption>` tag to define the chart title. Figure captions can be displayed above or below the data.

```html
<figure>
    <figcaption> Title above the chart </figcaption>
    ...
    <figcaption> Title below the chart </figcaption>
</figure>
```

Figure wrappers can be used to style single-dimension datasets displayed as lists.
