---
title: Design Principles
---

As this kind of framework has never been build before, we are learning new stuff while creating while developing the code.

Traditional chart libraries are heavily dependent on JS. They require complex configuration, options definition and an endless lists of properties and methods.

Large JS libraries usually effect your site performance. Old solutions usually have accessibility issues. And search engines having trouble to read the data.

## Modern Approach

Charts.css uses the basic clocks of the web - HTML & CSS. Your data displayed in HTML tags and styled using CSS.

### Advantages

All the raw data exist in the document as HTML tags - making it visible to screen readers and search engines. This improve accessibility and SEO.

We don't inject the HTML structure and don't injected nodes, there are no scripts running in the background slowing the load time.

If there are network issues and the stylesheet does not load, the user still sees the data.

### Disadvantages

Browser compatibility is a major concern. Not all the browsers support the required CSS features ([conic-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/conic-gradient) is a good example).

This kind of framework was never developed before, there is no one to learn from.

## Decoupled Components

Charts.css separates all the [chart components](/components) into a separate building blocks (titles, legends, axes etc). Each components has it's own HTML structure and styling classes. The user can decide whether to display the component or not by simply adding HTML tags with custom CSS classes. It also makes it easier to change the components positions relative to the chart.

## Intuitive Classes

It should be ease to turn data into a graph using a class or two. The project aims to use intuitive names to make it even easier to implement the chart without even reading the documentation.

## Customization

Relying on CSS, the framework let's you customize every element in the chart. We are highly encourage our users to customize their charts and teach the community new methods and advance use cases.

## No vendor-lock

Users are not required to use the default themes. The framework allows you to create your own themes with custom color schemes, CSS animations and other effects.
