---
path: youtube_progress_bar
date: 2020-03-30T18:20:31.657Z
title: Hide YouTube progress bar
description: \/
---
## Make re-watching past sporting events more exciting, without the progress bar giving away the possibility of overtime. Do it using some basic javascript!

`document.querySelector('.ytp-progress-bar-container').setAttribute('hidden', true)`

`document.querySelector('.ytp-time-display').setAttribute('hidden', true)`

`document.querySelectorAll('.ytd-thumbnail-overlay-time-status-renderer').forEach(n => n.setAttribute('hidden', true))`


Paste this in console to hide the YouTube progress bar. (Will write about the step later)