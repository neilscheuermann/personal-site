---
path: youtube_progress_bar
date: 2020-04-05T18:20:31.657Z
title: Hide YouTube progress bar using JavaScript
description: Use a couple basic JavaScript tools like querySelector() and setAttribute() to access and change data on a webpage
tags: JavaScript
---

Make re-watching past sporting events more exciting, without the progress bar giving 
away the possibility of overtime. And have fun using JavaScript to solve a
real-world (...all-though really small) problem.

### TL;DR: 
- Use JavaScript to find the progress bar and time status displays. Paste in
  console and they will be hidden.
```js
document.querySelector('.ytp-progress-bar-container').setAttribute('hidden', true)
document.querySelector('.ytp-time-display').setAttribute('hidden', true)
document.querySelectorAll('.ytd-thumbnail-overlay-time-status-renderer').forEach(n => n.setAttribute('hidden', true))
```

### Psuedo-Code Steps
1. Find the element on the page 
2. Set the css attribute `hidden` to `true`

### 1. Find the element on the page

You can right-click on the element on the page and find the progress bar
(***Shortcut***: `command + shift + c` to enter inspect mode).

I found that the class name for the video progress bar was `ytp-progress-bar-container`
so I accessed the html element by typing `document.querySelector()` into the
browser console.

```js
const progressBar = document.querySelector('.ytp-progress-bar-container')
```

If I need to access a list of elements, like the time display on each video
thumbnail in the video, then I need to use `document.querySelectorAll()` to get
an array-like structure of elements.

```js
const timeDisplayArr = document.querySelector('.ytp-time-display').setAttribute('hidden', true)
```

### 2. Set the css attribut **hidden** to true

You can set a specific html attribute using that element's `.setAttribute()`
method.

If you have a list of elements, you can set each element's attribut using a
`.forEach()` method.

```js
const progressBar = document.querySelector('.ytp-progress-bar-container')
const timeDisplayArr = document.querySelector('.ytp-time-display').setAttribute('hidden', true)

progressBar.setAttribute('hidden', true)
timeDisplayArr.forEach(elem => elem.setAttribute('hidden', true))
```

Bam!! Now you don't have to worry about having the end of a backetball game
partially ruined! :D

